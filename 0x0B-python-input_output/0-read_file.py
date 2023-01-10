#!/usr/bin/python3
"""This module read a text file and prints it to stdout"""


def read_file(filename=""):
    """Prints the contents of a UTF8 file to stdout"""
    with open(filename, encoding='utf-8') as myFile:
        print(myFile.read(), end="")
