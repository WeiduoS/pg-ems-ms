import React, { useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import './ProjectFeedBackPage.scss';
import { Form, Input, InputNumber, message, Popconfirm, Select, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { projectColumns } from '../../utilities/constants';
import Project from '../../model/Project';
import { updateProjects } from '../../store/slices/project-slice';
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
    return (
        <td {...restProps}>
            {editing && dataIndex != 'projectId' ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                >
                    {dataIndex == 'status' ?
                        <Select
                            placeholder="Status"
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
function ProjectFeedBackPage() {
    const [form] = Form.useForm();
    const projects = useSelector((state: RootState) => state.project.projects);
    const dispatch = useDispatch();
    const [editingKey, setEditingKey] = useState('');
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
    const user = useSelector((state: RootState) => state.user.user);


    const edit = (record: Item) => {
        form.setFieldsValue({...record });
        setEditingKey(record.key);
    };

    const isEditing = (record: Item): boolean => record.key === editingKey;

    const cancel = () => setEditingKey('');

    const saveAndUpdate = (newData: Project[]) => {
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


    const columns = () => {
        let res: any[] = [...projectColumns,
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
        ]

        if(user.authorities.map((e: any) => e.authority).includes('user')) {
            res.push(
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
                    }}
            )
        }
        res = res.map((col) => {
            if(col.title == 'Status') return {...col, editable: true};
            else return col;
        });
        return res;
    };

    const mergedColumns = columns().map((col) => {
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

    const onRowClick = (event: any, record: Item, rowIndex: number | undefined) => {
        setCurProject(Object.assign({}, record));
        setDescription(record.description);
        setFeedback(record.feedback);
    };


    return (
        <div >
            <div style={{
                display: 'flex',
                flexFlow: 'row nowrap'
            }}>
                <Sidebar/>
                <div className={'project-feedback-main'}>
                    <div style={{
                        padding: '5px',
                        width: '100%'
                    }}>
                        <Navbar/>
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
                        <div className={'project-feedback-information-area'}>
                            <div className={'project-feedback-information-section'}>
                                <h1>Description</h1>
                                <p>{description}</p>
                            </div>
                            <div className={'project-feedback-information-section'}>
                                <h1>Feedback</h1>
                                <p>{feedback}</p>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProjectFeedBackPage;
