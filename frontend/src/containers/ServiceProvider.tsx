import * as React from "react";
import { observer, Provider } from "mobx-react";
import {TaskService} from "../api/TaskService";
import {UserService} from "../api/UserService";

export interface ServiceProviderProps {
  children: any;
}

@observer
export class ServiceProvider extends React.Component<ServiceProviderProps> {
  userService: UserService = new UserService({ajax: null});
  taskService:TaskService = new TaskService({ajax: null});
  render() {
    return (
      <Provider
        taskService={this.taskService}
        userService={this.userService}
      >
        {this.props.children}
      </Provider>
    )
  }
}