import { ITask } from "./Task";
import { observable, action } from "mobx";

export interface ITaskStoreProps {
  data: ITask;
}

export class TaskStore {
  props: ITaskStoreProps;
  @observable data: ITask = {};
  @observable userRating: number | undefined = this.data.rating;

  constructor(props: ITaskStoreProps) {
    this.props = props;
    this.data = this.props.data;
  }

  @action
  ratingDecrement = () => {
    if (this.data.selfRating === -1) return;
    if (typeof this.data.rating === "number") {
      this.data.rating = this.data.rating - 1;
      this.data.selfRating = this.data.selfRating === 1 ? 0 : -1;
    };
  }

  @action
  ratingIncrement = () => {
    if (this.data.selfRating === 1) return;
    if (typeof this.data.rating === "number") {
      this.data.rating = this.data.rating + 1;
      this.data.selfRating = this.data.selfRating === -1 ? 0 : 1;
    };
  }

}