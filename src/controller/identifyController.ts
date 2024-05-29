import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";

const IDENTIFY_SCHEMA = z.object({
  phoneNumber: z.number().max(32).describe("Phone Number of the user"),
  email: z
    .string()
    .email()
    .max(32)
    .optional()
    .describe("Email of the user account"),
});

export default async function identifyController(fastify: FastifyInstance) {
  // POST /identify
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/identify",
    schema: {
      body: IDENTIFY_SCHEMA,
      security: [],
      tags: ["identify"],
      description: "Identify a user",
    },
    handler: async (request, reply) => {
      const { phoneNumber, email } = request.body;
      try {
        console.log({ phoneNumber, email });
        // TODO: Implement the logic to identify the user
        return reply.code(201).send({ phoneNumber, email });
      } catch (e) {
        return reply.code(500).send(e);
      }
    },
  });
}
