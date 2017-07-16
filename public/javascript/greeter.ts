import { Logger, ILogger } from './logger/logger';

interface IGreeter {
  helloBtn: HTMLButtonElement;
  nameInput: HTMLInputElement;
  logger: ILogger
}

export class Greeter implements IGreeter{
  helloBtn: HTMLButtonElement;
  nameInput: HTMLInputElement;
  logger: ILogger;

  constructor() {
    this.helloBtn = document.getElementById('hello-btn') as HTMLButtonElement;
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.logger = new Logger();
  }

  greeting(): void{
    this.helloBtn.addEventListener('click', () => {
      const block = document.getElementById('greeting') as HTMLElement;
      const name = this.nameInput.value;
      const greeting = `Hello, ${name}`;

      block.innerText = greeting;
      this.logger.logMessage(name);
    });
  }
}

let hello = new Greeter();
hello.greeting();