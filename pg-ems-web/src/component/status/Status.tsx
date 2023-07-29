import React, { ReactElement } from 'react';
import './Status.scss';

type StatusProps = {
    icon?: ReactElement
    message: string
    style: object
    onClick: (e)=> any
}

function Status(props: StatusProps) {

    return (
        <>
            <div style={props.style} className={'status-container'} onClick={(e) => props.onClick(e)}>
                {props.icon}
                <span>{props.message}</span>
            </div>
        </>
    );
}

export default Status;
