import "express-async-errors"
import express from "express"
import compression from "compression"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import ejs from "ejs"
import path from "path"

import {
	logger,
	loggerHttp
} from "./logger.js"

export const app = express()

export function useHtmlEngine() {
	app.use(express.static(path.join(process.cwd(), "public")))
	app.set("views", path.join(process.cwd(), "public"))
	app.engine("html", ejs.renderFile)
	app.set("view engine", "html")
}

export function useDefaultHeaderConfig() {
	app.use((req, res, next) => {
		res.append("Access-Control-Allow-Credentials", "true")
		res.append("Acess-Control-Allow-Origin", "*")
		res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
		res.append("Access-Control-Allow-Headers", "Content-Type,X-CSR-Token,X-Requested-With")
		next()
	})
}

export function useDefaultMiddlewares() {
	app.use(compression())
	app.use(cookieParser())
	app.use(helmet.hidePoweredBy())
}

export function useJSON() {
	app.use(
		express.urlencoded({
			extended: true,
		}),
	)
	app.use(express.json())
}

export function useLogger() {
	app.use(loggerHttp({
		useLevel: "debug",
		logger: logger
	}))
}

export function listen(port, cb) {
	app.listen(port || 3000, cb ? cb(): ()=> {
		logger.info("server running:\nhttp://localhost:3000")
	})
}