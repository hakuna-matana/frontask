import * as React from 'react';
import * as s from './Layout.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import {RouterStore} from "mobx-react-router";
import {inject, observer, Provider} from "mobx-react";
import {computed} from "mobx";
import classNames from 'classnames';
import {CategoryStore} from "../../store/CategoryStore";
import {TaskService} from "../../api/TaskService";

export interface LayoutProps {
  routerStore?: RouterStore;
  taskService?: TaskService;
}

@inject('routerStore', 'taskService')
@observer
export class Layout extends React.Component<LayoutProps> {
  categoryStore = new CategoryStore({
    taskService: this.props.taskService!
  })

  componentDidMount(): void {
    this.categoryStore.load();
  }

  @computed
  get showSidebar() {
    return !/^\/login/.test(this.props.routerStore!.location.pathname)
  }

  render() {
    let contentClassNames = classNames(s.content, {[s.fullWidthContent]: !this.showSidebar})
    return (
      <Provider categoryStore={this.categoryStore}>
      <div className={s.root}>
        <Header />
        {this.showSidebar && <Sidebar/>}
        <div className={contentClassNames}>
          {this.props.children}
        </div>
      </div>
      </Provider>
    )
  }
}