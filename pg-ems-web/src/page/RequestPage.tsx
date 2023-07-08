import React from "react";
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';

function RequestPage() {
    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'request-main'}>
                    <Navbar/>
                    request
                </div>
            </div>
        </div>
    );
}

export default RequestPage;
