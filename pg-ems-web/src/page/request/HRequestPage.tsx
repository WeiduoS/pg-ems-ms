import React, { useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { message, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Absence from '../../model/Absence';
import VerificationReport from '../../model/VerificationReport';
import { addOrUpdateProfile } from '../../http/profile-services';
import { deleteVerificationReport, getAllVerificationReports } from '../../http/verification-report-services';
import { addVerificationReports } from '../../store/slices/verifiction-report-slice';

type DataType = {
    key: React.Key;
} & VerificationReport
function HRequestPage() {
    const verificationReports = useSelector((state: RootState) => state.verificationReport.verificationReports);
    const [request, setRequest] = useState('') as any;
    const dispatch = useDispatch();

    const columns: ColumnsType<DataType> = [
        { title: 'ID', dataIndex: 'verificationReportId', key: 'verification_report_id' },
        { title: 'Employee ID', dataIndex: 'employeeId', key: 'employee_id' },
        // { title: 'Reporter Name', dataIndex: 'reporterName', key: 'reporter_name' },
        { title: 'Report Date', dataIndex: 'reportDate', key: 'report_date' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => <a onClick={() => handleDecline(record)}>Decline</a>,
        },
    ];

    const handleDecline = (record: DataType): void => {
        addOrUpdateProfile({
            employeeId: record.employeeId,
            firstName: request.original.firstName,
            lastName: request.original.lastName,
            age: request.original.age,
            email: request.original.email,
            phoneNumber: request.original.phoneNumber,
            address: request.original.address,
            city: request.original.city,
            state: request.original.state,
            zipcode: request.original.zipcode,
        }).then((response) => {
            deleteVerificationReport({
                verificationReportId: record.verificationReportId,
                employeeId: record.employeeId,
                reporterName: record.reporterName,
                reportDate: record.reportDate,
                comment: record.comment
            }).then(() => {
                getAllVerificationReports().then((response) => {
                    dispatch(addVerificationReports(response.data));
                });
                setRequest('');
            });

        }).catch((error) => {
            message.error({
                type: 'error',
                content: error.response.data.message,
                duration: 10
            });
        });
    };

    const onRowClick = (event: any, record: DataType, rowIndex: number | undefined) => {
        setRequest(JSON.parse(record.comment));
    };

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
                            dataSource={verificationReports.map((ele, index) => {
                                return {
                                    ...ele,
                                    key: index
                                };
                            })}
                            style={{
                                width: '100%'
                            }}
                            onRow={(record, rowIndex) => {
                                return {
                                    onClick: () => onRowClick(event, record, rowIndex)
                                };
                            }}
                        />
                        <div className={'request-information-area'}>
                            <div className={'request-information-section'}>
                                <h1>Previous</h1>
                                <div className={'request-information-row'}>
                                    <label>First Name</label><p>{request.original?.firstName}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Last Name</label><p>{request.original?.lastName}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Age</label><p>{request.original?.age}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>E-Mail</label><p>{request.original?.email}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Phone #</label><p>{request.original?.phoneNumber}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Address</label><p>{request.original?.address}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>City</label><p>{request.original?.city}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>State</label><p>{request.original?.state}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Zip Code</label><p>{request.original?.zipcode}</p>
                                </div>
                            </div>
                            <div className={'request-information-section'}>
                                <h1>New</h1>
                                <div className={'request-information-row'}>
                                    <label>First Name</label><p>{request.profile?.firstName}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Last Name</label><p>{request.profile?.lastName}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Age</label><p>{request.profile?.age}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>E-Mail</label><p>{request.profile?.email}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Phone #</label><p>{request.profile?.phoneNumber}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Address</label><p>{request.profile?.address}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>City</label><p>{request.profile?.city}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>State</label><p>{request.profile?.state}</p>
                                </div>
                                <div className={'request-information-row'}>
                                    <label>Zip Code</label><p>{request.profile?.zipcode}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HRequestPage;

