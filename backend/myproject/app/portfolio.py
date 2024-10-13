# app/portfolio.py

import pandas as pd
import chromadb
import uuid

class Portfolio:
    def __init__(self, file_path="resource/my_portfolio.csv"):
        self.file_path = file_path
        self.data = pd.read_csv(file_path)

        try:
            self.chroma_client = chromadb.PersistentClient(path='vectorstore')
        except AttributeError as e:
            print(f"ChromaDB client initialization error: {e}")

        try:
            self.collection = self.chroma_client.get_or_create_collection(name="portfolio")
        except Exception as e:
            print(f"Error creating or accessing collection: {e}")

    def load_portfolio(self):
        try:
            if not self.collection.count():
                for _, row in self.data.iterrows():
                    self.collection.add(
                        documents=[row["Techstack"]],
                        metadatas=[{"links": row["Links"]}],
                        ids=[str(uuid.uuid4())]
                    )
        except Exception as e:
            print(f"Error loading portfolio: {e}")

    def query_links(self, skills):
        try:
            result = self.collection.query(query_texts=[skills], n_results=2)
            return result.get('metadatas', [])
        except Exception as e:
            print(f"Error querying links: {e}")
            return []
