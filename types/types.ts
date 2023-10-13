export type RootStackParamList = {
  Bottom: undefined;
  FriendProfile: {
    name: string;
    accountName: string;
    profileImage: any;
    follow: boolean;
    post: number;
    followers: number;
    following: number;
  };
  EditProfile: {name: string; accountName: string; profileImage: any};
  Status: {name: string; image: any};
  login: {id: string; password: string};
  new: undefined;
};
