import React, { FC, useRef } from 'react';
import { UploadFile } from './Upload';
import Icon, { ThemeProps } from '../icon/Icon';
import { IconName } from '../icon/icons/allIcons';
import Progress from '../progress/Progress';

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
}

const UploadList: FC<UploadListProps> = props => {
  const { fileList, onRemove } = props;
  const statusMap = new Map<string, { theme: ThemeProps; icon: IconName }>([
    ['ready', { theme: 'warning', icon: 'paper-plane' }],
    ['uploading', { theme: 'primary', icon: 'spinner' }],
    ['success', { theme: 'success', icon: 'check-circle' }],
    ['fail', { theme: 'error', icon: 'times-circle' }],
  ]);

  return (
    <ul className="viki-upload-list">
      {fileList.map(item => {
        return (
          <li className="viki-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="paperclip" />
              <div className="file-text">{item.name}</div>
            </span>
            <span className="file-status">
              <Icon
                icon={statusMap.get(item.status!)!['icon'] as IconName}
                spin={item.status === 'uploading'}
                theme={statusMap.get(item.status!)!['theme'] as ThemeProps}
              />
            </span>
            <span className="file-actions">
              <Icon
                icon="trash-alt"
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {item.status === 'uploading' && (
              <Progress
                strokeHidth={4}
                percent={item.percent || 0}
                theme={statusMap.get(item.status!)!['theme'] as ThemeProps}
                textOutside
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
