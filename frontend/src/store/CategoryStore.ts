import {computed, flow, observable} from "mobx";
import {TaskService} from "../api/TaskService";
import {Category} from "../const/Category";

export interface CategoryStoreProps {
  taskService: TaskService
}

export class CategoryStore {
  props:CategoryStoreProps;
  constructor(props:CategoryStoreProps) {
    this.props = props;
  }
  @observable categories: Map<string, string> = new Map();

  @computed
  get categoryList() {
    return Array.from(this.categories);
  }

  load = flow(function* (this: CategoryStore) {
    let res = yield this.props.taskService.getCategories();
    if (res.data && res.data.length) {
      this.categories = new Map(res.data);
      console.log('res', res)
    } else {
      this.categories = Category;
    }

  }).bind(this)
}