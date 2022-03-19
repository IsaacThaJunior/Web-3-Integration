import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FundingPage from './Pages/FundingPage';
import LandingPage from './Pages/LandingPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<LandingPage />} />
				<Route path="/funding-page" exact element={<FundingPage />} />
			</Routes>
		</Router>
	);
};

export default App;
