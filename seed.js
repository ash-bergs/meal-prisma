const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User 1',
      password: 'password123',
    },
  });

  // Seed Recipes
  const recipe1 = await prisma.recipe.create({
    data: {
      name: 'Grilled Cheese',
      instructions: '1. Put cheese between bread. 2. Grill.',
      timeToCook: 15,
    },
  });

  const recipe2 = await prisma.recipe.create({
    data: {
      name: 'Butter Noodles',
      instructions: '1. Boil noodles. 2. Add butter.',
      timeToCook: 25,
    },
  });

  // Seed Ingredients
  const ingredient1 = await prisma.ingredient.create({
    data: {
      name: 'Butter',
    },
  });

  const ingredient2 = await prisma.ingredient.create({
    data: {
      name: 'Bread',
    },
  });

  const ingredient3 = await prisma.ingredient.create({
    data: {
      name: 'Cheese',
    },
  });
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
