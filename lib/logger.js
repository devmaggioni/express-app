import pino from "pino"
import pinoHttp from "pino-http"

const pinoConfig = {
	level: "debug",
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
			levelFirst: true
		}
	}
}

export const logger = pino(pinoConfig)
export const loggerHttp = pinoHttp