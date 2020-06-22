
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
	    const url = uri + "/uploadTxnFile"
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
