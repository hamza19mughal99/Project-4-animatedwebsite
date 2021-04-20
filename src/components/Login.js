import React , {useEffect} from 'react';
import "./mainsection.css";
import Aos from "aos";
import "aos/dist/aos.css";
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

function Login() {
    useEffect(() => {
        Aos.init({ duration:1000});
      },[]);
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
    return (
        <>

            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="login">
                <div> <h3> LOGIN </h3> </div>
                <div>
                    <form className={classes1.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Username" />
                    </form>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>


                </div>
                <div> <Button variant="contained" size="large" color="primary" className={classes2.margin}>
                    Log in
                       </Button>
                </div>
            </div>

        </>
    );
}

export default Login;