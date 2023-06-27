import React from "react";
import './Navbar.scss'
import { BiMessageDetail, BiSearchAlt } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';


function Navbar() {

    return (
        <>
            <div className={'navbar-container'}>
                <div className={'navbar-search-box'}>
                    <BiSearchAlt className={'navbar-search-icon'}/>
                    <input className={'navbar-search-input'} placeholder={'Search'}/>
                </div>
                <div className={'navbar-tools-box'}>
                    <BsBell className={'navbar-alter-icon'}/>
                    <BiMessageDetail className={'navbar-message-icon'}/>
                    <div className={'navbar-user-avatar'}>
                        wsun2770
                        <RxAvatar className={'navbar-user-avatar-icon'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
