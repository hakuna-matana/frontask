import * as React from 'react';
import * as s from './Tasks.module.css';
import { GeneralTasks } from '../../const/TasksTypes';
import { Task } from '../Task/Task';
export class Tasks extends React.Component {

  taskList = () => (
    GeneralTasks.map((task) => (
      <Task key={task.id} data={task} />
    ))
  )

  render() {
    return (
      <div className={s.root}>
        Список вопросов:
        {this.taskList()}
      </div>
    )
  }
}