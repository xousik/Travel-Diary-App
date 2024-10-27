import { DiaryDetailsModalContext } from "@/src/context/diaryDetailsModalContext";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import {
  ModalOverlay,
  Modal,
  StyledButton,
  Wrapper,
  StyledImage,
} from "./diaryDetailsModal.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import closeSvg from "@/public/close.svg";
import Image from "next/image";

export type DiaryDetailsModalContextProps = {
  setActiveTravelCardInfo?: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
      images: string[];
    }>
  >;
  activeTravelCardInfo?: {
    title: string;
    description: string;
    images: string[];
  };
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  isModalOpen?: boolean;
};

export default function DiaryDetailsModal() {
  const {
    activeTravelCardInfo,
    setIsModalOpen,
    isModalOpen,
  }: DiaryDetailsModalContextProps = useContext(DiaryDetailsModalContext);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        e.preventDefault();

        setIsModalOpen!((prev) => !prev);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };

    // Line below removes warning about missing dependency: 'setIsModalOpen'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <ModalOverlay onClick={() => setIsModalOpen!((prev: boolean) => !prev)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <StyledButton onClick={() => setIsModalOpen!((prev) => !prev)}>
          <Image src={closeSvg} alt="close icon" width={45} height={45} />
        </StyledButton>
        <h3>{activeTravelCardInfo!.title}</h3>
        <p>{activeTravelCardInfo!.description}</p>
        <Wrapper>
          <Swiper
            slideToClickedSlide={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: -10,
              depth: 120,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            {activeTravelCardInfo!.images.map((image, i) => (
              <SwiperSlide key={i}>
                <StyledImage
                  key={i}
                  loading="eager"
                  src={image}
                  alt="Image"
                  width={300}
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </Modal>
    </ModalOverlay>
  );
}
