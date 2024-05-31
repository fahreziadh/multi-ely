import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    // console.log(Date.now());
    return "hi";
  })
  .listen(3000);
