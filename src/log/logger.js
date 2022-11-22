import {
  createLogger,
  format as _format,
  transports as _transports
} from 'winston'

const FORMAT = _format.combine(_format.colorize(), _format.simple())

const logger = createLogger({
  format: FORMAT,
  transports: [new _transports.Console()]
})

if (process.env.NODE_ENV === 'production') {
  // TODO: add aws cloudwatch for production
}

export default logger
