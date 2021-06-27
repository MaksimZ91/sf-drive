import { Controller, Get, Post, Req, UseGuards, Body } from '@nestjs/common';
import { RegistrUserDto } from 'src/dto/registration-user.dto';
import { ChatService } from '../service/chat.service';
import { JwtAuthGuard } from '../guard/autn.guard';
import { CreateMessageDto } from 'src/dto/createMessge.dto';
import { Messages } from 'src/entites/messages.entity';

@Controller('chat')
export class ChatController {
  constructor (private readonly chatService:ChatService){}

 /* @Get()
  async GetAllMessages(@Req() req:any){
    const user = req.user

    return this.chatService.findeAll(user.id)    
  }*/

  @UseGuards(JwtAuthGuard)
  @Post('created')
  public async create(
    @Req() req: any,
    @Body() createMessageDto: CreateMessageDto,
  )  {
    const user = req.user.id 
   return await this.chatService.create(user, createMessageDto)
  }

}
