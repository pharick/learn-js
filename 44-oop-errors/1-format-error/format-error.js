function FormatError(message) {
  SyntaxError.apply(this, arguments);
  this.name="FormatError";
  this.message = message;

  if (SyntaxError.captureStackTrace) {
    SyntaxError.captureStackTrace(this, FormatError);
  } else {
    this.stack = (new SyntaxError()).stack;
  }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // стек на момент генерации ошибки

console.log( err instanceof SyntaxError ); // true
