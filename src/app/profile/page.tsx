import { jwtDecode } from "jwt-decode";
type tokenType = { userId: string; username: string };
type UserType = {
  username: string;
  profileImage: string;
  posts: [{ caption: string; postImage: string }];
  followers: [];
  following: [];
};

const Page = () => {
  //   const token = localStorage.getItem("accessToken") ?? "";
  //   const decodedToken: tokenType = jwtDecode(token);
  return <div className="bg-black"></div>;
};
export default Page;
