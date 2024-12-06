#!/usr/bin/env python3
"""complex innotation"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """takes a string k an an int OR float v returns a tuple"""
    return (k, float(v ** 2))
