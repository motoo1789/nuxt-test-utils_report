-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_approve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_approve" ("date", "id", "user") SELECT "date", "id", "user" FROM "approve";
DROP TABLE "approve";
ALTER TABLE "new_approve" RENAME TO "approve";
CREATE UNIQUE INDEX "approve_id_key" ON "approve"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
delete from sqlite_sequence where name='approve';
delete from sqlite_sequence where name='checkout';