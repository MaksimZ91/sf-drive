import { OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WsResponse} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import * as jwt from 'jsonwebtoken'
import { ChatService } from 'src/service/chat.service';
import { Logger } from '@nestjs/common';



@WebSocketGateway(5001)
export class MessagesGateway implements OnGatewayDisconnect {
  private clientSocketMap = new Map<
  string,
  {id:number, socket:Socket}
  >()

  constructor (private readonly chatService:ChatService){

    this.chatService.attachSendler(message => {      
      this.clientSocketMap.forEach(({id, socket})=>{
        if(
          id === message.user.id  ||
          id === message.toUser.id
        ){
          socket.emit('message', message)
        }
      })
    })
  }

  private logger:Logger = new Logger('MessageGateway')

  handleDisconnect(socket:Socket){
    this.clientSocketMap.delete(socket.client.id)
    this.logger.warn(
      `Disconnected client: ${socket.client.id}`,
      'MessageGateway'
    )
  }
      
  @SubscribeMessage('authenticate')
  handleMessage(
    socket: Socket,
    payload: {accessToken:string},
    ){      
    try {      
      const { id, exp } = jwt.verify(
        payload?.accessToken,
        'AccessSecret'
      ) as {id:number; exp:number}

      if (exp * 1000 < Date.now()){
        throw new Error ('Token expired')}
      this.clientSocketMap.set(socket.client.id, {id, socket})
      this.logger.warn(
        `Connected and stored client: ${socket.client.id}`,
        'MessageGateway'
      )

    } catch (error) {
      return {
        event:'authenticated',
        data:{
          success:false,
          message:error.message
        },
      }      
    }  
    return {
      event:'authenticated',
      data:{
        success:true,
      },
    };
  }
}
