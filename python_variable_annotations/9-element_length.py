#!/usr/bin/env python3
"""annotation"""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """fucntion that have parameters return values with types"""
    return [(i, len(i)) for i in lst]
