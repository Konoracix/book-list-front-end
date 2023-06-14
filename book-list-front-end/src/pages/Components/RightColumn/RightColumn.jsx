import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import './RightColumn.css'
import logo from "../../../logo.png";
import profile4 from "../../../profile4.png";


function RightColumn(props) {
	const navigate = useNavigate();
	
	return (
		
		<div className='rightColumnBody'>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
			<div className='rightPanel'>
				<div className='UserSection'>
					<img src={profile4} />
					<p className='user'>{props.userMail}</p>
				</div>
				<div onClick={props.cmd1} className='rightPanelItem'> 
					{props.item1}
				</div>
			</div>
		</div>
		);
}

export default RightColumn;
