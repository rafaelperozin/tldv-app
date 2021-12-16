import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/Layouts/Header/Header';
import { Footer } from './components/Layouts/Footer/Footer';

import { HomePage } from './pages/Home/Home.page';
import { NotFoundPage } from './pages/NotFound/NotFound.page';
import { UniversitiesPage } from './pages/Universities/Universities.page';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/universities" element={<UniversitiesPage />} />
				<Route path="/404" element={<NotFoundPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
