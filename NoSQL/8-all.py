#!/usr/bin/env python3
"""
List all documents in a collection
"""

def list_all(mongo_collection):
    """
    Return all documents in a MongoDB collection.
    If collection is empty, return an empty list.
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find())
