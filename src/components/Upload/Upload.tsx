import React, { useRef, ChangeEvent, useState } from 'react';
import axios from 'axios';
import UploadList from './UploadList';
import Button from '../Button/Button';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'fail';
export interface UploadFile {
  /**
   * 文件id
   */
  uid: string;
  /**
   * 文件大小
   */
  size: number;
  /**
   * 文件名字
   */
  name: string;
  /**
   * 上传状态
   */
  status?: UploadFileStatus;
  /**上传进度
   *
   */
  percent?: number;
  /**
   * 源文件
   */
  raw?: File;
  /**
   * 成功信息
   */
  response?: any;
  /**
   * 失败信息
   */
  failure?: any;
}
export interface UploadProps {
  /**默认文件列表 */
  defaultFileList?: UploadFile[];
  /**
   * 上传的地址
   */
  action: string;
  /**
   * 上传文件之前的钩子，
   * 参数为上传的文件，
   * 若返回 false 则停止上传。
   * 支持返回一个 Promise 对象，
   * Promise 对象 reject 时则停止上传，resolve 时开始上传
   */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**
   * 上传中的钩子
   */
  /**
   * 上传文件改变的钩子,上传中、完成、失败都会调用这个函数
   */
  onChange?: (file: File) => void;
  onProgress?: (percentage: number, file: File) => void;
  /**
   * 上传成功后的钩子
   */
  onSuccess?: (data: any, file: File) => void;
  /**
   * 上传失败后的钩子
   */
  onError?: (err: any, file: File) => void;
  /**
   * 移出文件列表回调
   */
  onRemove?: (file: UploadFile) => boolean | Promise<File>;
}

const Upload: React.FC<UploadProps> = props => {
  const {
    defaultFileList,
    action,
    beforeUpload,
    onProgress,
    onError,
    onSuccess,
    onChange,
    onRemove,
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const fileInput = useRef<HTMLInputElement>(null);
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>,
  ) => {
    setFileList(preList => {
      return preList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };
  // 点击上传
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  // 更改文件
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };
  // 上传文件
  const uploadFiles = (files: FileList) => {
    // 转换为数组
    let postFiles = [...files];
    postFiles.forEach(file => {
      if (!beforeUpload) {
        // 上传文件
        post(file);
      } else {
        // 获取文件返回结果
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  // 删除某一文件
  const handleRemove = (file: UploadFile) => {
    setFileList(preFile => {
      return preFile.filter(item => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList([_file, ...fileList]);
    const formData = new FormData();
    formData.append(file.name, file);
    axios
      .post(action, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: e => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: 'uploading' });
            if (onProgress) {
              onProgress(percentage, file);
            }
          }
        },
      })
      .then(res => {
        updateFileList(_file, { status: 'success', response: res.data });
        if (onSuccess) {
          onSuccess(res, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch(err => {
        console.error(err);
        updateFileList(_file, { status: 'fail', failure: err });
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };
  return (
    <div className="viki-upload-component">
      <Button btnType="primary" onClick={handleClick}>
        上传
      </Button>
      <input
        className="viki-file-input"
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        type="file"
      />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
