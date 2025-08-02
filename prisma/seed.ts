import { Prisma, PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Saptak Bose",
    email: "cunningsap002@gmail.com",
  },
];

export async function seedDB() {
  for (const u of userData) {
    await prisma.user.create({
      data: u,
    });
  }
}

seedDB();
