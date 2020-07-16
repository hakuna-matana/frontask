import * as React from 'react';
import * as s from './Layout.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import {RouterStore} from "mobx-react-router";
import {inject, observer} from "mobx-react";
import {computed} from "mobx";
import classNames from 'classnames';

export interface LayoutProps {
  routerStore?: RouterStore;
}

@inject('routerStore')
@observer
export class Layout extends React.Component<LayoutProps> {

  @computed
  get showSidebar() {
    return !/^\/login/.test(this.props.routerStore!.location.pathname)
  }

  render() {
    let contentClassNames = classNames(s.content, {[s.fullWidthContent]: !this.showSidebar})
    return (
      <div className={s.root}>
        <Header />
        {this.showSidebar && <Sidebar/>}
        <div className={contentClassNames}>
          {this.props.children}
        </div>
      </div>
    )
  }
}