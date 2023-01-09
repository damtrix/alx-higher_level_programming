#!/usr/bin/python3
"""Verify if the object is the exact instance of a specifed class"""


def is_same_class(obj, a_class):
    """Return True if it is an exact instance of a specified class and false
    otherwise"""
    return (type(obj) == a_class)
