/*
  Warnings:

  - You are about to drop the column `user` on the `approve` table. All the data in the column will be lost.
  - Added the required column `approver` to the `approve` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_approve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "approver" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL,
    CONSTRAINT "approve_approver_fkey" FOREIGN KEY ("approver") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_approve" ("date", "id", "status") SELECT "date", "id", "status" FROM "approve";
DROP TABLE "approve";
ALTER TABLE "new_approve" RENAME TO "approve";
CREATE UNIQUE INDEX "approve_id_key" ON "approve"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
