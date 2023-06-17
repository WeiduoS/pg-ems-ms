import React from "react";
import './Sidebar.scss'
import { AiFillProject, AiOutlineArrowLeft, AiOutlineDashboard, AiOutlineForm } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { BsTable, BsTypeH1 } from 'react-icons/bs';
import { RiFeedbackFill } from 'react-icons/ri';

function Sidebar() {

    let sidebarToggleStatus = false;

    const toggleSidebar = () => {
        if(sidebarToggleStatus) {
            document.getElementsByClassName('sidebar-brand-text')[0]
                .classList.remove('hidden')
            Array.from(document.querySelectorAll('div.sidebar-nav-button'))
                .forEach(e => e.classList.remove('hidden'));
        }else {
            document.getElementsByClassName('sidebar-brand-text')[0]
                .classList.add('hidden')
            Array.from(document.querySelectorAll('div.sidebar-nav-button'))
                .forEach(e => e.classList.add('hidden'));

        }
        sidebarToggleStatus = !sidebarToggleStatus;
    }

    return (
        <>
            <aside className={'sidebar-container'}>
                <AiOutlineArrowLeft
                    className={'sidebar-toggle-button add-color'}
                    onClick={() => toggleSidebar()}
                />
                <div className={'sidebar-brand'}>
                    <BsTypeH1 className={'sidebar-nav-icon'} />
                    <div className={'sidebar-brand-text'}>EMP</div>
                </div>
                <div className={'sidebar-nav'}>
                    <AiOutlineDashboard className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Dashboard</div>
                </div>
                <div className={'sidebar-nav'}>
                    <BsTable className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Attendance</div>
                </div>
                <div className={'sidebar-nav'}>
                    <AiFillProject className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Projects</div>
                </div>
                <div className={'sidebar-nav'}>
                    <GoPerson className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Account</div>
                </div>
                <div className={'sidebar-nav'}>
                    <AiOutlineForm className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Request</div>
                </div>
                <div className={'sidebar-nav'}>
                    <RiFeedbackFill className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Feedback</div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
