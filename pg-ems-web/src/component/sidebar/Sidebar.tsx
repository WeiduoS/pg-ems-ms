import React from "react";
import './Sidebar.scss'
import { AiFillProject, AiOutlineDashboard, AiOutlineForm } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { BsTable } from 'react-icons/bs';
import { RiFeedbackFill } from 'react-icons/ri';

function Sidebar() {


    return (
        <div className={'sidebar-container'}>
            <div className={'brand'}>EMP</div>
            <div className={'sidebar-nav'}><AiOutlineDashboard className={'sidebar-nav-icon'}/> <div className={'sidebar-nav-button'}>Dashboard</div></div>
            <div className={'sidebar-nav'}><BsTable className={'sidebar-nav-icon'}/><div className={'sidebar-nav-button'}>Attendance</div></div>
            <div className={'sidebar-nav'}><AiFillProject className={'sidebar-nav-icon'}/><div className={'sidebar-nav-button'}>Projects</div></div>
            <div className={'sidebar-nav'}><GoPerson className={'sidebar-nav-icon'}/><div className={'sidebar-nav-button'}>Account</div></div>
            <div className={'sidebar-nav'}><AiOutlineForm className={'sidebar-nav-icon'}/><div className={'sidebar-nav-button'}>Request</div></div>
            <div className={'sidebar-nav'}><RiFeedbackFill className={'sidebar-nav-icon'}/><div className={'sidebar-nav-button'}>Feedback</div></div>
        </div>
    );
}

export default Sidebar;
