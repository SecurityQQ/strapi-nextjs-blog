#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sqlite3
import uuid
import os
from datetime import datetime

def migrate_authors(db_path):
    # Connect to SQLite database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        # 1. First check if the columns exist, if not add them
        cursor.execute("PRAGMA table_info(authors)")
        columns = [column[1] for column in cursor.fetchall()]
        
        if 'document_id' not in columns:
            cursor.execute("ALTER TABLE authors ADD COLUMN document_id varchar(255)")
            print("Added document_id column")
        if 'locale' not in columns:
            cursor.execute("ALTER TABLE authors ADD COLUMN locale varchar(255)")
            print("Added locale column")

        # 2. Get all authors that don't have a document_id
        cursor.execute("""
            SELECT id 
            FROM authors 
            WHERE document_id IS NULL OR locale IS NULL
        """)
        authors = cursor.fetchall()

        # 3. Update each author
        for (author_id,) in authors:
            document_id = str(uuid.uuid4())
            locale = 'en'
            
            cursor.execute("""
                UPDATE authors 
                SET document_id = ?, 
                    locale = ?,
                    updated_at = ?
                WHERE id = ?
            """, (document_id, locale, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), author_id))
            print(f"Updated author ID: {author_id}")

        # 4. Create the new index
        cursor.execute("""
            SELECT name 
            FROM sqlite_master 
            WHERE type='index' AND name='authors_documents_idx'
        """)
        if not cursor.fetchone():
            cursor.execute("""
                CREATE INDEX authors_documents_idx 
                ON authors (document_id, locale)
            """)
            print("Created authors_documents_idx index")

        # Commit changes
        conn.commit()
        print("\nMigration completed successfully!")
        
        # Print summary
        cursor.execute("SELECT COUNT(*) FROM authors")
        total = cursor.fetchone()[0]
        cursor.execute("SELECT COUNT(*) FROM authors WHERE document_id IS NOT NULL AND locale IS NOT NULL")
        migrated = cursor.fetchone()[0]
        print(f"\nMigration Summary:")
        print(f"Total authors: {total}")
        print(f"Authors migrated: {migrated}")
        print(f"Authors remaining: {total - migrated}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        conn.rollback()
    finally:
        conn.close()

if __name__ == "__main__":
    # Use absolute path to the database
    db_path = "/home/aleksandrmalysev/strapi_backup/strapi-nextjs-blog/backend/data.db"
    migrate_authors(db_path)
