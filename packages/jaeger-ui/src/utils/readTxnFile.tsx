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

export default function readTxnFile(txnFileList: { file: File }) {
	const formData = new FormData()
	formData.append('file', txnFileList.file)
	formData.append('user-file', txnFileList.file)


	const options = {
		method: 'POST',
		body: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
		}
	}
	delete options.headers['Content-Type'];
    const  uri = process.env.REACT_APP_TXN_LOADER_URL
    if (uri !== undefined) {
	    const url = uri + "/upload-txn-file"
		console.log("URL: " + url + ".")
		fetch(url, options)
			.then(response => response.text())
			.then(data => {
				if (data == "true") {
					window.location.reload(false)
				}
			})
			.catch((error) => {
				console.error("Error: ", error)
			})
	}
}
