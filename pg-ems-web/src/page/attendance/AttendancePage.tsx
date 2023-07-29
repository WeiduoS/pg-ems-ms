import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import "./AttendancePage.scss";
import { Calendar, message } from 'antd';
import { CalendarMode, SelectInfo } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import Status from '../../component/status/Status';
import { FaUserCog } from 'react-icons/fa';
import { addModal } from '../../component/modal/ModalManager';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store/store';
import { addOrUpdateAttendance, getAttendanceByEmployeeId } from '../../http/attendance-services';
import { addOrUpdateAbsence, getAbsenceByEmployeeId } from '../../http/absence-services';
import { addAttendanceByEmployeeId } from '../../store/slices/attendance-slice';
import { addAbsenceByEmployeeId } from '../../store/slices/absence-slice';

function AttendancePage() {

    const user = useSelector((state: RootState) => state.user.user);
    const attendance = useSelector((state: RootState) => state.attendance.attendance);
    const absence = useSelector((state: RootState) => state.absence.absence);
    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const onSelect = (date: Dayjs, selectInfo: SelectInfo) => {
        console.log(date.format('YYYY-MM-DD'), selectInfo);
        addModal(
            <div>
                <p>Date: {date.format('YYYY-MM-DD')}</p>
                <div className={'attendance-modal-main'}>
                    <select id={'attendance-selection'}>
                        <option value={'attendance'}>Attendance</option>
                        <option value={'absence'}>Absence</option>
                    </select>
                    <label >Hours</label><input id={'attendance-hours'}/>
                    <button onClick={() => {
                        const ele = document.getElementById('attendance-selection') as any;
                        const option = ele.options[ele.selectedIndex].text || '';
                        // @ts-ignore
                        const hours = document.getElementById('attendance-hours')?.value;
                        const dateVal = date.format('YYYY-MM-DD');
                        console.log('option: ', option, ' hours: ', hours + ", date: ", dateVal);
                        if(option == 'Attendance') {
                            console.log('dateVal: ', dateVal);
                            addOrUpdateAttendance({
                                employeeId: user.id,
                                date: dateVal,
                                time: hours + '',
                            }).then((response) => {
                                getAttendanceByEmployeeId(user.id).then((response) => {
                                    store.dispatch(addAttendanceByEmployeeId(response.data));
                                });
                            }).catch((error) => {
                                message.error({
                                    type: 'error',
                                    content: error.response.data.message,
                                    duration: 10
                                });
                            });
                        }else {
                            addOrUpdateAbsence({
                                employeeId: user.id,
                                date: dateVal,
                                leaveTime: hours + '',
                            }).then((response) => {
                                console.log('Add or Update Attendance: ', response);
                                getAbsenceByEmployeeId(user.id).then((response) => {
                                    store.dispatch(addAbsenceByEmployeeId(response.data));
                                });
                            }).catch((error) => {
                                message.error({
                                    type: 'error',
                                    content: error.response.data.message,
                                    duration: 10
                                });
                            });
                        }

                    }}>Submit</button>
                </div>
            </div>
        );

    };
    const getListData = (value: Dayjs) => {
        const attendanceList= attendance.filter((record) => new Date(record.date).getUTCDate() == value.date() && new Date(record.date).getUTCMonth() == value.month())
            .map((record) => {
                return {
                    ...record,
                    type: 'attendance'
                };
            });
        const absenceList = absence.filter((record) => new Date(record.date).getUTCDate() == value.date() && new Date(record.date).getUTCMonth() == value.month())
            .map((record) => {
                return {
                    ...record,
                    type: 'absence'
                };
            });
        return [...attendanceList, ...absenceList];
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <>
                {listData.map((item: any, index) => (
                    <Status key={index}
                            icon={<FaUserCog style={{
                                    color: '#095002'
                            }}/>}
                            message={''}
                            style={{
                                backgroundColor: item.type == 'attendance' ? '#c6f0ce' : '#f7cad0',
                                color:  item.type == 'attendance' ? '#095002' : '#e5383b',
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                addModal(
                                    <div key={index} className={'attendance-modal-main'}>
                                        {item.type} {item.time == undefined ? item.leaveTime : item.time} hours
                                    </div>
                                );
                            }}
                    />
                ))}
            </>
        );
    };

    const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
        if (info.type === 'date') return dateCellRender(current);
        return info.originNode;
    };

    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'attendance-main'}>
                    <Navbar/>
                    <Calendar className={'calendar'}
                              cellRender={cellRender}
                              onPanelChange={onPanelChange}
                              onSelect={onSelect}
                    />
                </div>
            </div>
        </div>
    );
}

export default AttendancePage;
