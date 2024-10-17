import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Global } from "@emotion/react";

type Slide = {
  image: string;
  title: string;
};

interface Props {
  slides: Slide[];
}

const Banner = ({ slides }: Props) => {
  return (
    <header>
      <Global
        styles={`
          .swiper-button-next, .swiper-button-prev {
            color: #24e4e5; /* blue.900 */
          }
        `}
      />

      <HStack bgColor={"blue.800"}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          autoplay={{ delay: 5000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.image} style={{ position: "relative" }}>
              <Image
                src={slide.image}
                alt={slide.title}
                height={"800px"}
                width={"100%"}
                objectFit={"cover"}
              />
              <Flex
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                bgColor={"rgba(0, 27, 28, 0.7)"}
                color="white"
                p={5}
                justifyContent="center"
              >
                <Heading as="h1" size="xl">
                  Professionelle Reifenservice – Schnell, Zuverlässig und
                  Preiswert
                </Heading>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </header>
  );
};

export default Banner;
