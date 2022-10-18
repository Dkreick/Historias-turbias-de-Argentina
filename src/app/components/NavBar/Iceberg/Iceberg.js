import * as React from 'react'
import Box from '@mui/material/Box'
import IcebergImage from '../../../assets/images/background.jpeg'
import './Iceberg.scss'

export default function Iceberg() {
	return (
		<Box sx={{ flexGrow: 1 }} className="image">
			<img src={IcebergImage} alt={'Iceberg'} />
		</Box>
	)
}
