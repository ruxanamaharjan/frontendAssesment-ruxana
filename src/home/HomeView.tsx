import React from "react";
import { Route, Switch } from "react-router-dom";
import Question1View from "../QuestionNumber1/Question1View";
import Question2View from "../QuestionNumber2/Question2View";
import { HomeViewWrapper } from "./home.style";
import Sidebar from "./Sidebar";

const HomeView = () => {
	return (
		<HomeViewWrapper>
			<div className="main-container">
				<Sidebar />
			</div>
			<div className="content-area">
				<Switch>
					<Route
						path="/QuestionNumber1"
						exact
						component={Question1View}
					></Route>
					<Route
						path="/QuestionNumber2"
						exact
						component={Question2View}
					></Route>
				</Switch>
			</div>
		</HomeViewWrapper>
	);
};

export default HomeView;
