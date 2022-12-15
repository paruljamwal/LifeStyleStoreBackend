const app = require("./index");

//importing connect
const connect = require("./configs/db");

app.listen(8080, async function () {
	try {
		await connect();
		console.log("Listening to Port 8080");
	} catch (e) {
		console.error({ error: e.message });
	}
});
