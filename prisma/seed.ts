import { prisma } from './prisma-client';
import { categories } from '../constants';

const up = async () => {
  for (const category of categories) {
    await prisma.category.create({
      data: category
    });
  }
};

const down = async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
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