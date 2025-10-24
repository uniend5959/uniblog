const PostForm = () => {
  return (
    <form
      action={"/post"}
      method="POST"
      className="w-full mx-auto max-w-7xl px-12 py-12 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 ">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          className="border border-gray-500 rounded-lg py-2 px-4 "
          placeholder="게시글 제목을 입력하세요"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          name="summary"
          className="border border-gray-500 rounded-lg py-2 px-4"
          placeholder="게시글 설명을 입력하세요"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          className="border border-gray-500 rounded-lg py-2 px-4 min-h-[400px] leading-6"
          placeholder="내용을 입력하세요"
        ></textarea>
      </div>
      <div className="">
        <input
          type="submit"
          value="제출"
          className="w-full h-12 bg-purple-400 text-white rounded-lg mx-auto cursor-pointer hover:bg-purple-500 transition-colors duration-300 ease-in-out font-bold "
        />
      </div>
    </form>
  );
};

export default PostForm;
