import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieIdPage from './components/MovieIdPage/MovieIdPage';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Navbar />
				<div className='main'>
					<Switch>
						<Route exact path='/movies'>
							<MovieSearch />
						</Route>
						<Route exact path='/movies/:id'>
							<MovieIdPage />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Redirect to='/movies' />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
