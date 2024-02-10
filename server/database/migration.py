import helpers as db


def create_table():
    conn = db.create_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        url TEXT NOT NULL,
        audio LONGBLOB NOT NULL
        )
    """
    )

    conn.commit()
    conn.close()


def migrate():
    create_table()


migrate()
