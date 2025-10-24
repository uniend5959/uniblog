import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <div className="mx-auto px-12 max-w-7xl py-12">
      <span className="bg-purple-300 rounded-full py-1 px-4 text-purple-600 font-bold leading-none">
        css
      </span>
      <div className="mt-4">
        <p className="text-3xl font-bold ">
          CSS Grid vs FlexBox : 언제 무엇을 사용할까?
        </p>
        <div className="flex justify-between items-center py-4 ">
          <div className="flex gap-2 justify-start items-center">
            <div className=" bg-gray-300 w-8 h-8 rounded-full">
              <img src="" alt="" />
            </div>
            <div className="">
              <div className="text-gray-400 text-sm">이름</div>
              <div className="text-gray-400 text-xs">날짜</div>
            </div>
          </div>
          <div className="flex  gap-4 mr-2">
            <button className="text-gray-400 text-sm">
              <Link to={`/posts/edit/:1}`} className="hover:text-purple-500">
                수정
              </Link>
            </button>
            <button className="text-gray-400 text-sm hover:text-purple-500">
              삭제
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-full h-64 md:w-1/3 bg-gray-300  md:aspect-[16/9] overflow-hidden">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-2/3  py-4">
            <p className="text-base text-gray-400 ">
              CSS Grid 와 Flex box의 차이를 알아봅시다. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuriesCSS
              Grid 와 Flex box의 차이를 알아봅시다. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuriesCSS
              Grid 와 Flex box의 차이를 알아봅시다. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
