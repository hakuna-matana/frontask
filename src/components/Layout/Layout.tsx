import * as React from 'react';

export class Layout extends React.Component {
    render() {
        return(
            <div className="root">
                <header>шапка</header>
                <main>{this.props.children}</main>
                <footer>подвал</footer>
            </div>
        )
    }
}