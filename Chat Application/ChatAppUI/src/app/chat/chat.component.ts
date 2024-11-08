import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MaterialModule, MatListModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  chatService = inject(ChatService);
  inputMessage = '';
  messages: any[] = [];
  router = inject(Router);
  loggedInUserName = sessionStorage.getItem('user');
  roomName = sessionStorage.getItem('room');
  hasLoaded = false; // Check if already loaded

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;

  ngOnInit(): void {
    // Prevent reload
    window.addEventListener('beforeunload', this.preventReload);

    if (!this.hasLoaded) {
      // First-time load actions
      this.chatService.messages$.subscribe(res => {
        this.messages = res;
      });

      this.chatService.connectedUsers$.subscribe(res => {
        console.log(res);
      });

      this.hasLoaded = true;
    }
  }

  ngOnDestroy(): void {
    // Clean up the event listener
    window.removeEventListener('beforeunload', this.preventReload);
  }

  ngAfterViewChecked(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  sendMessage() {
    this.chatService.sendMessage(this.inputMessage)
      .then(() => {
        this.inputMessage = '';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  leaveChat() {
    this.chatService.leaveChat()
      .then(() => {
        this.router.navigate(['join-room']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private preventReload(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = ''; 
  }
}





