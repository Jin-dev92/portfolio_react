import { UserModel } from "../../../model/user.model";

export interface IUserSliceState {
  userList: UserModel[];
  currentUser: UserModel | null;
}
