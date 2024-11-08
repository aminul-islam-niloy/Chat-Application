import { Routes } from '@angular/router';
import { JoinRoomComponent } from './join-room/join-room.component';

import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    {path: '', redirectTo: 'join-room', pathMatch: 'full'},
  {path: 'join-room', component: JoinRoomComponent},
  {path: 'chat', component: ChatComponent}
];
