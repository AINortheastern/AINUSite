import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./controlledcarousel.scss"; // Import CSS file for styling

// Import all images
import hackathon1 from "../../assets/images/hackathon/hackathon_1.jpg";
import hackathon2 from "../../assets/images/hackathon/hackathon_2.jpg";
import hackathon3 from "../../assets/images/hackathon/hackathon_3.jpg";
import hackathon4 from "../../assets/images/hackathon/hackathon_4.jpg";
import hackathon5 from "../../assets/images/hackathon/hackathon_5.jpg";
import hackathon6 from "../../assets/images/hackathon/hackathon_6.jpg";
import hackathon7 from "../../assets/images/hackathon/hackathon_7.jpg";
import hackathon8 from "../../assets/images/hackathon/hackathon_8.jpg";
import hackathon9 from "../../assets/images/hackathon/hackathon_9.jpg";
import hackathon10 from "../../assets/images/hackathon/hackathon_10.jpg";
import hackathon11 from "../../assets/images/hackathon/hackathon_11.jpg";
import hackathon12 from "../../assets/images/hackathon/hackathon_12.jpg";
import hackathon13 from "../../assets/images/hackathon/hackathon_13.jpg";

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Array of image paths
  const images = [
    hackathon1,
    hackathon2,
    hackathon3,
    hackathon4,
    hackathon5,
    hackathon6,
    hackathon7,
    hackathon8,
    hackathon9,
    hackathon10,
    hackathon11,
    hackathon12,
    hackathon13,
  ];

  // Mapping through the images array to render images dynamically
  const renderImages = images.map((image, index) => (
    <div key={index} style={{ float: "left", width: "60vh", height: "50vh" }}>
      <img src={image} alt={`hackathon_${index + 1}`} />
    </div>
  ));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="gd-carousel-wrapper">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        className="gd-carousel"
      >
        {renderImages}
      </Carousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
