import { NextResponse } from "next/server";

export function getAuthOptions() {
  return {
    publicRoutes: [
      "/",
      "/login",
      "/register",
      "/hackathons",
      "/hackathons/(.*)",
      "/api/webhooks(.*)",
      "/resources",
      "/leaderboard",
    ],
  };
}