import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ResponsiveCarousel({ data }) {
  return (
    <Carousel
      autoPlay="true"
      showArrows="true"
      showIndicators="true"
      infiniteLoop="true"
      dynamicHeight="true"
    >
      {data.map((item, index) => (
        <div key={index} className="w-full h-full">
          <img
            src={item.imgUrl}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </Carousel>
  );
}
