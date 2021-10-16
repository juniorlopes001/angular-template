export class ApplicationError extends Error {
    originalError: Error;
    constructor(message?: string, originalError?: Error) {
        super(message);
        // this.name = ApplicationError.name;
        this.originalError = originalError;
        Object.setPrototypeOf(this, ApplicationError.prototype);//this line is required for errors
    }
}