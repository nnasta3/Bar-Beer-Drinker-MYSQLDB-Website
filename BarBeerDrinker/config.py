import os

class Config(object):
    DEBUG = False
    TESTING = False
    SECRET_KEY = 'cs336project'
   
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://admin:cs336project@cs336.c56bu3bguitv.us-east-2.rds.amazonaws.com/BarBeerDrinker'

class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True

class TestinConfig(Config):
    TESTING = True
