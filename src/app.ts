import Fastify from "fastify";
import router from "./router";

import swagger from "./plugins/swagger";
import validator from "./plugins/validator";
import prisma from "./plugins/prisma";

const fastify = Fastify({ logger: true });

// plugins
fastify.register(swagger);
fastify.register(validator);
fastify.register(prisma)
fastify.register(router);

export default fastify;
