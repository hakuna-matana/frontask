import * as React from 'react';
import * as s from './Task.module.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Category } from '../../const/Category';
import Button from '@material-ui/core/Button';
import { TaskStore } from './TaskStore';

export interface ITask {
  id?: number,
  title?: string; // название вопроса
  description?: string; // содержание вопроса
  author?: string; // ник автора вопроса
  autorId?: number; // id автора вопроса
  countAnswers?: number; // количество ответов
  category?: string[]; // раздел/категория
  level?: string; // позиция/должность
  rating?: number; // целое число со знаком, лайки/дизлайки
  selfRating?: number; // собственная оценка для данного вопроса (если она есть)
  createDate?: number; // дата создания
  answeredAt?: number; // дата своего ответа
}

interface ITaskProps {
  data: ITask;
}
@observer
export class Task extends React.Component<ITaskProps> {
  store = new TaskStore({
    data: this.props.data
  })

  formatToDate = (date?: number): string | null => {
    if (!date) return null;
    let newDate: Date;
    try {
      newDate = new Date(date * 1000);
    } catch (e) {
      return null;
    }
    return newDate.toLocaleDateString();
  }

  tags = () => {
    if (!this.props.data.category) return null;
    return this.props.data.category.map((item: string) => (
      <div key={item}>
        <Link className={s.tag} to={`/category/${item}/`}>
          {Category.get(item)}
        </Link>
      </div>
    ))
  }

  rating = () => {
    let rating = this.store.data.selfRating;
    return (
      <>
        <IconButton onClick={this.store.ratingDecrement}>
          <ThumbDown className={`${s.iconUp} ${rating && rating < 0 ? s.colorRed : ""}`}/>
        </IconButton>
        <span className={s.ratingCount}>
          {this.store.data.rating}
        </span>
        <IconButton onClick={this.store.ratingIncrement}>
          <ThumbUp className={`${s.iconDown} ${rating && rating > 0 ? s.colorGreen : ""}`}/>
        </IconButton>
      </>
    )
  }

  answredAction = () => (
    this.props.data.answeredAt ? (
      <Link className={s.link} to={`/question/${this.props.data.id}`}>Вы отвечали</Link>
    ) : null
  )

  render() {
    return (
      <Card className={s.card}>
      <CardHeader
        title={<div className={s.title}>
          {this.props.data.title}
          <span className={s.small}>{this.answredAction()}</span>
          </div>}
        subheader={`${this.props.data.author}, ${this.formatToDate(this.props.data.createDate)}`}
      />
      <CardContent className={s.cardContent}>
        <Typography variant="body2" color="textSecondary" component="div">
          <pre className={s.pre}>{this.props.data.description}</pre>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link className={s.link} to={`/question/${this.props.data.id}`}>
          <Button size="small" color="primary">
            Ответы: {this.props.data.countAnswers}
          </Button>
        </Link>
        {this.tags()}

        <div className={s.rightGroup}>
          <span className={`${s.tag} ${s.tagBlue}`}>{this.props.data.level}</span> 
          {this.rating()}
        </div>
      </CardActions>
    </Card>
    )
  }
}