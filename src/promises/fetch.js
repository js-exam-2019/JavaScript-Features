const fetch = require("node-fetch");

const url = "https://swapi.co/api/people/1/";

fetch(url)
	.then((res) => {
		return res.status >= 400
			? Promise.reject({ status: res.status, fullError: res.json() })
			: res.json();
	})
	.then((data) => console.log("succes", data))
	.catch((err) => {
		err.status
			? err.fullError.then((msg) => console.log("err msg::", msg))
			: console.log("err::", err);
	})
	.finally(() => console.log("finally:: test"));
