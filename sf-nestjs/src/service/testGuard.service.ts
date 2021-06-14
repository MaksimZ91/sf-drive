import { Injectable } from '@nestjs/common';

@Injectable()
export class TestGuardSevice {
  Test() {
    return { message: 'Тест да' };    
  } 
}
