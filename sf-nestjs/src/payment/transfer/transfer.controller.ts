import { Body, Controller, Get, HttpException, HttpService, HttpStatus, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CreateTransferDto } from 'src/dto/payment.dto';
import { JwtAuthGuard } from 'src/guard/autn.guard';
import { AutoService } from 'src/service/auto.service';
import { UserSevice } from 'src/service/user.service';

@Controller('transfer')
export class TransferController {
    constructor (private readonly userService:UserSevice,
                 private readonly autoService:AutoService,
                 private readonly httpService:HttpService,
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
        @Get()
        async chekPayment(@Query('paymentSessionKey') paymentSessionKey:string){
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

