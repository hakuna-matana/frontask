import * as React from 'react';
import * as s from './Question.module.css';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import { Task } from '../Task/Task';
import { GeneralTasks } from '../../const/TasksTestJson';
import { AnswersTestJson } from '../../const/AnswersTestJson';
import { Answers } from '../Answers/Answers';

interface IQuestionProps {
  routerStore?: RouterStore;
}

@inject("routerStore")
@observer
export class Question extends React.Component<IQuestionProps> {

  @computed
  get questionId() {
    let m = this.props.routerStore!.location.pathname.match(/question\/(\w+)/);
    if (!m || !m[1]) return null;
    return Number(m[1]);
  }

  @computed
  get questionData() {
    return GeneralTasks.find(({id}) => (
      this.questionId === id
    ))
  }

  answersRender = () => {
    if (!this.questionId) return null;
    let data = AnswersTestJson.get(this.questionId);
    if (!data) return null;
    return <Answers data={data}/>
  }

  render() {
    return(
      <div className={s.root}>
        {this.questionData ? <Task data={this.questionData}/> : null}
        {this.answersRender()}
      </div>
   )
 }
}