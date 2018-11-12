// ref: https://medium.com/@jesterxl/easier-error-handling-using-async-await-b9ab0cb938e
export default promise => promise
	.then(data => ({ ok: true, data }))
	.catch(error => Promise.resolve({ ok: false, error }));
