// Add this line at the VERY TOP of your prisma.config.ts
import "dotenv/config";
// OR: import * as dotenv from 'dotenv'; dotenv.config();

import { defineConfig } from "prisma/config";

// Optional: Add debug logging to verify loading
console.log("Loading Prisma config...");
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL!, // The ! tells TypeScript it's defined
  },
});