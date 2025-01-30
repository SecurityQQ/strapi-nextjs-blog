import sqlite3

# Paths
BACKUP_DB = "/home/aleksandrmalysev/strapi_backup/strapi-nextjs-blog/backend/data.db"
PROD_DB = "/home/aleksandrmalysev/strapi-nextjs-blog/backend/data.db"

# Tables to migrate
TABLES = {
    "articles": ["id", "title", "description", "slug", "created_at", "updated_at", "published_at", "created_by_id", "updated_by_id"],
    "authors": ["id", "name", "email", "created_at", "updated_at", "created_by_id", "updated_by_id"],
    "categories": ["id", "name", "slug", "description", "created_at", "updated_at", "created_by_id", "updated_by_id"],
    "tools": ["id", "identifier", "name", "description", "created_at", "updated_at", "published_at", "created_by_id", "updated_by_id"]
}

def migrate_table(table, columns):
    """
    Drops existing records in the production database and migrates new data from backup.
    """
    print(f"🚀 Migrating table: {table}")

    # Connect to databases
    src_conn = sqlite3.connect(BACKUP_DB)
    dest_conn = sqlite3.connect(PROD_DB)
    src_cur = src_conn.cursor()
    dest_cur = dest_conn.cursor()

    # Drop all existing data in the table
    dest_cur.execute(f"DELETE FROM {table};")
    dest_conn.commit()
    print(f"🗑️  Deleted all existing records from {table}")

    # Get backup data
    src_query = f"SELECT {', '.join(columns)} FROM {table}"
    src_cur.execute(src_query)
    rows = src_cur.fetchall()

    # Insert into production
    placeholders = ", ".join(["?" for _ in columns])
    insert_query = f"INSERT INTO {table} ({', '.join(columns)}) VALUES ({placeholders})"
    
    dest_cur.executemany(insert_query, rows)
    dest_conn.commit()

    # Close connections
    src_conn.close()
    dest_conn.close()
    print(f"✅ Migration complete for {table}")

# Run migration for each table
for table, columns in TABLES.items():
    migrate_table(table, columns)

print("🎉 All migrations completed successfully!")

