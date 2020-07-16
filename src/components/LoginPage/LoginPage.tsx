import * as React from 'react';
import * as s from './LoginPage.module.css';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle, LockRounded, Security, SecurityRounded} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

export class LoginPage extends React.Component {
  render() {
    return(
      <div className={s.root}>
        <div className={s.authBlock}>
          <Box borderColor="grey.500" border={0} boxShadow={3} p={2} display="flex" flexDirection="column">
            <Typography variant="h5" className={`${s.title}`}>Авторизация</Typography>
            <FormControl className={s.margin}>
              <InputLabel htmlFor="login">Введите email или логин</InputLabel>
              <Input
                id="login"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={s.margin}>
              <InputLabel htmlFor="password">Введите пароль</InputLabel>
              <Input
                id="password"
                type={"password"}
                startAdornment={
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button type={"submit"} color="primary" variant="contained">Войти</Button>
            <div className={s.margin}>
              <a className={`${s.link}`}>Забыли пароль?</a>{" / "}
              <a className={`${s.link}`}>Регистрация</a>
            </div>
          </Box>
        </div>
      </div>
    )
  }
}