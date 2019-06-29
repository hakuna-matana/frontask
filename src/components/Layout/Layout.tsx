import * as React from 'react';
import * as s from './Layout.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export class Layout extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Header />
        <div className={s.main}>
          <div className={s.content}>
            {this.props.children}
          </div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    )
  }
}