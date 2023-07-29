import React, { ReactElement } from 'react';
import './Modal.scss';
import { GrClose } from 'react-icons/gr';

type ModalProps = {
    content: ReactElement
    close: () => any;
}
const Modal: React.FC<ModalProps> = ({content, close}) => {
    return (
        <div className={'modal-container'}>
            {content}
            <div className={'modal-tools'}>
                <GrClose className={'modal-close-button'} onClick={close}/>
            </div>
        </div>
    );
};

export  default Modal;
