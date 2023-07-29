import React, { useEffect, useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import './DashboardPage.scss';
import Navbar from '../../component/navbar/Navbar';
import ReactECharts from 'echarts-for-react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { projectColumns } from '../../utilities/constants';
const cloneDeep = require('lodash/cloneDeep');

const pieChartOption1 = {
    title : {
        text: 'Current Week Tasks',
        // subtext: 'July 1st, 2023',
        subtext: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }),
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom:  'bottom',
        data: ['Completed','In Progress','To Do']
    },
    series : [
        {
            name: 'Weekly Tasks',
            type: 'pie',
            radius : ['20%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data:[
                {value:335, name:'Completed'},
                {value:310, name:'In Progress'},
                {value:234, name:'To Do'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                borderRadius: 8
            }
        }
    ]
};

const barChartOption1 = {
    title : {
        text: 'Total Projects',
        subtext: 'Currently Running 17',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        orient: 'horizontal',
        top:  'top',
        // right: 'right',
        right: 'right'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Completed',
            type: 'bar',
            barWidth: 5,
            stack: 'project',
            emphasis: {
                focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120, 234, 343, 120, 234, 3434]
        },
        {
            name: 'In Progress',
            type: 'bar',
            stack: 'project',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220, 323, 133, 973, 91, 22]
        },
        {
            name: 'To Do',
            type: 'bar',
            stack: 'project',
            emphasis: {
                focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110, 324, 984, 187, 88, 95]
        }
    ]
};

function DashboardPage() {
    const [count, setCount] = useState(0);
    const [pieChartOption, setPieChartOption] = useState(pieChartOption1);
    const [barChartOption, setBarChartOption] = useState(barChartOption1);
    const projects = useSelector((state: RootState) => state.project.projects);
    const profile = useSelector((state: RootState) => state.profile.profile);
    const attendance = useSelector((state: RootState) => state.attendance.attendance);
    const absence = useSelector((state: RootState) => state.absence.absence);

    // useEffect(() => {
    //     getProjectListByEmployeeId(1).then((response) => {
    //         dispatch(addProjectsByEmployeeId(response.data));
    //     });
    // },[]);

    useEffect(() => {
        let nextPieChartOption = cloneDeep(pieChartOption);
        let nextBarChartOption = cloneDeep(barChartOption);
        const map: Map<string, number> = new Map<string, number>();
        const barMap: Map<string, number[]> = new Map<string, number[]>();
        projects.forEach((project) => {
            if(project.status == 'to do') {
                map.set('to do', (map.get('to do') || 0) + 1);
                const arr = barMap.get('to do') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                arr[new Date(project.startDate).getUTCMonth()] += 1;
                barMap.set('to do', arr as number[]);
            }
            if(project.status == 'completed') {
                map.set('completed', (map.get('completed') || 0) + 1);
                const arr = barMap.get('completed') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                arr[new Date(project.startDate).getUTCMonth()] += 1;
                barMap.set('completed', arr as number[]);
            }
            if(project.status == 'in progress') {
                map.set('in progress', (map.get('in progress') || 0) + 1);
                const arr = barMap.get('in progress') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                arr[new Date(project.startDate).getUTCMonth()] += 1;
                barMap.set('in progress', arr as number[]);
            }
        });
        nextPieChartOption.series = Object.assign({}, pieChartOption.series);
        nextPieChartOption.series.data = [
            {value: map.get('to do') || 0, name: 'To Do'},
            {value: map.get('in progress') || 0, name: 'In Progress'},
            {value: map.get('completed') || 0, name: 'Completed'},
        ];

        nextBarChartOption.series = Object.assign({}, barChartOption.series);
        nextBarChartOption.series = [
            {
                name: 'Completed',
                type: 'bar',
                barWidth: 5,
                stack: 'project',
                emphasis: {
                    focus: 'series'
                },
                data: barMap.get('completed')
            },
            {
                name: 'In Progress',
                type: 'bar',
                stack: 'project',
                emphasis: {
                    focus: 'series'
                },
                data: barMap.get('in progress')
            },
            {
                name: 'To Do',
                type: 'bar',
                stack: 'project',
                emphasis: {
                    focus: 'series'
                },
                data: barMap.get('to do')
            }
        ];

        console.log('barMap: ', barMap);

        setPieChartOption(nextPieChartOption);
        setBarChartOption(nextBarChartOption);
    }, [projects]);
    const onChartReady = (echarts: any) => {
        console.log('echarts is ready', echarts);
    };
    const onChartClick = (param: any, echarts: any) => {
        console.log(param, echarts);
        setCount(count + 1);
    };

    const onChartLegendselectchanged = (param: any, echarts: any) => {
        console.log(param, echarts);
    };


    return (
        <div>
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'dashboard-main'}>
                    <Navbar/>
                    <div className={'dashboard-user-overview'}>
                        <div className={'dashboard-user-name'}>Good Morning, {profile.lastName}!</div>
                        <div className={'dashboard-user-summary'}>
                            <div className={'dashboard-user-summary-item'}>
                                <div className={'dashboard-user-summary-title'}>Attendance</div>
                                <div className={'dashboard-user-summary-content'}>{attendance.length}</div>
                            </div>
                            <div className={'dashboard-user-summary-item'}>
                                <div className={'dashboard-user-summary-title'}>Late</div>
                                <div className={'dashboard-user-summary-content'}>0</div>
                            </div>
                            <div className={'dashboard-user-summary-item'}>
                                <div className={'dashboard-user-summary-title'}>Absent</div>
                                <div className={'dashboard-user-summary-content'}>{absence.length}</div>
                            </div>
                        </div>
                    </div>
                    <div className={'dashboard-charts'}>
                        <ReactECharts
                            option={pieChartOption}
                            className={'chart'}
                            // onChartReady={onChartReady}
                            // onEvents={{
                            //     'click': onChartClick,
                            //     'legendselectchanged': onChartLegendselectchanged
                            // }}
                        />

                        <ReactECharts
                            option={barChartOption}
                            className={'chart'}
                            // onChartReady={onChartReady}
                            // onEvents={{
                            //     'click': onChartClick,
                            //     'legendselectchanged': onChartLegendselectchanged
                            // }}
                        />
                    </div>
                    <Table columns={projectColumns} dataSource={projects.slice(0, 4).map((p, index) => {
                        return {
                            key: index,
                            ...p
                        };
                    })}
                           style={{
                               width: '99%'
                            }}
                           pagination={{hideOnSinglePage: true}}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
