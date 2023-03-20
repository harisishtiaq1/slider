import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid} from "@mui/material";
import { Container } from "@mui/system";
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpeg"
import img3 from "../img/img3.jpeg"
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function MediaCard() {
  return (
    <Container>
    <Grid container spacing={3} sx={{mt:10}}>
        <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img2}
      />
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 300 }}
        image={img1}
      />
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img3}
      />
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img2}
      />
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 300 }}
        image={img1}
      />
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img3}
      />
    </Card>
    </Grid>
    </Grid>
    <IconButton
    sx={{
        mr: 2,
        mt: 0.5,
        borderRadius: "50%",
        boxShadow:
          "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
        position: "absolute",
        top: '40%',
        right: 20,
        backgroundColor:'lightblue'
      }}>
    <ArrowForwardIosIcon/> 
    </IconButton>
    <IconButton
    sx={{
        mr: 2,
        mt: 0.5,
        borderRadius: "50%",
        boxShadow:
          "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
        position: "absolute",
        top: '40%',
        left: 20,
        backgroundColor:'lightblue'
      }}>
    <ArrowBackIosIcon/> 
    </IconButton>
    </Container>
  );
}
