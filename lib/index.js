
import {
	app,
	useHtmlEngine,
	useDefaultHeaderConfig,
	useDefaultMiddlewares,
	useLogger,
	useJSON,
	listen
} from "./server.js"

import { logger } from "./logger.js"

const qe = {
	app,
	useHtmlEngine,
	useDefaultHeaderConfig,
	useDefaultMiddlewares,
	useLogger,
	listen,
	useJSON,
	logger
}

export default qe