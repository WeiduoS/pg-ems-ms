import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.scss';
import { AiFillProject, AiOutlineArrowLeft, AiOutlineDashboard, AiOutlineForm, AiOutlineMenu } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { BsTable } from 'react-icons/bs';
import { RiFeedbackFill } from 'react-icons/ri';
import BrandIMG from '../../images/band.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Sidebar() {

    let sidebarToggleStatus = false;
    const [sidebarSwitchStatus, setSidebarSwitchStatus] = useState(false);
    const sidebar = useRef<HTMLDivElement>(document.createElement('div'));
    const sidebarOverlay = useRef<HTMLDivElement>(document.createElement('div'));

    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        console.log('Sidebar: user: ', user);
    });

    const toggleSidebar = () => {
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
    };

    const switchSidebar= () => {
        if(sidebarSwitchStatus) {
            sidebar.current.style.removeProperty('left');
            sidebarOverlay.current.style.removeProperty('display');
        }else {
            sidebar.current.style.left = '0px';
            sidebarOverlay.current.style.display = 'initial';
        }
        setSidebarSwitchStatus(!sidebarSwitchStatus);
    };

    const generateSidebar = (): React.ReactElement[] => {
        let res: React.ReactElement[] = [];
        res.push(
            <div className={'sidebar-nav'} onClick={() => navigate('/')}>
                <AiOutlineDashboard className={'sidebar-nav-icon'}/>
                <div className={'sidebar-nav-button'}> Dashboard</div>
            </div>
        );
        if(user.authorities.map((e: any) => e.authority).includes('user')) {
            res.push(
                <div className={'sidebar-nav'} onClick={() => navigate('/attendance')}>
                    <BsTable className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Attendance</div>
                </div>
            );
            res.push(
                <div className={'sidebar-nav'} onClick={() => navigate('/project-feedback')}>
                    <RiFeedbackFill className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Feedback</div>
                </div>
            );
        }
        res.push(
            <div className={'sidebar-nav'} onClick={() => navigate('/profile')}>
                <GoPerson className={'sidebar-nav-icon'}/>
                <div className={'sidebar-nav-button'}>Account</div>
            </div>
        );

        if(user.authorities.map((e: any) => e.authority).includes('manager')) {
            res.push(
                <div className={'sidebar-nav'} onClick={() => navigate('/mrequest')}>
                    <AiOutlineForm className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Request</div>
                </div>
            );
            res.push(
                <div className={'sidebar-nav'} onClick={() => navigate('/project')}>
                    <AiFillProject className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Projects</div>
                </div>
            );
        }
        if(user.authorities.map((e: any) => e.authority).includes('hr')) {
            res.push(
                <div className={'sidebar-nav'} onClick={() => navigate('/project-feedback')}>
                    <RiFeedbackFill className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Feedback</div>
                </div>
            );
            res.push(
                <div className={'sidebar-nav'} onClick={() => navigate('/hrequest')}>
                    <AiOutlineForm className={'sidebar-nav-icon'}/>
                    <div className={'sidebar-nav-button'}>Request</div>
                </div>
            );
        }

        return res;
    };

    return (
        <>
            <aside className={'sidebar-container'} ref={sidebar}>
                <AiOutlineArrowLeft
                    className={'sidebar-toggle-button'}
                    onClick={() => toggleSidebar()}
                />
                <div className={'sidebar-manu'}>
                    <div className={'sidebar-brand'}>
                        <img className={'sidebar-nav-icon'} alt={'BrandIMG'} src={BrandIMG}/>
                        <div className={'sidebar-brand-text'}>EMP</div>
                    </div>
                    {generateSidebar()}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/')}>*/}
                    {/*    <AiOutlineDashboard className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}> Dashboard</div>*/}
                    {/*</div>*/}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/attendance')}>*/}
                    {/*    <BsTable className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}>Attendance</div>*/}
                    {/*</div>*/}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/project')}>*/}
                    {/*    <AiFillProject className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}>Projects</div>*/}
                    {/*</div>*/}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/profile')}>*/}
                    {/*    <GoPerson className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}>Account</div>*/}
                    {/*</div>*/}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/mrequest')}>*/}
                    {/*    <AiOutlineForm className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}>Request</div>*/}
                    {/*</div>*/}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/project-feedback')}>*/}
                    {/*    <RiFeedbackFill className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}>Feedback</div>*/}
                    {/*</div>*/}
                    {/*<div className={'sidebar-nav'} onClick={() => navigate('/hrequest')}>*/}
                    {/*    <AiOutlineForm className={'sidebar-nav-icon'}/>*/}
                    {/*    <div className={'sidebar-nav-button'}>Request</div>*/}
                    {/*</div>*/}
                </div>
            </aside>
            <AiOutlineMenu className={(sidebarSwitchStatus ? 'hidden-display' : 'sidebar-switcher-button')} onClick={() => switchSidebar()}/>
            <div id={'sidebar-overlay'} ref={sidebarOverlay} onClick={() => switchSidebar()}></div>
        </>
    );
}

export default Sidebar;
