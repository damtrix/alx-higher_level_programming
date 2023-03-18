#!/usr/bin/python3
"""
This script prints all City objects
from the database `hbtn_0e_14_usa`.
"""

from sys import argv
from relationship_state import State, Base
from relationship_city import City
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == '__main__':
    """
    Access to the database and get the cities
    from the database.
    """
    
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.format(argv[1], argv[2], argv[3]))
    
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    
    cr_state = State(name='California')
    cr_city = City(name='San Francisco')
    cr_state.cities.append(cr_city)
    
    session.add(cr_state)
    session.commit()
    session.close()
    