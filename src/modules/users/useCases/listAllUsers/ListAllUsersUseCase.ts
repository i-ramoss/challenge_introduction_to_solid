import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id.toString());

    if (!user) throw new Error("User not found!");

    if (!user.admin === true)
      throw new Error("You don't have permission to do that!");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
