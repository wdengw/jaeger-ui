// Copyright (c) 2019 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { Upload, Icon } from 'antd';

const Dragger = Upload.Dragger;

type TxnFileLoaderProps = {
  loadTxnTraces: (txnFileList: FileList) => void;
};

export default function TxnFileLoader(props: TxnFileLoaderProps) {
  return (
    <Dragger accept=".txt" customRequest={props.loadTxnTraces} multiple>
      <p className="ant-upload-drag-icon">
        <Icon type="file-add" />
      </p>
      <p className="ant-upload-text">Click or drag transaction log file to this area.</p>
      <p className="ant-upload-hint">File containing strati V4 log format data and V2 transaction log format data is supported.</p>
    </Dragger>
  );
}
