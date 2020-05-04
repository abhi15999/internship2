import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './Orders';
import NotFound from './NotFound';
import Home from './Home';

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route exact path="/orders" component={ Orders } />
					<Route exact path="*" component={ NotFound } />
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default App;
