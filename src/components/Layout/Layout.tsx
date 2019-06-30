import * as React from 'react';
import * as s from './Layout.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

export class Layout extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Header />
        <Sidebar />
        <div className={s.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}