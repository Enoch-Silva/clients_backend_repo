import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Solicitaçºao Inválida");
    }

    const findCustomer = await prismaClient.custumer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não encontrado!");
    }

    await prismaClient.custumer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Cliente deletado com sucesso!" };
  }
}

export { DeleteCustomerService };
