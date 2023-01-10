#!/usr/bin/python3
"""This module appends a text to the end of a text file"""


def append_write(filename="", text=""):
    """Function that appends a text to the end of a text file"""
    with open(filename, mode="a", encoding="utf-8") as myFile:
        return myFile.write(text)
