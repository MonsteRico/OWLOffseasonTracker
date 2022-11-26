import { FieldSet } from "airtable/lib/field_set";
import { Records } from "airtable/lib/records";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const teamRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.player.findMany();
  }),
  getPlayers: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const base = ctx.base;
      const foundRecords: {
        id: string;
        role: string;
        previousTeam: string;
        team: string;
        name: string;
      }[] = [];
      await base("Current Off Season")
        .select({
          // Selecting records in 2022-23 Off Season Grid View v1:
          view: "2022-23 Off Season Grid View v1",
          fields: ["Player", "Status", "2023 Team", "2023 Role", "2022 Team"],
        })
        .eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            if (record.get("2023 Team") === input) {
              const player = {
                id: record.id,
                role: record.get("2023 Role") as string,
                previousTeam: record.get("2022 Team") as string,
                team: record.get("2023 Team") as string,
                name: record.get("Player") as string,
              };
              if (player.role.includes("- ")) {
                player.role = player.role.replace("- ", "");
              }
              if (player.previousTeam == "-None-") {
                player.previousTeam = "Outside";
              }
              foundRecords.push(player);
            }
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        });

      return foundRecords;
    }),
  getPreviousPlayers: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const base = ctx.base;
      const foundRecords: {
        id: string;
        role: string;
        previousTeam: string;
        team: string;
        name: string;
      }[] = [];
      await base("Current Off Season")
        .select({
          // Selecting records in 2022-23 Off Season Grid View v1:
          view: "2022-23 Off Season Grid View v1",
          fields: ["Player", "Status", "2023 Team", "2022 Role", "2022 Team"],
        })
        .eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            if (record.get("2022 Team") === input) {
              const player = {
                id: record.id,
                role: record.get("2022 Role") as string,
                previousTeam: record.get("2022 Team") as string,
                team: record.get("2023 Team") as string,
                name: record.get("Player") as string,
              };
              if (player.role.includes("- ")) {
                player.role = player.role.replace("- ", "");
              }
              if (
                player.team == undefined ||
                player.team == "" ||
                player.team == "N/A" ||
                player.team == "Unconfirmed"
              ) {
                player.team = record.get("Status") as string;
              }
              if (player.previousTeam != player.team) {
                foundRecords.push(player);
              }
            }
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        });
      return foundRecords;
    }),
});
