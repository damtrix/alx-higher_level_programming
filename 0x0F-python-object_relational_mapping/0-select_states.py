#!/usr/bin/python3
import MySQLdb
from sys import agrv

if __name__ == '__main__':
    db_connect = MySQL.connect(
        host="localhost", user=argv[1], port=3306, passwd=argv[2], db=argv[3]
    )