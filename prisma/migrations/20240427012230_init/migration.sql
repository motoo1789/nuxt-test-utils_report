-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_checkout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "approve" INTEGER NOT NULL,
    "key" INTEGER NOT NULL,
    "checkout_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "return_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "checkout_user_fkey" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "checkout_approve_fkey" FOREIGN KEY ("approve") REFERENCES "approve" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_checkout" ("approve", "checkout_date", "id", "key", "return_date", "user") SELECT "approve", "checkout_date", "id", "key", "return_date", "user" FROM "checkout";
DROP TABLE "checkout";
ALTER TABLE "new_checkout" RENAME TO "checkout";
CREATE UNIQUE INDEX "checkout_user_key" ON "checkout"("user");
CREATE UNIQUE INDEX "checkout_approve_key" ON "checkout"("approve");
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "authorizer" TEXT NOT NULL,
    "create_date" DATETIME NOT NULL,
    "mail" TEXT NOT NULL
);
INSERT INTO "new_user" ("authorizer", "create_date", "id", "mail", "name") SELECT "authorizer", "create_date", "id", "mail", "name" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
