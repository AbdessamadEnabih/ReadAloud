import sqlite3

def create_connection():
    conn = sqlite3.connect("articles.db")
    return conn





