import * as React from 'react';
import * as s from './Tasks.module.css';
import {TestData} from '../../const/TasksTestJson';
import { Task } from '../Task/Task';
import { computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import {TaskService} from "../../api/TaskService";
interface ITasksProps {
  routerStore?: RouterStore;
  taskService: TaskService;
}
@inject('routerStore', 'taskService')
@observer
export class Tasks extends React.Component<ITasksProps> {

  componentDidMount(): void {
    this.props.taskService.getCategories()
  }

  @computed
  get category() {
      let m = this.props.routerStore!.location.pathname.match(/category\/(\w+)/);
      if (m && m[1]) {
        return m[1];
      }
      return 'general'
  }

  taskList = () => {
    const data = TestData.get(this.category);
    if (this.category && data) {
      return data.map((task) => (
        <Task key={task.id} data={task} />
      ))
    }
    return null;
  }

  render() {
    return (
      <div className={s.root}>
        {this.taskList()}
      </div>
    )
  }
}