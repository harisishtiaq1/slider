import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/system";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContent, Typography } from "@mui/material";
const items = [
  {
    src: img1,
    alt: "img1",
    text: "This is my first Image",
  },
  {
    src: img2,
    alt: "img2",
    text: "This is my second Image",
  },
  {
    src: img3,
    alt: "img3",
    text: "This is my third Image",
  },
  {
    src: img1,
    alt: "img1",
    text: "This is my fourth Image",
  },
  {
    src: img2,
    alt: "img2",
    text: "This is my fifth Image",
  },
  {
    src: img3,
    alt: "img3",
    text: "This is my sixth Image",
  },
];
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function ImageSlide() {
  const slide = React.useRef(null);
  return (
    <Container sx={{ mt: 10 }}>
      <Slider ref={slide} {...settings}>
        {items.map((items) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "black",
                height: 400,
                boxShadow:
                  "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
              }}
            >
              <CardMedia
                sx={{ height: 300, backgroundColor: "black" }}
                image={items.src}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                  {items.text}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Slider>
      <IconButton
        sx={{
          mr: 2,
          mt: 0.5,
          borderRadius: "50%",
          boxShadow:
            "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
          position: "absolute",
          top: "40%",
          right: 20,
          backgroundColor: "lightblue",
        }}
        onClick={() => slide?.current?.slickNext()}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <IconButton
        sx={{
          mr: 2,
          mt: 0.5,
          borderRadius: "50%",
          boxShadow:
            "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
          position: "absolute",
          top: "40%",
          left: 20,
          backgroundColor: "lightblue",
        }}
        onClick={() => slide?.current?.slickPrev()}
      >
        <ArrowBackIosIcon />
      </IconButton>
    </Container>
  );
}
export default ImageSlide;
