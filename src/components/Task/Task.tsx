import * as React from 'react';
import * as s from './Task.module.css';
import { computed } from 'mobx';

export interface ITask {
  id: number,
  title?: string; // название вопроса
  description?: string; // содержание вопроса
  author?: string; // ник автора вопроса
  autorId?: number; // id автора вопроса
  countAnswers?: number; // количество ответов
  category?: string; // раздел/категория
  level?: string; // позиция/должность
  rating?: number; // целое число со знаком, лайки/дизлайки
  answeredAt?: number; // дата своего ответа
}

interface ITaskProps {
  data: ITask;
}

export class Task extends React.Component<ITaskProps> {

  @computed
  get answerData(): string | null {
    if (!this.props.data.answeredAt) return null;
    let date: Date;
    try {
      date = new Date(this.props.data.answeredAt * 1000);
    } catch (e) {
      return null;
    }
    return date.toLocaleDateString();
  }

  answredAction = () => (
    this.props.data.answeredAt ? (
      <>
        <a href="#">Вы отвечали на этот вопрос</a>
        <a href="#">{this.answerData}</a>
      </>
    ) : (
      <a href="#">Ответить на вопрос</a>
    )
  )

  render() {
    return (
      <div className={s.root}>
        <div className={s.row}>
          <div className={s.left}>
            <h3>{this.props.data.title}</h3>
          </div>
          <div className={s.right}>
            <a href="#">Автор: {this.props.data.author}</a>
          </div>
        </div>
        <div className={s.row}>
          <p>{this.props.data.description}</p>
        </div>
        <div className={s.row}>
          <div className={s.left}>
            {this.answredAction()}
          </div>
          <div className={s.right}>
            <span>{this.props.data.level}</span>
            <a href="#">Ответы: {this.props.data.countAnswers}</a>
            <span>Лайков: {this.props.data.rating}</span>
          </div>
        </div>
      </div>
    )
  }
}