import React, { useEffect } from 'react';
import "../App.css"
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import istanbul from "../assests/images/istanbul.jpg";
import ankara from "../assests/images/ankara.jpg";
import istanbul1 from "../assests/images/istanbul-1.jpg";
import turkey from "../assests/images/turkey.jpg";
import yur from "../assests/images/yur.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: "20px"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },

}));

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 12px 1em;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-left: 7px;
  }
`;



function Features() {
    useEffect(() => {
        Aos.init({ duration:1000});
      },[]);

    const classes = useStyles();
    const theme = useTheme();


    const Cities = {
        "Istanbul": {
            name: "Istanbul",
            img: istanbul,
            details: " 5D 4N ",
            price: "Starting from Rs. 250,000"
        },
        "Ankara": {
            name: "Ankara",
            img: ankara,
            details: " 6D 5N ",
            price: "Starting from Rs. 200,000"
        },
        "Konya": {
            name: "Konya",
            img: istanbul1,
            details: " 4D 3N ",
            price: "Starting from Rs. 150,000"
        },
        "Izmir": {
            name: "Izmir",
            img: turkey,
            details: " 5D 4N ",
            price: "Starting from Rs. 170,000"
        },
        "Mersin": {
            name: "Mersin",
            img: yur,
            details: " 4D 3N ",
            price: "Starting from Rs. 100,000"
        },
    }


    return (
        <>
            <div data-aos="zoom-in-left" className="features">
                <h1>FEATURES PACKAGES</h1>
                <p>We offer the best tour packages that fit all your needs</p>
            </div>
            <div data-aos="fade-down"data-aos-easing="linear" className="featuresDisplay">
                {Object.entries(Cities).map(([productID, { name, img, details, price }]) => (
                    <Card elevation={3} key={productID} className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h4" variant="h4">
                                        {name}
                                    </Typography>
                                    <Typography component="h5" variant="h5" color="textSecondary">
                                        {details}
                                    </Typography>
                                    <Typography component="p" variant="p" color="textSecondary">
                                        {price}
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <RegisterButton> <Link style={{textDecoration:"none" , color:"#fff"}} key={productID} to={`/product/${productID}`}>   Book Now ! </Link></RegisterButton>

                                </div>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={img}
                                title={name}
                            />
                    </Card>

                ))}
            </div>
        </>);
}

export default Features;