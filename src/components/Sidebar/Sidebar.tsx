import * as React from 'react';
import * as s from './Sidebar.module.css';
import { Category } from '../../const/Category';
import { observer, inject } from "mobx-react";
import { computed } from 'mobx';
import { Link } from 'react-router-dom'
import { RouterStore } from 'mobx-react-router';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';


interface ISidebarProps {
  routerStore?: RouterStore;
}

@inject('routerStore')
@observer
export class Sidebar extends React.Component<ISidebarProps> {

  getClassName = (key: string): string => {
    if (key === this.category) return `${s.item} ${s.active}`;
    return s.item;
  }

  @computed
  get category() {
    if (this.isTasksPage) {
      let m = this.props.routerStore!.location.pathname.match(/category\/(\w+)/);
      if (m && m[1]) {
        return m[1];
      }
      return 'general'
    }
    return '';
  }

  @computed
  get isTasksPage(): boolean {
    return (/category\//).test(this.props.routerStore!.location.pathname);
  }

  categoryPath = (key: string) => {
    if (key === 'general') return '/category/';
    return `/category/${key}`
  }

  items = () => (
    Array.from(Category.entries()).map(([key, value]) => (
      <div key={key}>
        <Link className={this.getClassName(key)} to={this.categoryPath(key)}>
          {value}
        </Link>
      </div>
    ))
  )

  render() {
    return (
      <Drawer
        variant="permanent"
        className={s.drawer}
        classes={{
          paper: s.drawerPaper
        }}
      >
        {/* <div className={s.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div> */}
        <Divider />
        <div className={s.list}>{this.items()}</div>
        <Divider />
        <List>{
          // secondaryListItems
        }</List>
      </Drawer>
    )
  }
}