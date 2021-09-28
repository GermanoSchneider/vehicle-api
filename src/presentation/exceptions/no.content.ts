import ErrorHandler from "../error.handler";

export default class NoContent extends ErrorHandler {
    constructor(message: string) { super(204, message) }
}