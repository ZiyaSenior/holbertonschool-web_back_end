#!/usr/bin/env python3
"""
Nginx log statistics from MongoDB
"""

from pymongo import MongoClient


client = MongoClient("mongodb://127.0.0.1:27017")
collection = client.logs.nginx

total_logs = collection.count_documents({})

print(f"{total_logs} logs")
print("Methods:")

methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

for method in methods:
    print(f"\tmethod {method}: {collection.count_documents({'method': method})}")

status_check = collection.count_documents({
    "method": "GET",
    "path": "/status"
})

print(f"{status_check} status check")
