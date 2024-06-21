import express from 'express';
import fs from "fs";
const app = express()
const port = 5173

app.get("*", (req, res, next) => {
	if(req.path.startsWith("/assets")) return next();
	res.send(fs.readFileSync("dist/index.html").toString())
})
app.use(express.static("dist"))

app.listen(port, () => {
	console.log(`Example app listening on port 5173`)
})
