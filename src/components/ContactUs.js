import React , {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import bg2 from "../assests/images/bg2.jpg";
import "./mainsection.css";
import { Container } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: 400,
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center"
    },

});


function ContactUs() {
    useEffect(() => {
        Aos.init({ duration:2000});
      },[]);

    const classes = useStyles();
    return (
        <>
            <div className="contactus" style={{
                backgroundImage: `url(${bg2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                width: "100%",
                height: "500px",
                marginTop: "0%"
            }}>
                <h1 data-aos="fade-right">Contact Us</h1>
            </div>

            <div className="contactquery">
                <h1 data-aos="fade-right">IF YOU HAVE ANY QUERIES CONTACT US ON THESE</h1>
            </div>
            <div data-aos="zoom-in-up" className="query">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Number </Typography>
                        <Typography variant="h5" component="h5" color="textSecondary">
                            +923492496204 </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Email </Typography>
                        <Typography variant="h5" component="h5" color="textSecondary">
                            hamza19mughal99@gmail.com </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Social Media </Typography>
                        <Typography variant="h5" component="h5" color="textSecondary">
                            +923492496204 </Typography>
                    </CardContent>
                </Card>
            </div>

            <div data-aos="fade-right" className="contactquery">
                <h1 style={{textAlign:"center"}}>OR MESSAGE US</h1>
            </div>
            <Container>
                <div data-aos="zoom-out-left" style={{marginBottom:"30px"}} className="row">
                    <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-1">

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your name" autocomplete="off" required
                                id="username" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter your emailaddress " id="email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your phone Number" id="number" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="4" placeholder="Enter your reviews or any query" required
                                id="comment"></textarea>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className=" btn btn-primary" onclick="submit()">Submit</button>
                        </div>

                    </div>
                </div>
            </Container>
    
        
        </>
    );
}

export default ContactUs;