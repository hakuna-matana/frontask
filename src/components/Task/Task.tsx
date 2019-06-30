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
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Category } from '../../const/Category';
import Button from '@material-ui/core/Button';

export interface ITask {
  id: number,
  title?: string; // название вопроса
  description?: string; // содержание вопроса
  author?: string; // ник автора вопроса
  autorId?: number; // id автора вопроса
  countAnswers?: number; // количество ответов
  category?: string[]; // раздел/категория
  level?: string; // позиция/должность
  rating?: number; // целое число со знаком, лайки/дизлайки
  createDate?: number; // дата создания
  answeredAt?: number; // дата своего ответа
}

interface ITaskProps {
  data: ITask;
}
@observer
export class Task extends React.Component<ITaskProps> {

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

        {/* Всю группу подвинуть вправо, сделать уровень в стиле тега, в другом цвете(не как категория) */} 
        <span>{this.props.data.level}</span> 
        <IconButton aria-label="Add to favorites">
          {this.props.data.rating}
          <FavoriteIcon />
        </IconButton>

      </CardActions>
    </Card>
    )
  }
}