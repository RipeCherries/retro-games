import { prisma } from './prisma-client';
import { categories, games } from '../constants';

const up = async () => {
  for (const category of categories) {
    await prisma.category.create({
      data: category
    });
  }

  for (const game of games) {
    await prisma.game.create({
      data: game
    });
  }
};

const down = async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Game" RESTART IDENTITY CASCADE`;
};

const main = async () => {
  await down();
  await up();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
