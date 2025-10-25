import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

const PostList = ({ hasNavigation = true }: PostListProps) => {
  const [activeType, setActiveType] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="flex justify-between items-center mb-9">
          <div className="">
            <div className="text-2xl font-bold mb-2">최신 글</div>
            <span className="text-sm text-gray-400">6개의 글이 있습니다.</span>
          </div>
          <div className="flex gap-4">
            <div
              className={`cursor-pointer ${
                activeType === "all" ? "text-gray-700" : "text-gray-200"
              }`}
              onClick={() => setActiveType("all")}
            >
              전체
            </div>
            <div
              className={`cursor-pointer ${
                activeType === "my" ? "text-gray-700" : "text-gray-200"
              }`}
              onClick={() => setActiveType("my")}
            >
              마이글
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-8">
        {[...Array(10)].map((i, index) => (
          <div key={index}>
            <Link to={`/posts/${index}`}>
              <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row  w-full gap-4">
                <div className="w-full h-64 md:w-1/3 bg-gray-300  md:aspect-[16/9] overflow-hidden">
                  <img src="" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 px-4 py-4">
                  <div className="space-y-4">
                    <span className="bg-purple-300 rounded-full py-1 px-4 text-purple-600 font-bold leading-none">
                      css
                    </span>
                    <p className="text-2xl font-bold line-clamp-1">
                      CSS Grid vs FlexBox : 언제 무엇을 사용할까?
                    </p>
                    <p className="text-base text-gray-400 line-clamp-2">
                      CSS Grid 와 Flex box의 차이를 알아봅시다. Lorem Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries
                    </p>
                  </div>
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
                      <button className="text-gray-400 text-sm">수정</button>
                      <button className="text-gray-400 text-sm">삭제</button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
