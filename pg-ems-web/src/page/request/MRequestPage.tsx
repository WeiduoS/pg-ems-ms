import React from "react";
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import './RequestPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { message, Table } from 'antd';
import Absence from '../../model/Absence';
import type { ColumnsType } from 'antd/es/table';
import { deleteAbsenceByManagerId, getAbsenceByManagerId } from '../../http/absence-services';
import { addAbsenceByManagerId } from '../../store/slices/absence-slice';

type DataType = {
    key: React.Key;
} & Absence




function MRequestPage() {
    const absence = useSelector((state: RootState) => state.absence.requestAbsence);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);

    const handleDecline = (record: { key: React.Key } & Absence) => {
        deleteAbsenceByManagerId({
            absentRequestId: record.absentRequestId,
            absentRequestComment: record.absentRequestComment,
            employeeId: record.employeeId,
            date: record.date,
            leaveTime: record.leaveTime
        }).then((response) => {
            console.log('Add or Update Absence: ', response);
            getAbsenceByManagerId(user.id).then((response) => {
                dispatch(addAbsenceByManagerId(response.data));
            });
        }).catch((error) => {
            message.error({
                type: 'error',
                content: error.response.data.message,
                duration: 10
            });
        });

    };

    const columns: ColumnsType<DataType> = [
        { title: 'ID', dataIndex: 'absentRequestId', key: 'absentRequest_id' },
        { title: 'Employee ID', dataIndex: 'employeeId', key: 'employee_id' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Leave Time', dataIndex: 'leaveTime', key: 'leave_time' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => <a onClick={() => handleDecline(record)}>Decline</a>,
        },
    ];

    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'request-main'}>
                    <Navbar/>
                    <div style={{
                        padding: '5px',
                        width: '100%'
                    }}>
                        <Table
                            columns={columns}
                            dataSource={absence.map((ele, index) => {
                                return {
                                    ...ele,
                                    key: index
                                };
                            })}
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MRequestPage;
