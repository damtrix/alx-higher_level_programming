#!/usr/bin/python3
"""
This script lists all State objects
from the database `hbtn_0e_6_usa`.
"""

from sys import argv
from model_state import State, Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == '__main__':
    """
    Access to the database and get a state
    from the database.
    """
    
    engine = create_engine('mysql+myqldb://{}:{}@localhost:3306/{}'.format(argv[1], argv[2], argv[3]))
    
    Session = sessionmaker(bind=engine)
    session = Session()
    
    data = State(name="Louisiana")
    session.add(data)
    session.commit()
    
    print('{0}'.format(data.id))
    session.close()
