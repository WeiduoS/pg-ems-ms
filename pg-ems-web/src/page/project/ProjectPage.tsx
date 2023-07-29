import React, { useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import {
    Form,
    Input,
    InputNumber,
    message,
    Popconfirm,
    Select,
    Table,
    Typography
} from 'antd';

import './ProjectPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { projectColumns } from '../../utilities/constants';
import Project from '../../model/Project';
import { addProjectsByEmployeeId, updateProjects } from '../../store/slices/project-slice';
import { addOrUpdateProjects } from '../../http/project-services';

const { Option } = Select;

type Item = {
    key: string;
} & Project

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
                                                       editing,
                                                       dataIndex,
                                                       title,
                                                       inputType,
                                                       record,
                                                       index,
                                                       children,
                                                       ...restProps
                                                   }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    // console.log('editing: ', editing, 'dataIndex: ', dataIndex, 'title: ', title,
    //     ' inputType: ', inputType, ' record: ', record, ' index: ', index, ' children: ', children, ' restProps: ', restProps);
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    let valid = true;
    if(dataIndex == 'startDate' || dataIndex == 'endDate') {
        const startDate: string = record.startDate;
        const endDate: string = record.endDate;
        if(!startDate.match(regEx) || !endDate.match(regEx)) {
            valid =  false;
        }
    }

    return (
        <td {...restProps}>
            {editing && dataIndex != 'projectId' ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    validateStatus={valid ? '' : 'error'}
                    rules={[
                        {
                            required: dataIndex === 'employeeId',
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {dataIndex == 'type' ?
                        <Select
                            placeholder="Select a type and change input text above"
                            allowClear
                        >
                            <Option value="technical">technical</Option>
                            <Option value="business">business</Option>
                            <Option value="marketing">marketing</Option>
                            <Option value="sale">marketing</Option>
                        </Select>
                        :
                        dataIndex == 'status' ?
                            <Select
                                placeholder="Select a status and change input text above"
                                allowClear
                            >
                                <Option value="to do">to do</Option>
                                <Option value="in progress">in progress</Option>
                                <Option value="completed">completed</Option>
                            </Select>
                            :
                            inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const ProjectPage:React.FC = () => {
    const [form] = Form.useForm();
    const projects = useSelector((state: RootState) => state.project.projects);
    const [editingKey, setEditingKey] = useState('');
    const dispatch = useDispatch();
    const [description, setDescription] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [curProject, setCurProject] = useState<Project>({
        projectId: '',
        employeeId: '',
        managerId: '',
        projectName: '',
        description: '',
        type: '',
        status: '',
        startDate: '',
        endDate: '',
        grade: '',
        feedback: '',
    });
    let timer = setTimeout(() => {});

    const edit = (record: Item) => {
        form.setFieldsValue({...record });
        setEditingKey(record.key);
    };

    const isEditing = (record: Item): boolean => record.key === editingKey;

    const cancel = () => setEditingKey('');
    const save = async (id: string) => {
        try {
            const row = (await form.validateFields()) as Item;
            const newData = [...projects] as Item[];
            const index = newData.findIndex((item) => id === item.projectId);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                dispatch(updateProjects(newData));
                setEditingKey('');
            } else {
                newData.push(row);
                dispatch(updateProjects(newData));
                setEditingKey('');
            }
            saveAndUpdate(newData);
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const onRowClick = (event: any, record: Item, rowIndex: number | undefined) => {
        console.log('record: ', record);
        setCurProject(Object.assign({}, record));
        setDescription(record.description);
        setFeedback(record.feedback);
    };

    const onChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        // clearTimeout(timer);
        if (field == 'feedback') setFeedback(e.target.value);
        else setDescription(e.target.value);
        const row = (await form.validateFields()) as Item;
        const newData = [...projects] as Item[];
        const index = newData.findIndex((item) => curProject.projectId === item.projectId);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
                ...{
                    ...item,
                    [field]: e.target.value
                },
                ...row,
            });
        }
        dispatch(updateProjects(newData));
        // timer = setTimeout(async () => {
        //     const row = (await form.validateFields()) as Item;
        //     const newData = [...projects] as Item[];
        //     const index = newData.findIndex((item) => curProject.projectId === item.projectId);
        //     if (index > -1) {
        //         const item = newData[index];
        //         newData.splice(index, 1, {
        //             ...{
        //                 ...item,
        //                 [field]: e.target.value
        //             },
        //             ...row,
        //         });
        //     }
        //     dispatch(updateProjects(newData));
        //     saveAndUpdate(newData);
        // }, 8000);
    };

    const submit = async () => {
        saveAndUpdate(projects);
    }


    const saveAndUpdate = (newData: Project[]) => {
        console.log('saveAndUpdate: newData: ', newData);
        addOrUpdateProjects(newData)
            .then((response) => {
                console.log('Add or Update Projects: ', response);
            }).catch((error: any) => {
                message.error({
                    type: 'error',
                    content: error.response.data.message,
                    duration: 10
                });
        });
    };

    const columns = [...projectColumns,
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            editable: false,
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.projectId)} style={{ marginRight: 8 }}>
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
        }}].map((col) => {
            if(col.title != 'Operation') return {...col, editable: true};
            else return col;
        });

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => {
                return {
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            };},
        };
    });


    const handleAdd = () => {
        const newData: Project = {
            projectId: '',
            employeeId: '',
            managerId: '',
            projectName: '',
            description: '',
            type: '',
            status: '',
            startDate: '',
            endDate: '',
            grade: '',
            feedback: '',
        };
        dispatch(updateProjects([newData, ...projects]));
    };
    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'project-main'}>
                    <Navbar/>
                    <div style={{
                        padding: '5px',
                        width: '100%'
                    }}>
                        <div className={'project-tools'}>
                            <button onClick={submit}>Update</button>
                            <button onClick={handleAdd}>Add row</button>
                        </div>
                        <Form form={form} component={false}>
                        <Table
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                            columns={mergedColumns}
                            dataSource={
                                projects.map((p, index) => {
                                    return {
                                        key: index + '',
                                        ...p
                                    };
                                })
                            }
                            style={{
                               width: '100%'
                            }}
                            pagination={{hideOnSinglePage: true}}
                            onRow={(record, rowIndex) => {
                                return {
                                    onClick: () => onRowClick(event, record, rowIndex)
                                };
                            }}
                        />
                        </Form>
                        <div className={'project-information-area'}>
                            <div className={'project-information-section'}>
                                <h1>Description</h1>
                                <textarea defaultValue={description} onChange={(e) => onChange(e, 'description')}/>
                            </div>
                            <div className={'project-information-section'}>
                                <h1>Feedback</h1>
                                <textarea value={feedback} onChange={(e) => onChange(e, 'feedback')}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
