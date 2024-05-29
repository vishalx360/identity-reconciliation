import Fastify from "fastify";
import router from "./router";

import swagger from "./plugins/swagger";
import validator from "./plugins/validator";

const fastify = Fastify({ logger: true });

// plugins
fastify.register(swagger);
fastify.register(validator);

fastify.register(router);

export default fastify;
