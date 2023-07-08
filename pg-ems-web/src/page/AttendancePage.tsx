import React from "react";
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';

function AttendancePage() {
    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'attendance-main'}>
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}

export default AttendancePage;
