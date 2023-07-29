import React from "react";
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';

import './ProfilePage.scss';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../store/store';
import { setProfile } from '../../store/slices/profile-slice';
import { addOrUpdateProfile } from '../../http/profile-services';
import { addOrUpdateVerificationReport } from '../../http/verification-report-services';

function ProfilePage() {
    const profile = useSelector((state: RootState) => state.profile.profile);
    const original = useSelector((state: RootState) => state.profile.original);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        dispatch(setProfile({
            ...profile,
            [field]: e.target.value
        }));
    };

    const submit = () => {
        addOrUpdateProfile(profile)
            .then((response) => {
                console.log('Add or Update Profile: ', response);
            }).catch((error) => {
                message.error({
                    type: 'error',
                    content: error.response.data.message,
                    duration: 10
                });
        });
        addOrUpdateVerificationReport({
            comment: JSON.stringify({
                original: original,
                profile: profile
            }),
            employeeId: store.getState().user.user.id,
            reportDate: new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        }).then((response) => {
            console.log('Add or Update Profile: ', response);
            message.info({
                type: 'info',
                content: 'Updated',
            });
        }).catch((error) => {
            message.error({
                type: 'error',
                content: error.response.data.message,
                duration: 10
            });
        });
    };

    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'profile-main'}>
                    <Navbar/>
                    <div className={'profile-form-container'}>
                        <div className={'profile-form-row'}>
                            <label>First Name</label>
                            <input name={'first_name'}
                                   defaultValue={profile.firstName}
                                   onChange={(e) => onChange(e, 'firstName')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>Last Name</label>
                            <input name={'last_name'}
                                   defaultValue={profile.lastName}
                                   onChange={(e) => onChange(e, 'lastName')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>Age</label>
                            <input name={'age'}
                                   defaultValue={profile.age}
                                   onChange={(e) => onChange(e, 'age')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>E-Mail</label>
                            <input name={'email'}
                                   defaultValue={profile.email}
                                   onChange={(e) => onChange(e, 'email')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>Phone #</label>
                            <input name={'phone_number'}
                                   defaultValue={profile.phoneNumber}
                                   onChange={(e) => onChange(e, 'phoneNumber')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>Address</label>
                            <input name={'address'}
                                   defaultValue={profile.address}
                                   onChange={(e) => onChange(e, 'address')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>City</label>
                            <input name={'city'}
                                   defaultValue={profile.city}
                                   onChange={(e) => onChange(e, 'city')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>State</label>
                            <input name={'State'}
                                   defaultValue={profile.state}
                                   onChange={(e) => onChange(e, 'state')}
                            />
                        </div>
                        <div className={'profile-form-row'}>
                            <label>Zip Code</label>
                            <input name={'zip_code'}
                                   defaultValue={profile.zipcode}
                                   onChange={(e) => onChange(e, 'zipcode')}
                            />
                        </div>
                        <div className={'profile-form-operations'}>
                            <button onClick={submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
