import * as React from 'react';
import * as s from './Answer.module.css';
import {observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


export interface IAnswer {
  id: number;
  text: string; // текст ответа
  author: string; // автор ответа
  autorId: number;  // id автора ответа
  datetime: number; // время ответа
  rating: number; // лайки ответа
  comments: IAnswer[]; // комментарии к ответу
}

interface IAnswerProps {
  // routerStore?: RouterStore;
  data: IAnswer;
}

// @inject("routerStore")
@observer
export class Answer extends React.Component<IAnswerProps> {

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

  /**
   * Перенести время ответа в Header, рядом с именем
   */

  render() {
    return (
      <Card className={s.card}>
        <CardHeader subheader={`${this.props.data.author}`} />
        <CardContent className={s.cardContent}>
          <Typography variant="body2" color="textSecondary" component="div">
            <pre>{this.props.data.text}</pre>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <div className={s.left}>{this.datetime(this.props.data.datetime)}</div>
          <div className={s.right}>{this.props.data.rating}</div>
        </CardActions>          
      </Card>
    )
  }
}