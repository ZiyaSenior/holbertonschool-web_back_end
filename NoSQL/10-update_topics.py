#!/usr/bin/env python3
"""
Update topics of a school document
"""

def update_topics(mongo_collection, name, topics):
    """
    Update the topics of a school document based on name
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
