  
import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './components/Main/index';
import Finish from './components/Finish/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/finish" component={Finish} />
        </Switch>
    </BrowserRouter>
)

export default Routes;