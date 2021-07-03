import { Controller, Get, Post, Req, UseGuards, Body, Query } from '@nestjs/common';
import { ChatService } from '../service/chat.service';
import { JwtAuthGuard } from '../guard/autn.guard';
import { CreateMessageDto } from 'src/dto/createMessge.dto';
import { UpdateArendaDto } from 'src/dto/updateArenda.dto';
import { ArendaService } from 'src/service/arenda.service';



@Controller('chat')
export class ChatController {
  constructor (private readonly chatService:ChatService,
              private readonly arendaService:ArendaService ){}

  @UseGuards(JwtAuthGuard)
  @Post('created')
  public async create(@Req() req: any, @Body() createMessageDto: CreateMessageDto){

  const user = req.user.id 
  const message = await this.chatService.create(user, createMessageDto)
  this.chatService.push(message)
   //return await this.chatService.create(user, createMessageDto)
   return message 
  }

  @Post('findeandupdate')
  async findeAndUpdateArenda(@Body() updateArenda:UpdateArendaDto){ 
    const message = await this.arendaService.findeAndUpdateArenda(updateArenda)
    this.chatService.push(message)
    return message
  }


  @UseGuards(JwtAuthGuard)
  @Get('findeChat')
  public async findeAllChatUsers(
    @Req() req:any
  ){
    const user = req.user.id
    return this.chatService.findeAllUserChat(user)
  }


  @UseGuards(JwtAuthGuard)
  @Get('findeMessage')
  public async findeAllMessges(
    @Req() req:any,
    @Query('selectedUser')
    selectUser:string
     ){
       const user = req.user.id
       return this.chatService.findeAll(user,selectUser)
  }
}
