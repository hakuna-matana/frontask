import * as React from "react";
import { observer, Provider } from "mobx-react";
import {createBrowserHistory} from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router as ReactRouter, Route, Switch, Redirect } from "react-router-dom";

import {Layout, LayoutProps} from '../components/Layout/Layout';
import { Tasks } from '../components/Tasks/Tasks';
import { Question } from "../components/Question/Question";
import { LoginPage } from "../components/LoginPage/LoginPage";
import {TaskService} from "../api/TaskService";
import {ServiceProvider} from "./ServiceProvider";

@observer
class Router extends React.Component {
  browserHistory = createBrowserHistory();
  routerStore = new RouterStore();
  history = syncHistoryWithStore(this.browserHistory, this.routerStore);

  render() {
    return (
      <Provider routerStore={this.routerStore} history={this.history}>
        <ReactRouter history={this.history}>
          <ServiceProvider>
            <Layout>
              <Switch location={this.routerStore.location}>
                <Redirect exact path="/" to="/category/" />
                <Route exact path="/category/:categoryType?" component={Tasks} />
                <Route exact path="/question/:questionsId" component={Question} />
                <Route exact path="/login" component={LoginPage} />
              </Switch>
            </Layout>
          </ServiceProvider>
        </ReactRouter>
      </Provider>
    )
  }
}

export default Router;