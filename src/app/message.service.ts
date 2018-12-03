import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages : string[] = [];

  add(message:string) {
    return this.messages.push(message);
  }

  clear() {
    return this.messages = [];
  }
}
