import prismaClient from "../prisma";

class ListCustomersService {
  async execute() {
    const customers = await prismaClient.custumer.findMany();

    return customers;
  }
}

export { ListCustomersService };
