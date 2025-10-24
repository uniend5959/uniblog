import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-2 px-4 rounded-lg border border-purple-400 bg-white cursor-pointer">
      <Link to={"/posts/new"} className="text-purple-600 block text-center">
        글쓰기
      </Link>
    </div>
  );
};

export default Category;
