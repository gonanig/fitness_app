import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'
import { borderBottom } from '@mui/system'

const Navbar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-around
		'
			sx={{
				gap: {
					sm: '122px',
					xs: '40px',
				},
				mt: { sm: '32px', xs: '20px' },
				justifyContent: 'none',
			}}
			px='20px'
		>
			<Stack
				direction='row'
				gap='40px'
				fontSize='24px'
				alignItems='flex-end'
				pl='50px'
			>
				<Link
					style={{
						textDecoration: 'none',
						color: '#3A1212',
						borderBottom: ' 3px solid #FF2625',
					}}
					to='./'
				>
					Home
				</Link>
				<a
					href='#exercises'
					style={{ textDecoration: 'none', color: '#3A1212' }}
				>
					Exercises
				</a>
			</Stack>
		</Stack>
	)
}
export default Navbar
