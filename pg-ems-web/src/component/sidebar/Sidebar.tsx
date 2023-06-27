import React from "react";
import './Sidebar.scss'
import { AiFillProject, AiOutlineArrowLeft, AiOutlineDashboard, AiOutlineForm } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { BsTable, BsTypeH1 } from 'react-icons/bs';
import { RiFeedbackFill } from 'react-icons/ri';
import BrandIMG from '../../images/band.png';

function Sidebar() {

    let sidebarToggleStatus = false;

    const toggleSidebar = () => {
        console.log('sidebarToggleStatus: ', sidebarToggleStatus)
        if(sidebarToggleStatus) {
            document.getElementsByClassName('sidebar-container')[0]
                .classList.remove('sidebar-collapse');
            document.getElementsByClassName('sidebar-brand')[0]
                .classList.remove('sidebar-collapse');
            document.getElementsByClassName('sidebar-brand-text')[0]
                .classList.remove('hidden-display');
            Array.from(document.querySelectorAll('div.sidebar-nav'))
                .forEach(e => e.classList.remove('sidebar-collapse'));
            Array.from(document.querySelectorAll('div.sidebar-nav-button'))
                .forEach(e => e.classList.remove('hidden-display'));
        }else {
            document.getElementsByClassName('sidebar-container')[0]
                .classList?.add('sidebar-collapse');
            document.getElementsByClassName('sidebar-brand')[0]
                .classList.add('sidebar-collapse');
            document.getElementsByClassName('sidebar-brand-text')[0]
                .classList?.add('hidden-display');
            Array.from(document.querySelectorAll('div.sidebar-nav'))
                .forEach(e => e.classList.add('sidebar-collapse'));
            Array.from(document.querySelectorAll('div.sidebar-nav-button'))
                .forEach(e => e.classList.add('hidden-display'));

        }
        sidebarToggleStatus = !sidebarToggleStatus;
    }

    return (
        <>
            <aside className={'sidebar-container'}>
                <AiOutlineArrowLeft
                    className={'sidebar-toggle-button'}
                    onClick={() => toggleSidebar()}
                />
                <div className={'sidebar-manu'}>
                    <div className={'sidebar-brand'}>
                        {/*<BsTypeH1 className={'sidebar-nav-icon'} />*/}
                        <img className={'sidebar-nav-icon'} alt={'BrandIMG'} src={BrandIMG}/>
                        <div className={'sidebar-brand-text'}>EMP</div>
                    </div>
                    <div className={'sidebar-nav'}>
                        <AiOutlineDashboard className={'sidebar-nav-icon'}/>
                        <div className={'sidebar-nav-button'}> Dashboard</div>
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
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
