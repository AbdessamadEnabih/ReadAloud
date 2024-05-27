import sqlite3


def create_connection():
    conn = sqlite3.connect("articles.db")
    return conn


def insertArticle(values):
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO articles (title, url, audio) VALUES (?, ?)",
        (values.title, values.url, values.audio),
    )
    conn.commit()
    return cursor.lastrowid


def retrieveArticle(url: str):
    conn = create_connection()
    cursor = conn.cursor()

    query = "SELECT id, url, audio FROM articles WHERE url = ?"
    params = (url,)

    cursor.execute(query, params)
    return cursor.fetchall()
