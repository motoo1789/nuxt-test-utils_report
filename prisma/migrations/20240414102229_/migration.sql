/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `checkout_user` on the `checkout` table. All the data in the column will be lost.
  - Added the required column `approve` to the `checkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `checkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `return_date` to the `checkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `checkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorizer` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mail` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User2_profileId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Profile";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User2";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "approve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" INTEGER NOT NULL,
    "date" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_checkout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "approve" INTEGER NOT NULL,
    "key" INTEGER NOT NULL,
    "checkout_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "return_date" DATETIME NOT NULL,
    CONSTRAINT "checkout_user_fkey" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "checkout_approve_fkey" FOREIGN KEY ("approve") REFERENCES "approve" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_checkout" ("id") SELECT "id" FROM "checkout";
DROP TABLE "checkout";
ALTER TABLE "new_checkout" RENAME TO "checkout";
CREATE UNIQUE INDEX "checkout_user_key" ON "checkout"("user");
CREATE UNIQUE INDEX "checkout_approve_key" ON "checkout"("approve");
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "authorizer" TEXT NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mail" TEXT NOT NULL
);
INSERT INTO "new_user" ("id") SELECT "id" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "approve_id_key" ON "approve"("id");
