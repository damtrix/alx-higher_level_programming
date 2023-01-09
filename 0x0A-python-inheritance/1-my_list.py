#!/usr/bin/python3
"""
    This is a class MyList that inherits from list
"""


class MyList(list):
    """A class that inherits from list"""
    def print_sorted(self):
        """"A function that prints the sorted list"""
        print(sorted(self))
