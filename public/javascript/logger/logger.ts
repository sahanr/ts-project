export interface ILogger {
  logMessage: (userName: string) => void;
}

export class Logger implements ILogger{
  logMessage(userName: string): void{
    console.log(userName + ' press the button')
  }
}