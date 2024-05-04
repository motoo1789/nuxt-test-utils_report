/*
  Warnings:

  - You are about to drop the column `authorizer` on the `user` table. All the data in the column will be lost.
  - Added the required column `approver` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "approver" TEXT NOT NULL,
    "create_date" DATETIME NOT NULL,
    "mail" TEXT NOT NULL
);
INSERT INTO "new_user" ("create_date", "id", "mail", "name") SELECT "create_date", "id", "mail", "name" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
