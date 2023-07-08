import React from "react";
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';
import { ColumnsType } from 'antd/es/table';
import { Space, Table, Tag } from 'antd';

import './ProjectPage.scss'


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
    {
        key: '4',
        name: 'Delivery',
        age: 32,
        address: 'Delivery Email',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        name: 'Delivery',
        age: 32,
        address: 'Delivery Email',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        name: 'Delivery',
        age: 32,
        address: 'Delivery Email',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        name: 'Delivery',
        age: 32,
        address: 'Delivery Email',
        tags: ['cool', 'teacher'],
    },
];
function ProjectPage() {
    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'project-main'}>
                    <Navbar/>
                    <Table columns={columns} dataSource={data}
                           style={{
                               marginTop: '10px',
                               width: '99%'
                           }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
