import pymongo
import requests

# Replace the uri string with your MongoDB deployment's connection string.
uri = ""

#connect to Mongodb
client = pymongo.MongoClient(uri)
db = client["browser-history"]
collection = db["chrome"]

#replace hf_token with your hugging face token
hf_token = ""


embedding_url = embedding_url = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"


def generate_embedding(text: str) -> list[float]:

  response = requests.post(
    embedding_url,
    headers={"Authorization": f"Bearer {hf_token}"},
    json={"inputs": text})

  if response.status_code != 200:
    raise ValueError(f"Request failed with status code {response.status_code}: {response.text}")

  return response.json()


query ="listening to music"


results = collection.aggregate([
  {"$vectorSearch": {
    "queryVector": generate_embedding(query),
    "path": "description_embedding_hf",
    "numCandidates": 100,
    "limit": 4,
    "index": "DescriptionSemanticSearch",
      }}
])

for document in results:
    print(f'Url Name: {document["url"]},\nDescription: {document["description"]}\n')