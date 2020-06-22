
import { createAction } from 'redux-actions';

import readTxnFile from '../utils/readTxnFile';

// eslint-disable-next-line import/prefer-default-export
export const loadTxnTraces = createAction(
  '@FILE_READER_API/LOAD_TXN',
  txnFileList => readTxnFile(txnFileList),
  txnFileList => ({ txnFileList })
);
