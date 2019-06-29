import * as React from "react";
import {observer, Provider} from "mobx-react";
import createBrowserHistory from "history/createBrowserHistory";
import {RouterStore, syncHistoryWithStore} from "mobx-react-router";
import {Router as ReactRouter, Route, Switch, Redirect} from "react-router-dom";

import {Layout} from '../components/Layout/Layout';
import {Tasks} from '../components/Tasks/Tasks';

@observer
class Router extends React.Component {
    browserHistory = createBrowserHistory();
    routerStore = new RouterStore();
    history = syncHistoryWithStore(this.browserHistory, this.routerStore);
    render() {
        return (
            <Provider routerStore={this.routerStore} history={this.history}>
                <Layout>
                <Switch location={this.routerStore.location}>
                  <Route exact path="/" component={Tasks} />
                  </Switch>
                </Layout>
            </Provider>
        )}
}

export default Router