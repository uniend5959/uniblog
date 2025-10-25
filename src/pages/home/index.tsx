import Carousel from "components/carousel";
import Category from "components/category";
import PostList from "components/postList";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="py-12 mx-auto max-w-7xl px-12 cursor-pointer ">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="w-full md:basis-1/3 mt-4">
            <Category />
          </div>
          <div className="mt-4">
            <PostList />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
