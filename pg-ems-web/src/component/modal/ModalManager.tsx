import Modal from './Modal';
import { v4 as uuid } from 'uuid';
import ReactElementManager from '../../utilities/ReactElementManager';
import { Root } from 'react-dom/client';
import { ReactElement } from 'react';

let modalQueue: CompositedElement[] = [];
const root: Root = ReactElementManager.getOrCreateReactELNode();
type CompositedElement = {
    id: string,
    ele: ReactElement,
}


const updateQueue = () => {
    root.render(modalQueue.map(ele => ele.ele));
};

export const addModal = (content: ReactElement) => {
    const newId = uuid();
    const closeFunction = () => {
        removeModal(newId);
    };
    new Promise((resolve, reject) => {
        try {
            modalQueue.push({
                id: newId,
                ele: <Modal content={content} close={closeFunction}/>
            });
            updateQueue();
            resolve(newId);
        } catch (e) {
            reject(e);
        }
    }).then(() => {});

};

const removeModal = (id: string) => {
    new Promise<any>((resolve, reject) => {
        try {
            modalQueue = modalQueue.filter((modal) => (modal.id != id));
            updateQueue();
            resolve(id);
        } catch (e) {
            reject(e);
        }
    }).then(() => {});
};
