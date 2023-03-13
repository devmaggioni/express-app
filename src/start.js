import qe from "../lib/index.js"
const { app, listen } = qe

qe.useHtmlEngine()
qe.useDefaultHeaderConfig()
qe.useDefaultMiddlewares()
qe.useJSON()
qe.useLogger()

app.get("/", (req, res) => {
	res.status(200).send("Hello")
})

listen()