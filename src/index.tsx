import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", "hi")
  .listen(3000);
