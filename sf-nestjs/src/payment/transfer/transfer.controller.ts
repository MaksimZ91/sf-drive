import { Body, Controller, Get, HttpException, HttpService, HttpStatus, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CreateTransferDto } from 'src/dto/payment.dto';
import { StatusDto } from 'src/dto/statusDto';
import { UpdateArendaDto } from 'src/dto/updateArenda.dto';
import { JwtAuthGuard } from 'src/guard/autn.guard';
import { ArendaService } from 'src/service/arenda.service';
import { AutoService } from 'src/service/auto.service';
import { UserSevice } from 'src/service/user.service';

@Controller('transfer')
export class TransferController {
    constructor (private readonly userService:UserSevice,
                 private readonly autoService:AutoService,
                 private readonly httpService:HttpService,
                 private readonly arendaService:ArendaService
                 ){}
    
    @UseGuards(JwtAuthGuard)
    @Post()
      public async create(@Req() req: any, @Body() transferDto: CreateTransferDto){
        const user = req.user
        const toUser = await this.autoService.getOne(transferDto.toUserAuto.toString())
        const paymentGatewayRawResponse: AxiosResponse = await this.httpService
        .post(`http://localhost:4000/transfers`,{
          to:toUser.user.email,
          from:user.email,
          amount:Number(transferDto.amount),
          cardNumber:transferDto.cardNumber,
          cardName:transferDto.cardName,
          cardExpiry:transferDto.cardExpiry,
          cardCvc:transferDto.cardCvc,
          phoneNumber:user.phone
        },{
          headers:{
            Authorization:`Bearer ${process.env.BANK_SECRET_KEY}`
          }
        })
        .toPromise()
        .catch(error =>{
          console.error(error.response.data.message)
          throw new HttpException(
            error.response.data.message.join(',\n'),
            HttpStatus.BAD_GATEWAY
          )
        })
        const paymentData = paymentGatewayRawResponse?.data

        return {paymentSessionKey:paymentData?.paymentSessionKey}
       
        }  

        @UseGuards(JwtAuthGuard)
        @Post('updatearenda')
          public async updateStatusArenda(@Req() req: any, @Body() statusDto: StatusDto){
            const user = req.user
            const toUser = await this.autoService.getOne(statusDto.autoID)
            const status = 'confirm'
            const updateArenda : UpdateArendaDto ={ 
              user:user.id,
              toUser:toUser.user.id.toString(),
              status:status,
              arendaID:statusDto.arendaID
            }
            await this.arendaService.findeAndUpdateArenda(updateArenda)
            return { message : 'confirm'}

          }

        @UseGuards(JwtAuthGuard)
        @Get()
        async chekPayment(@Query('paymentSessionKey') paymentSessionKey:string){
          console.log(paymentSessionKey)
          if(!paymentSessionKey){
            throw new  HttpException(
              'paymentSessionKey not present',
              HttpStatus.NOT_ACCEPTABLE
            )
          }
          const checkPaymentStatusResponse: AxiosResponse = await this.httpService
          .get(`http://localhost:4000/transfers/check-status`,{
            headers:{
              Authorization:`Bearer ${process.env.BANK_SECRET_KEY}`
            },
            params:{
              paymentSessionKey
            } 
          })
          .toPromise()
          .catch(error =>{
            console.error(error.messge)
            throw error
          })
          const chekPaymentStatusData = checkPaymentStatusResponse.data 
           

          return { paymentStatus: chekPaymentStatusData.transferStatus }
        }

        
}
