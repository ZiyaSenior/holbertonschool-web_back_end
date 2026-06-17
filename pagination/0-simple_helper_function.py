#!/usr/bin/env python3
"""
Simple helper function for pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """Return a tuple containing start and end indexes."""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
