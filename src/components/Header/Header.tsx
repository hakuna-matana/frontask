import * as React from 'react';
import * as s from './Header.module.css';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {inject} from "mobx-react";
import {RouterStore} from "mobx-react-router";

export interface HeaderProps {
  routerStore?: RouterStore;
}

@inject('routerStore')
export class Header extends React.Component<HeaderProps> {

  render() {
    return (
      <AppBar className={s.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={s.title}>
            <Link className={s.logo} to="/">Frontask</Link>
          </Typography>
          <Button color="inherit">
            <Link to={"/login"} className={s.login}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}