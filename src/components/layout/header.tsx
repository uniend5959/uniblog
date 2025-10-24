import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-white w-full mx-auto max-w-7xl py-4 px-12">
        <header className="flex justify-between items-center ">
          <div className="">
            <h1>
              <Link to={"/"} className="text-3xl font-bold">
                Logo
              </Link>
            </h1>
          </div>
          <div className="flex gap-2">
            <div className="">검색</div>
            <div> 다크모드</div>
            <Link to={"/profile"}>프로필</Link>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Header;
