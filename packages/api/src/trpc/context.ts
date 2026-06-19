import type { CreateUserInput, GetUserInput, User } from "../schemas/user.schema";

export interface UseCase<In, Out> {
  execute(input: In): Promise<Out>;
}

export interface AuthUser {
  id: number;
}

export interface UseCases {
  createUser: UseCase<CreateUserInput, User>;
  getUser: UseCase<GetUserInput, User | null>;
}

export interface AppContext {
  useCases: UseCases;
  user: AuthUser | null;
}
