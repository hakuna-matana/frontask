import * as React from 'react';
import * as s from './Tasks.module.css';

export const sections = {
 html: "HTML",
 css: "CSS",
 javascript: "JavaScript",
 git: "GIT",
 webpack: "Webpack",
 algorithms: "Алгоритмы",
 other: "Другое",
 reactjs: "ReactJS",
 vuejs: "VueJS",
 angularjs: "AngularJS",
 typescript: "TypeScript",
};

export class Tasks extends React.Component {

    sidebar = () => (
        Object.entries(sections).map(([key, value]) => (
            <div key={key}>
                {value}
            </div>
        ))
    )

    render() {
        return (
            <div className={s.root}>
                <div className={s.sidebar}>
                    {this.sidebar()}
                </div>
            </div>
        )
    }
}