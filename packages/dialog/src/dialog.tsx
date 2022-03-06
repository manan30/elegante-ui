import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import DialogPortal from './dialog-portal';

type DialogProps = {
  show: boolean;
  title?: string;
};

export const Dialog: React.FC<DialogProps> = ({ show, title, children }) => {
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    setEnableTransition(show);
  }, [show]);

  return (
    <DialogPortal>
      {show ? (
        <Transition
          appear
          show={enableTransition}
          as={Fragment}
          // afterLeave={() => {}}
        >
          <div
            className='fixed inset-0 z-[100] overflow-hidden'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
          >
            <div className='min-h-screen px-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-slate-600/20' />
              </Transition.Child>

              <span
                className='inline-block h-screen align-middle'
                aria-hidden='true'
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-[400ms]'
                enterFrom='opacity-0 scale-50'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-50'
              >
                <div className='inline-block w-full h-full max-w-md px-6 py-4 my-8 overflow-hidden text-left align-middle transition-all transform rounded-md shadow-md bg-slate-100 max-h-[70vh]'>
                  {title ? (
                    <h3 className='text-base font-medium leading-6 text-orange-600 md:text-lg'>
                      {title}
                    </h3>
                  ) : null}
                  <div className='h-full overflow-hidden overflow-y-auto max-h-modal-description'>
                    {children}
                  </div>
                  {/* <div className='flex items-center justify-end mt-4 space-x-4'>
                    {cancelAction ? (
                      <Button
                        variant='default'
                        className='min-w-[1.5rem] text-slate-600 hover:text-slate-700'
                        onClickHandler={() => setEnableTransition(false)}
                      >
                        {cancelAction.text}
                      </Button>
                    ) : null}
                    {confirmAction ? (
                      <Button
                        variant='primary'
                        className='min-w-[1.5rem]'
                        onClickHandler={() => setEnableTransition(false)}
                      >
                        {confirmAction.text}
                      </Button>
                    ) : null}
                  </div> */}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Transition>
      ) : null}
    </DialogPortal>
  );
};
