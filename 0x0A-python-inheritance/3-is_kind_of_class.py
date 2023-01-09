#!/usr/bin/python3
"""verify if the object is an instance of, or if the object is an instance of
class that inherited from, the specified class"""


def is_kind_of_class(obj, a_class):
    """Returns True if the object is an instance of a specified class and
    and False otherwise"""
    return (isinstance(obj, a_class))
