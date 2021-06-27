import { Module } from '@nestjs/common';
import { ChatController } from '../controller/chat.controller';
import { ChatRepository } from '../repo/chat.repositoy';
import { ChatService } from '../service/chat.service';
import { MessagesGateway } from '../chat/messages.gateway';
import { UserRepository } from 'src/repo/user.repository';

@Module({
  controllers: [ChatController],
  providers: [ChatService, MessagesGateway,ChatRepository, UserRepository]
})
export class ChatModule {}
