#!/usr/bin/python3
"""This a string to a text file utf-8 and returns the character"""


def write_file(filename="", text=""):
    """Function that write a string into a utf-8 file"""
    with open(filename, mode='w', encoding='utf-8') as myFile:
        return myFile.write(text)
