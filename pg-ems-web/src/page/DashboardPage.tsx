import React, { useState } from 'react';
import Sidebar from '../component/sidebar/Sidebar';
import './DashboardPage.scss';
import Navbar from '../component/navbar/Navbar';
import ReactECharts from 'echarts-for-react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Project Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Days',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Summary',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>View</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'React',
        age: 32,
        address: 'Build React App',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Angular',
        age: 42,
        address: 'Build Angular App',
        tags: ['nice'],
    },
    {
        key: '3',
        name: 'Delivery',
        age: 32,
        address: 'Delivery Email',
        tags: ['cool', 'teacher'],
    },
];

function DashboardPage() {
    const [count, setCount] = useState(0);
    const onChartReady = (echarts: any) => {
        console.log('echarts is ready', echarts);
    }
    const onChartClick = (param: any, echarts: any) => {
        console.log(param, echarts);
        setCount(count + 1);
    };

    const onChartLegendselectchanged = (param: any, echarts: any) => {
        console.log(param, echarts);
    };


    const pieChartOption = {
        title : {
            text: 'Current Week Tasks',
            subtext: 'July 1st, 2023',
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


    const barChartOption = {
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
                        <div className={'dashboard-user-name'}>Good Morning, Weiduo!</div>
                        <div className={'dashboard-user-summary'}>
                            <div className={'dashboard-user-summary-item'}>
                                <div className={'dashboard-user-summary-title'}>Attendance</div>
                                <div className={'dashboard-user-summary-content'}>234</div>
                            </div>
                            <div className={'dashboard-user-summary-item'}>
                                <div className={'dashboard-user-summary-title'}>Late</div>
                                <div className={'dashboard-user-summary-content'}>12</div>
                            </div>
                            <div className={'dashboard-user-summary-item'}>
                                <div className={'dashboard-user-summary-title'}>Absent</div>
                                <div className={'dashboard-user-summary-content'}>09</div>
                            </div>
                        </div>
                    </div>
                    <div className={'dashboard-charts'}>
                        <ReactECharts
                            option={pieChartOption}
                            className={'chart'}
                            onChartReady={onChartReady}
                            onEvents={{
                                'click': onChartClick,
                                'legendselectchanged': onChartLegendselectchanged
                            }}
                        />

                        <ReactECharts
                            option={barChartOption}
                            className={'chart'}
                            onChartReady={onChartReady}
                            onEvents={{
                                'click': onChartClick,
                                'legendselectchanged': onChartLegendselectchanged
                            }}
                        />
                    </div>
                    <Table columns={columns} dataSource={data}
                           style={{
                               width: '99%'
                            }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
