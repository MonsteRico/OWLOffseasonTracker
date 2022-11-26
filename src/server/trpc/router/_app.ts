import { router } from "../trpc";
import { teamRouter } from "./teamRouter";

export const appRouter = router({
  team: teamRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
