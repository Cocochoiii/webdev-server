// The hello routes use the app that index.ts makes
import type { Express, Request, Response } from "express";
export default function Hello(app: Express) {
  const sayHello = (req: Request, res: Response) => {
    res.send("Life is good!");
  };
  const sayWelcome = (req: Request, res: Response) => {
    res.send("Welcome to Full Stack Development!");
  };
  app.get("/hello", sayHello);
  app.get("/", sayWelcome);
}
