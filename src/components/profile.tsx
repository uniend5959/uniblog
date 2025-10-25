import { Link } from "react-router-dom";
import PostList from "./postList";

const Profile = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-12 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4 items-center">
            <div className=" bg-gray-300 w-16 h-16 rounded-full">
              <img src="" alt="" />
            </div>
            <div className="">
              <div className="font-bold">abctest@test.com</div>
              <div className="text-gray-400">유저네임</div>
            </div>
          </div>
          <Link to={"/"} className="text-gray-400">
            로그아웃
          </Link>
        </div>
        <PostList hasNavigation={false} />
      </div>
    </>
  );
};
export default Profile;
