import ReactDOM, { Root } from 'react-dom/client';

class ReactElementManager {
    static REACT_ELEMENT_ROOT: Root | undefined = undefined;
    static REACT_ELEMENT_NODE_NAME = 'react-element-node';
    static getOrCreateReactELNode = (): Root => {
        if(ReactElementManager.REACT_ELEMENT_ROOT == undefined) {
            let node: HTMLElement | null = document.querySelector('div#' + ReactElementManager.REACT_ELEMENT_NODE_NAME);
            if(node == null) {
                node = document.createElement('div');
                node.id = ReactElementManager.REACT_ELEMENT_NODE_NAME;
                node.style.position = 'fixed';
                node.style.left = '50%';
                node.style.top = '20%';
                node.style.transform = 'translateX(-50%)';
                node.style.zIndex = '2147483647';
                document.body.appendChild(node);
                ReactElementManager.REACT_ELEMENT_ROOT = ReactDOM.createRoot(node as HTMLElement);
            }
        }
        return ReactElementManager.REACT_ELEMENT_ROOT!;
    };
}

export default ReactElementManager;
