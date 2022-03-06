import React from 'react';
import ReactDOM from 'react-dom';

type DialogPortalProps = { id?: string };

const DialogPortal: React.FC<DialogPortalProps> = ({ id, children }) => {
  const dialogRootEl = React.useRef(
    id
      ? document.getElementById(id) ?? document.createElement('div')
      : document.createElement('div')
  );
  const [dynamic] = React.useState(!dialogRootEl.current.parentElement);

  React.useLayoutEffect(() => {
    if (dynamic) {
      dialogRootEl.current.id = id ?? 'dialog-root';
      document.body.appendChild(dialogRootEl.current);
    }

    () => {
      if (dynamic && dialogRootEl.current.parentElement) {
        dialogRootEl.current.parentElement.removeChild(dialogRootEl.current);
      }
    };
  }, [dynamic, id]);

  return ReactDOM.createPortal(children, dialogRootEl.current);
};

export default DialogPortal;
