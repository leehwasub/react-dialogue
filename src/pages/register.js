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

const useStyles =  makeStyles((theme)=>({
    container: {
        marginTop : theme.spacing(4),
        border: '1px solid gray'
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default function Register() {

    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container component="main" className={classes.container} maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField variant="outlined" error={errors.id ? "error" : ""} helperText={errors.id ? errors.id.message : ""} margin="normal" inputRef={register({required:"아이디를 입력해주세요.", pattern: {value:/^[a-z0-9_]+$/, message:"아이디는 영문, 숫자만 입력가능합니다."}, minLength:{value:4, message:"4자 이상의 아이디를 입력해주세요."}, maxLength:{value:20, message:"20자 이하의 아이디를 입력해주세요."}})} fullWidth id="id" label="아이디" name="id" autoComplete="off" autoFocus />
                    <TextField type="password" variant="outlined" error={errors.password ? "error" : ""} helperText={errors.password ? errors.password.message : ""} margin="normal" inputRef={register({required:"비밀번호를 입력해주세요.", pattern: {value:/^[a-z0-9_]+$/, message: "비밀번호는 영문, 숫자만 입력가능합니다."}, minLength:{value:4, message:"4자 이상의 비밀번호를 입력해주세요."}, maxLength:{value:20, message:"20자 이하의 비밀번호를 입력해주세요."}})} fullWidth id="password" label="비밀번호" name="password" autoComplete="off"/>
                    <TextField type="password" variant="outlined" error={errors.passwordCheck ? "error" : ""} helperText={errors.passwordCheck ? errors.passwordCheck.message : ""} margin="normal" inputRef={register({required:"비밀번호 확인을 입력해주세요.", pattern: {value:/^[a-z0-9_]+$/, message:"비밀번호 확인은 영문, 숫자만 입력가능합니다."}, validate: (value) => value === watch('password') || "비밀번호와 일치하지 않습니다.", minLength:{value:4, message:"4자 이상의 비밀번호 확인을 입력해주세요."}, maxLength:{value:20, message:"20자 이하의 비밀번호 확인을 입력해주세요."}})} fullWidth id="passwordCheck" label="비밀번호 확인" name="passwordCheck" autoComplete="off"/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" error={errors.firstName ? "error" : ""} helperText={errors.firstName ? errors.firstName.message : ""} margin="normal" inputRef={register({required:"성을 입력해주세요.", pattern:{value:/^[가-힣a-zA-Z]+$/, message:"사용할 수 없는 성입니다."}, maxLength:{value:35, message:"35자 이하의 성을 입력해주세요."}})} fullWidth id="firstName" label="성" name="firstName" autoComplete="off"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" error={errors.lastName ? "error" : ""} helperText={errors.lastName ? errors.lastName.message : ""} margin="normal" inputRef={register({required:"이름을 입력해주세요.", pattern:{value:/^[가-힣a-zA-Z]+$/, message:"사용할 수 없는 이름입니다."}, maxLength:{value:35, message:"35자 이하의 이름를 입력해주세요."}})} fullWidth id="lastName" label="이름" name="lastName" autoComplete="off"/>
                        </Grid>
                    </Grid>
                    <TextField variant="outlined" error={errors.nickName ? "error" : ""} helperText={errors.nickName ? errors.nickName.message : ""} margin="normal" inputRef={register({required:"닉네임을 입력해주세요.", pattern: {value:/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/, message:"닉네임은 한글, 영문, 숫자만 입력 가능합니다."}, minLength:{value:2, message:"2자 이상의 닉네임을 입력해주세요."}, maxLength:{value:20, message:"20자 이하의 닉네임을 입력해주세요."}})} fullWidth id="nickName" label="닉네임" name="nickName" autoComplete="off"/>
                    <TextField variant="outlined" error={errors.email ? "error" : ""} helperText={errors.email ? errors.email.message : ""} margin="normal" inputRef={register({required:"이메일를 입력해주세요.", pattern: {value:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i, message:"올바른 이메일을 입력해주세요."}, maxLength:{value:320, message:"320자 이하의 이메일을 입력해주세요."}})} fullWidth id="email" label="이메일" name="email" autoComplete="off"/>
                    <Button type="submit" aria-label="login" fullWidth variant="contained" color="primary" style={{marginTop: '12px'}}>회원가입</Button>
                </form>
                <Link href="/login">
                    <p>{"이미 아이디를 가지고 있나요?"}</p>
                </Link>
            </div>
        </Container>
    );
    

}