import { UserModel } from "../../../type/model/user.model";

export interface IUserSliceState {
  userList: UserModel[];
  currentUser: UserModel | null;
}
