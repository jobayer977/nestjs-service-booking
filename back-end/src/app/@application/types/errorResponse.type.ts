export class AppErrorResponse {
  public status: string;
  public errorName: string;
  public errorCode: number;
  public message: string;
  public developerMessage: string;

  constructor(
    errorName: string,
    errorCode: number,
    message: string,
    developerMessage?: string,
  ) {
    this.status = 'ERROR';
    this.errorName = errorName;
    this.errorCode = errorCode;
    this.message = message;
    this.developerMessage = developerMessage || undefined;
  }
  public setDeveloperMessage(msg: string) {
    this.developerMessage = msg;
  }
}
