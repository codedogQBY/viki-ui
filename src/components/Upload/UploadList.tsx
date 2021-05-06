import React, { FC, useRef } from 'react';
import { UploadFile } from './Upload';
import Icon from '../Icon/Icon';

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
}

const UploadList: FC<UploadListProps> = props => {
  const { fileList, onRemove } = props;

  return (
    <ul className="viki-upload-list">
      {fileList.map(item => {
        return (
          <li className="viki-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" />
              {item.name}
            </span>
            <span className="file-status">
              {item.status === 'uploading' && (
                <Icon icon="spinner" spin theme="primary" />
              )}
              {item.status === 'success' && (
                <Icon icon="check-circle" theme="success" />
              )}
              {item.status === 'fail' && (
                <Icon icon="times-circle" theme="error" />
              )}
            </span>
            <span className="file-actions">
              <Icon
                icon="trash-alt"
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
