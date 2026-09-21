class apierror extends Error {
  constructor(
    statuscode,
    message = "something went wrong",
    stack = "",
    errors = [],
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.error = false;
    this.message = message;
    tjis.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { apierror };
