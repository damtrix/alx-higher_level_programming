#!/usr/bin/python3
"""
This script lists all State objects
from the database `hbtn_0e_6_usa`.
"""

from sys import argv
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == '__main__':
    """
    Access to the database and get the cities
    from the database.
    """
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.format(argv[1], argv[2], argv[3]))
    
    Session = sessionmaker(bind=engine)
    session = Session()
    
    states = session.query(State).filter(State.name.contains('a'))
    
    if states is not None:
        for state in states:
            session.delete(state)
            
    session.commit()
    
    session.close()