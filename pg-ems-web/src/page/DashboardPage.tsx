import React from "react";
import Sidebar from '../component/sidebar/Sidebar';
import './DashboardPage.scss';
import Navbar from '../component/navbar/Navbar';
import { PieChart } from "react-minimal-pie-chart";

function DashboardPage() {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'dashboard-main'}>
                    <Navbar/>
                    <div className={'dashboard-charts'}>
                        <PieChart
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                            className={'dashboard-pie-chart'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
