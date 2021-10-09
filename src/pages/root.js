import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PagesIndex from './index'
import PagesCalc from './calc'
import './root.scss'

export default function PagesRoot() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/calc">Calc</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/calc">
					<PagesCalc />
				</Route>
				<Route path="/">
					<PagesIndex />
				</Route>
			</Switch>
		</Router>
	);
}