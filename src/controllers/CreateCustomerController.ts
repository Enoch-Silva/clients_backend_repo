import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustmerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };
    const custmerService = new CreateCustomerService();
    const customer = await custmerService.execute({ name, email });

    reply.send(customer);
  }
}

export { CreateCustmerController };
