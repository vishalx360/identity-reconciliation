import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController";
import identifyController from "./controller/identifyController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexController);
  fastify.register(identifyController)
}
