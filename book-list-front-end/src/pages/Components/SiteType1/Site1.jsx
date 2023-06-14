import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import './Site1.css'
import logo from "../../../logo.png";
import profile4 from "../../../profile4.png";
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import { useState } from "react";


function Site1(props) {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState("tab1");

	return (
		<div className='body'>
			<div className='leftColumnBody'>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
				<div className='leftPanel'>
					<div className='UserSection'>
						<img src={profile4} />
						<p className='user'>{props.userMail}</p>
					</div>
					<div onClick={() => {setActiveTab("tab1")}} className={activeTab === "tab1" ? "leftPanelItem active" : "leftPanelItem"}> 
						{props.item1}
					</div>
					<div onClick={() => {setActiveTab("tab2")}} className={activeTab === "tab2" ? "leftPanelItem active" : "leftPanelItem"}> 
						{props.item2}
					</div>
				</div>
			</div>
			<div className='median'></div>
			<div className='rightColumnBody'>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
				<div className='rightPanel'>
					<div className='rightPanelItem'> 
						<div className="outlet">
							{activeTab === "tab1" ? <Tab1 userMail={props.userMail} /> : <Tab2 />}
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Site1;
