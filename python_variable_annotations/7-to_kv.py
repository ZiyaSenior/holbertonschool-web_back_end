#!/usr/bin/env python3
"""Module that creates a tuple from a key and the square of a value."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with k and the square of v as float."""
    return (k, float(v * v))
