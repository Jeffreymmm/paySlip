import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './App.css';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: any) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default () => (
  <div style={{ display: 'flex', justifyContent:`center`, alignItems:`center`, width:'100vw',height:'100vh' }}>
    <Dragger style={{ width: '800px', height:`400px`}} {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或上传拖拽文件</p>
      <p className="ant-upload-hint">
        支持单个或批量上传，支持excel文件类型
      </p>
    </Dragger>
  </div>
);