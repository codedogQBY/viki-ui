import React, { useRef, ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import UploadList from './UploadList';
import Dragger from './Dragger';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'fail';
export interface UploadFile extends File {
  /**
   * 文件id
   */
  uid: string;
  /**
   * 文件大小
   */
  size: number;
  /**
   * 文件类型
   */
  type: string;
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
   * 上传头部信息
   */
  headers?: { [key: string]: any };
  /**
   * 文件名
   */
  name?: string;
  /**
   * 上传携带数据
   */
  data?: { [key: string]: any };
  /**
   * 是否携带cookies上传
   */
  withCookie?: boolean;
  /**
   * 支持的文件类型
   */
  accept?: string;
  /**
   * 是否支持多选
   */
  multiple?: boolean;
  /**
   * 是否支持拖拽
   */
  drag?: boolean;
  /**
   * 上传文件之前的钩子，
   * 参数为上传的文件，
   * 若返回 false 则停止上传。
   * 支持返回一个 Promise 对象，
   * Promise 对象 reject 时则停止上传，resolve 时开始上传
   */
  beforeUpload?: (file: UploadFile) => boolean | Promise<UploadFile>;
  /**
   * 上传中的钩子
   */
  /**
   * 上传文件改变的钩子,上传中、完成、失败都会调用这个函数
   */
  onChange?: (file: UploadFile) => void;
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**
   * 上传成功后的钩子
   */
  onSuccess?: (data: any, file: UploadFile) => void;
  /**
   * 上传失败后的钩子
   */
  onError?: (err: any, file: UploadFile) => void;
  /**
   * 移出文件列表回调
   */
  onRemove?: (file: UploadFile) => boolean | Promise<UploadFile>;
  style?: React.CSSProperties;
  className?: string;
}

const Upload: React.FC<UploadProps> = props => {
  const {
    defaultFileList,
    action,
    style,
    headers,
    name,
    data,
    withCookie,
    accept,
    multiple,
    drag,
    className,
    children,
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
    const files = (e.target.files as unknown) as UploadFile[];
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };
  // 上传文件
  const uploadFiles = (files: UploadFile[]) => {
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
  const post = (file: UploadFile) => {
    let _file: UploadFile = {
      ...file,
      uid: Date.now() + 'upload-file',
      type: file.name.substr(file.name.lastIndexOf('.') + 1),
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList(pre => [_file, ...pre]);
    const formData = new FormData();
    formData.append(name || file.name, file);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
          ...(headers as object),
        },
        withCredentials: withCookie,
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
    <div
      className={classNames('viki-upload-component', className)}
      style={style ?? {}}
    >
      <div className="viki-upload-input" onClick={handleClick}>
        {drag ? (
          <Dragger
            onFile={files => {
              uploadFiles(files);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          className="viki-file-input"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          type="file"
          accept={accept!}
          multiple={multiple!}
        />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
