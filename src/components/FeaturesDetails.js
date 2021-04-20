import 'date-fns';
import React from 'react';
import "./mainsection.css";
import { useParams } from "react-router-dom";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import istanbul from "../assests/images/istanbul.jpg";
import ankara from "../assests/images/ankara.jpg";
import istanbul1 from "../assests/images/istanbul-1.jpg";
import turkey from "../assests/images/turkey.jpg";
import yur from "../assests/images/yur.jpg";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const useStyles1 = makeStyles((theme) => ({
  root: {
      '& > *': {
          margin: theme.spacing(1),
          width: '35ch',
      },
  },
}));

const useStyles2 = makeStyles((theme) => ({
  margin: {
      margin: theme.spacing(1),
      width: '35ch'
  },
  extendedIcon: {
      marginRight: theme.spacing(1),
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  margin: {
      margin: theme.spacing(1),
  },
  withoutLabel: {
      marginTop: theme.spacing(3),
  },
  textField: {
      width: '35ch',
  },
}));





function FeaturesDetails() {

  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes = useStyles();
  const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
  });

  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };


  let { id } = useParams();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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

  const City = Cities[id];

  return (
    <>

      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="START DATE"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="END DATE"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            /> </Grid>
        </MuiPickersUtilsProvider>
      </div>

      <div className="mainFeaturesDetails">
        <div className="mainFeaturesDetails1">
          <img src={City.img} alt={City.name} />

        </div>
      </div>

      <div className="details">
        <h1>{City.name}</h1>
        <h1>{City.details}</h1>
      </div>



      <div>
      <div className="login">
                <div> <h3> PAYMENT DETAILS </h3> </div>
                <div>
                    <form className={classes1.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="FirstName" />
                    </form>
                    <form className={classes1.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="LastName" />
                    </form>
                    <form className={classes1.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="PhoneNumber" />
                    </form>
                    <form className={classes1.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="CNIC" />
                    </form>
                    <form className={classes1.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="DebitCardNumber" />
                    </form>


                </div>
                <div> <Button variant="contained" size="large" color="primary" className={classes2.margin}>
                    Submit
                       </Button>
                </div>
            </div>
      </div>
    </>);
}

export default FeaturesDetails;