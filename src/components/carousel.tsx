import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2673",
  "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548",
  "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  // slides.length - 1이란 마지막 사진,
  // 시작사진에서 이전버튼 누를 경우 마지막 사진으로 이동, 아니면 하니씩 줄이기
  // 마지막 선택이 마지막 사진인데, 다음을 누를 경우 처음으로 돌아가고 아니면 하나씩 늘리기
  // translateX(-)에서 -는 왼쪽을 의미

  // 이전버튼
  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  //이후버튼
  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  //해당 인덱스로 이동
  const handleGoImg = (index: number) => {
    setActiveSlide((prev) => (prev === index ? prev : index));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="relative w-full overflow-hidden max-h-[480px] md:h-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            // aspect로 pc버전일 떄 사진 비율을 유지하여 보여주기
            <div key={index} className="w-full flex-shrink-0 md:aspect-[21/9]">
              <img src={slide} alt="" className="object-cover w-full h-full " />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full bg-purple-100 transition-all cursor-pointer
              ${index === activeSlide ? "bg-purple-400" : "bg-purple-100"}`}
              onClick={() => handleGoImg(index)}
            ></div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 text-white/80 hover:text-white"
        onClick={handlePrev}
      >
        <ArrowBackIosIcon />
      </button>
      <button
        className="absolute right-4 text-white/80 hover:text-white"
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
export default Carousel;
