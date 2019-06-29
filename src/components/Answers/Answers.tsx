import * as React from 'react';
import * as s from './Answers.module.css';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import { Task } from '../Task/Task';
import { GeneralTasks } from '../../const/TasksTestJson';
import { AnswersTestJson } from '../../const/AnswersTestJson';

export interface IAnswer {
  id: number;
  text: string; 
  author: string; 
  autorId: number; 
  datetime: number;
  rating: number;
  comments: IAnswer[];
}

interface IAnswersProps {
  // routerStore?: RouterStore;
  data: IAnswer[];
}

// @inject("routerStore")
@observer
export class Answers extends React.Component<IAnswersProps> {

  datetime = (date: number): string | null => {
    if (!date) return null;
    let newDate: Date;
    try {
      newDate = new Date(date * 1000);
    } catch (e) {
      return null;
    }
    return newDate.toLocaleString();
  }

  renderAnswer = (data: IAnswer[]) => {
    return data.map((item) => (
      <div className={s.block}>
        <div className={s.answer}>
          <div className={s.row}>
            {item.author}
          </div>
          <div className={s.row}>
            <pre>{item.text}</pre>
          </div>
          <div className={s.row}>
            <div className={s.left}>{this.datetime(item.datetime)}</div>
            <div className={s.right}>{item.rating}</div>
          </div>
        </div>
        {item.comments ? <div className={s.comment}>{this.renderAnswer(item.comments)}</div>: null}
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderAnswer(this.props.data)}
      </div>
    )
  }
}