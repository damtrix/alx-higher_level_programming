#!/usr/bin/python3
if __name__ == '__main__':
    import sys

    counter = len(sys.argv) - 1
    add = 0
    for i in range(counter):
        add += int(sys.argv[i + 1])
    print('{}'.format(add))
