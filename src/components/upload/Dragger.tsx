import React, { FC, useState, DragEvent } from 'react';
import classNames from 'classnames';
import { UploadFile } from './Upload';

interface DraggerProps {
  onFile: (files: UploadFile[]) => void;
}

const Dragger: FC<DraggerProps> = props => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames('viki-uploader-dragger', {
    'is-dragover': dragOver,
  });
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile((e.dataTransfer.files as unknown) as UploadFile[]);
  };
  return (
    <div
      className={classes}
      onDragOver={e => {
        handleDrag(e, true);
      }}
      onDragLeave={e => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
