# CSV and Google Sheets Permission Management

This project contains two Python scripts: `main.py` for creating a CSV file of user permissions from a JSON input, and `google-api.py` for exporting the permissions to a Google Sheet using the Google Sheets API.

---

## main.py (CSV Creation)

### File Description:
`main.py` reads a JSON file containing user permissions and generates a CSV file named `output_permissions.csv`.

### Files Required:
- `permissions.json`: Contains the user permissions in JSON format.

### How to Run:
1. Open a terminal and navigate to the directory containing `main.py` and `permissions.json`.
2. Run the following command:

```bash
   python main.py
````
The script will generate a file called output_permissions.csv that contains the permissions for each user. The script loads permissions.json, extracts unique permissions from the users, and creates a CSV file.
The first row of the CSV contains the permission headers, and subsequent rows contain 1 or 0 indicating whether each user has that permission.


### google-api.py (Google Sheets Integration)

### File Description:
google-api.py reads the same permissions.json file and writes the user permissions to a Google Sheet using the Google Sheets API.

### Files Required:
- `permissions.json`: Contains the user permissions in JSON
- `service_account.json`: Google Cloud service account credentials (see Setup Instructions below).

### Install the required dependencies:

```bash
pip install gspread google-auth
````
- Set up a Google Cloud project and enable the Google Sheets API.
- Create a service account, download the service_account.json file, and place it in the same directory as google-api.py.

### How to Run
- Ensure permissions.json and service_account.json are in the same directory as google-api.py.
- Run the following command
  
```bash
python google-api.py
````
- The script will generate a Google Sheet and print the link to access it.

### Setup Instructions for Google API (this is how I did)
1. Go to the Google Cloud Console.
2. Create a new project and enable the Google Sheets API.
3. Create a Service Account and download the credentials as service_account.json.
4. Share your Google Sheet with the service account's email.

I have included a sample service_account.json to avoid sharing sensitive information.



