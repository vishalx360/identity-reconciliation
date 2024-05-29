import "dotenv/config";
const { createEnv } = require("@t3-oss/env-core");
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.string().min(1).optional(),
    HOST_URL: z.string().url(),
  },
  runtimeEnv: process.env,
});
