import * as React from 'react'
import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar/NavBar'
import Iceberg from '../../components/NavBar/Iceberg/Iceberg'

export default function Layout() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar />
			<Iceberg />
		</Box>
	)
}
