import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PageNotFound from "./PageNotFound";
import HomePage2 from './home/HomePage2';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CoursesPage from './courses/CoursesPage';

function App() {
    return (

        <div className={"container-fluid"}>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={HomePage2}/>
                <Route path={"/about"} component={AboutPage}/>
                <Route path={"/courses"} component={CoursesPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    )
}

export default App;
