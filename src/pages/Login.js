import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import red from '@material-ui/core/colors/red';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme)=>({
    container: {
        position : "absolute",
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        border: '1px solid gray'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default function Login(){

    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        const response = await fetch('http://localhost:5000/api/users');
        const body = await response.json();
        console.log(body);
    }

    return (
        <Container component="main" className={classes.container} maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} method="post">
                    <TextField error={errors.id ? "error" : ""} helperText={errors.id ? errors.id.message : ""} inputRef={register({required:"아이디를 입력해주세요.", pattern: {value:/^[a-z0-9_]+$/, message:"아이디는 영문, 숫자만 입력가능합니다."}, minLength:{value:4, message:"4자 이상의 아이디를 입력해주세요."}, maxLength:{value:20, message:"20자 이하의 아이디를 입력해주세요."}})} variant="outlined" margin="normal" fullWidth id="id" label="id" name="id" autoComplete="off" autoFocus />
                    <TextField type="password" error={errors.password ? "error" : ""} helperText={errors.password ? errors.password.message : ""}  inputRef={register({required:"비밀번호를 입력해주세요.", pattern: {value:/^[a-z0-9_]+$/, message: "비밀번호는 영문, 숫자만 입력가능합니다."}, minLength:{value:4, message:"4자 이상의 비밀번호를 입력해주세요."}, maxLength:{value:20, message:"20자 이하의 비밀번호를 입력해주세요."}})} variant="outlined" margin="normal" fullWidth id="password" label="password" name="password" autoComplete="off" autoFocus />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label = "Remember me"
                    />
                    <Button type="submit" aria-label="login" fullWidth variant="contained" color="primary">로그인</Button>
                    <NavLink to="/register">
                        <Button type="button" aria-label="register" fullWidth variant="contained" color="primary" style={{marginTop: '12px'}}>회원가입</Button>
                    </NavLink>
                </form>
                <Link href="">
                   <p>{"비밀번호를 잃어버리셨나요?"}</p>
                </Link>
            </div>
        </Container>
    );
}