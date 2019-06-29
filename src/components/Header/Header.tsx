import * as React from 'react';
import * as s from './Header.module.css';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Link to="/">
          Frontask
        </Link>
      </div>
    )
  }
}