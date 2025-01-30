import sqlite3
import uuid
import os
from datetime import datetime

def migrate_database(db_path):
    # Connect to SQLite database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        # 1. First check if the columns exist, if not add them
        cursor.execute("PRAGMA table_info(articles)")
        columns = [column[1] for column in cursor.fetchall()]
        
        if 'document_id' not in columns:
            cursor.execute("ALTER TABLE articles ADD COLUMN document_id varchar(255)")
        if 'locale' not in columns:
            cursor.execute("ALTER TABLE articles ADD COLUMN locale varchar(255)")

        # 2. Get all articles that don't have a document_id
        cursor.execute("""
            SELECT id 
            FROM articles 
            WHERE document_id IS NULL OR locale IS NULL
        """)
        articles = cursor.fetchall()

        # 3. Update each article with a document_id and locale
        for (article_id,) in articles:
            # Generate a unique document_id
            document_id = str(uuid.uuid4())
            
            # Set default locale to 'en'
            locale = 'en'
            
            # Update the article
            cursor.execute("""
                UPDATE articles 
                SET document_id = ?, 
                    locale = ?,
                    updated_at = ?
                WHERE id = ?
            """, (document_id, locale, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), article_id))

        # 4. Create the new index if it doesn't exist
        cursor.execute("""
            SELECT name 
            FROM sqlite_master 
            WHERE type='index' AND name='articles_documents_idx'
        """)
        if not cursor.fetchone():
            cursor.execute("""
                CREATE INDEX articles_documents_idx 
                ON articles (document_id, locale, published_at)
            """)

        # 5. Remove the unique constraint on slug if it exists
        cursor.execute("""
            SELECT name 
            FROM sqlite_master 
            WHERE type='index' AND name='articles_slug_unique'
        """)
        if cursor.fetchone():
            cursor.execute("DROP INDEX articles_slug_unique")

        # Commit the changes
        conn.commit()
        print("Migration completed successfully!")
        
        # Print summary
        cursor.execute("SELECT COUNT(*) FROM articles")
        total = cursor.fetchone()[0]
        cursor.execute("SELECT COUNT(*) FROM articles WHERE document_id IS NOT NULL AND locale IS NOT NULL")
        migrated = cursor.fetchone()[0]
        print(f"\nMigration Summary:")
        print(f"Total articles: {total}")
        print(f"Articles migrated: {migrated}")
        print(f"Articles remaining: {total - migrated}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        conn.rollback()
    finally:
        conn.close()

if __name__ == "__main__":
    db_path = "~/strapi-nextjs-blog/backend/data.db"
    # Expand user path (handles ~)
    db_path = os.path.expanduser(db_path)
    migrate_database(db_path)
