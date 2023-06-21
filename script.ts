import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  prisma.user.create({
    data: {
      email: 'mdogg@gmail.com',
      name: 'Marshall Erikkson',
      password: 'mdogg',
    },
  });
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
