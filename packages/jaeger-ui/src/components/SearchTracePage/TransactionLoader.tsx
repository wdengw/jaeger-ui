
import * as React from 'react';
import { Upload, Icon } from 'antd';

const Dragger = Upload.Dragger;

type TxnFileLoaderProps = {
  loadTxnTraces: (txnFileList: FileList) => void;
};

export default function TxnFileLoader(props: TxnFileLoaderProps) {
  return (
    <Dragger accept=".txt,.log,.csv,.tsv" customRequest={props.loadTxnTraces} multiple>
      <p className="ant-upload-drag-icon">
        <Icon type="file-add" />
      </p>
      <p className="ant-upload-text">Click or drag transaction log file to this area.</p>
      <p className="ant-upload-hint">Files containing strati V4 log format data and/or V2 transaction log format data, and with extension .txt, .log, .tsv, or .csv are supported.</p>
    </Dragger>
  );
}
