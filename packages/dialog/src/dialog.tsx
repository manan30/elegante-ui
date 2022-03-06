import React from 'react';
import DialogPortal from './dialog-portal';

type DialogProps = {
  title?: string;
};

export const Dialog = () => {
  return (
    <DialogPortal>
      <div>abcd</div>
    </DialogPortal>
  );
};
