-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_approve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL,
    CONSTRAINT "approve_user_fkey" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_approve" ("date", "id", "status", "user") SELECT "date", "id", "status", "user" FROM "approve";
DROP TABLE "approve";
ALTER TABLE "new_approve" RENAME TO "approve";
CREATE UNIQUE INDEX "approve_id_key" ON "approve"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
