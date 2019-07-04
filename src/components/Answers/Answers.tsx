import * as React from 'react';
import * as s from './Answers.module.css';
import {observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { IAnswer, Answer } from '../Answer/Answer';

interface IAnswersProps {
  // routerStore?: RouterStore;
  data: IAnswer[];
}

// @inject("routerStore")
@observer
export class Answers extends React.Component<IAnswersProps> {

  /**
   * Обернуть ответы и ветку комментариев в "аккордеон", чтобы можно 
   * было свернуть/развернуть всю ветку
   */

  renderAnswer = (data: IAnswer[]) => {
    return data.map((item) => (
      <div className={s.block} key={item.id}>
        <Answer data={item} />
        {item.comments ? (
        <div className={s.comments}>
          {this.renderAnswer(item.comments)}
        </div>
        ): null}
      </div>
    ))
  }

  render() {
    return (
      <div className={s.root}>
        {this.renderAnswer(this.props.data)}
      </div>
    )
  }
}