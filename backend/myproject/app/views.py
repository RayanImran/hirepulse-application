from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .chains import Chain
from .utils import clean_text, extract_text_from_pdf
import os

class ProcessView(APIView):
    def post(self, request, format=None):
        print("Received POST request")
        # Assuming job description is directly provided in the request body
        job_description = request.data.get('job_description')
        uploaded_file = request.FILES.get('resume')

        print(f"Job description: {job_description}")
        print(f"uploaded_file: {uploaded_file}")

        if not job_description or not uploaded_file:
            print("Missing job description or resume file")
            return Response({'error': 'Job description and resume file are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Extract resume content
            print("Extracting resume content")
            resume_content = extract_text_from_pdf(uploaded_file)
            print("Resume content extracted")

            # Clean job description
            print("Cleaning job description")
            job_description = clean_text(job_description)
            print("Job description cleaned")

            # Initialize Chain
            print("Initializing Chain")
            llm = Chain()
            print("Chain initialized")

            # Extract jobs
            print("Extracting jobs")
            jobs = llm.extract_jobs(job_description)
            print(f"Jobs extracted: {jobs}")

            if not jobs:
                print("No jobs found")
                return Response({'error': 'No jobs found in the job description.'}, status=status.HTTP_400_BAD_REQUEST)

            job = jobs[0]  # Use the first job for simplicity
            print(f"Processing job: {job}")

            # Match resume and generate email
            print("Matching resume")
            matched_resume = llm.match_resume(job.get('description', ''), resume_content)
            print("Resume matched")

            print("Generating email")
            email = llm.write_mail(job, matched_resume)
            print("Email generated")

            # Calculate ATS score
            print("Calculating ATS score")
            ats_score = llm.calculate_ats_score(job.get('description', ''), resume_content)
            print(f"ATS score calculated: {ats_score}")

            # Prepare response
            response_data = {
                'job_description': job_description,
                'resume_content': resume_content,
                'email': email,
                'ats_score': ats_score,
            }
            print("Response data prepared")

            return Response(response_data, status=status.HTTP_200_OK)

        except Exception as e:
            print("An error occurred")
            print(str(e))
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
