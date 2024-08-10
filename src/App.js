import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import { THEME } from './utils/fetchData'

import './App.css'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
	return (
		<ThemeProvider theme={THEME}>
			<Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/exercise/:id' element={<ExerciseDetail />}></Route>
				</Routes>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default App
