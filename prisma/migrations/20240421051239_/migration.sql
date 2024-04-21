-- CreateTable
CREATE TABLE "checkout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "approve" INTEGER NOT NULL,
    "key" INTEGER NOT NULL,
    "checkout_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "return_date" DATETIME NOT NULL,
    CONSTRAINT "checkout_user_fkey" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "checkout_approve_fkey" FOREIGN KEY ("approve") REFERENCES "approve" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "authorizer" TEXT NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "approve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" INTEGER NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "checkout_user_key" ON "checkout"("user");

-- CreateIndex
CREATE UNIQUE INDEX "checkout_approve_key" ON "checkout"("approve");

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "approve_id_key" ON "approve"("id");
