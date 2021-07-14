import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateTransferDto } from 'src/dto/payment.dto';
import { JwtAuthGuard } from 'src/guard/autn.guard';
import { AutoService } from 'src/service/auto.service';
import { UserSevice } from 'src/service/user.service';

@Controller('transfer')
export class TransferController {
    constructor (private readonly userService:UserSevice,
                 private readonly autoService:AutoService){}
    
    @UseGuards(JwtAuthGuard)
    @Post()
      public async create(@Req() req: any, @Body() transferDto: CreateTransferDto){
        const userID = req.user.id 
        const user = await this.userService.findByPayload(userID.toString())
        const toUser = await this.autoService.getOne(transferDto.toUserAuto.toString())
        console.log(user.email, toUser.user.email)

        return transferDto
      
       
        }  
}
