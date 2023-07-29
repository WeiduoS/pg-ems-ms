import { ColumnsType } from 'antd/es/table';
import Project from '../model/Project';
import React from 'react';

export const projectColumns = [
    {
        title: '#',
        dataIndex: 'projectId',
        key: 'project_id',
        render: (text) => {
            return text;
        },
        editable: false
    },
    {
        title: 'Project Name',
        dataIndex: 'projectName',
        key: 'project_name',
        editable: false
    },
    {
        title: 'Employee ID',
        dataIndex: 'employeeId',
        key: 'employee_id',
        editable: false
    },
    {
        title: 'Manager ID',
        dataIndex: 'managerId',
        key: 'manager_id',
        editable: false
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        editable: false
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'start_date',
        editable: false
    },
    {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'end_date',
        editable: false
    },
];
