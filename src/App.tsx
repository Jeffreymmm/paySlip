import React, { useState, useRef, useEffect, Key } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import './App.css';
import window from '../preload.js';


const App = () => {
  const [fileList, setFileList] = useState<any>([]);

  const handleChange = (info: any) => {
    console.log(info);

    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

  };


  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,
  };

  return (
    <div style={{ display: 'flex', justifyContent: `center`, alignItems: `center`, width: '100vw', height: '100vh' }}>
      <Button onClick={() => {
        window.ipcRenderer.send('select-file-dialog')
      }} icon={<UploadOutlined />}>Upload</Button>
    </div>
  );
}
export default App;

