import React from "react";
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';

function ProjectFeedBackPage() {
    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'project-feedback-main'}>
                    <Navbar/>
                    project feedback
                </div>
            </div>
        </div>
    );
}

export default ProjectFeedBackPage;
