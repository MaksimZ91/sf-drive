import { Test, TestingModule } from "@nestjs/testing";
import { Autos } from "../entites/auto.entity";
import { AutoRepository } from "../repo/auto.repository";
import { AutoService } from "./auto.service";


class AutoRepositoryMock extends AutoRepository {
  public FindAll():any {
    return []
  } 

  public SaveAuto(auto:Autos):Promise<Autos>{
    return null
  }
}

describe('Autso service test', ()=>{
  let autoService:AutoService
  let autoRepository:AutoRepository
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ AutoService,
        {
          provide:AutoRepository,
          useClass:AutoRepositoryMock
        }      
      ],
    }).compile();

    autoService =  app.get(AutoService)
    autoRepository =  app.get(AutoRepository)
  });

  it('should return autos on call FindAll method', async () => {
    const mockAutos =   [{
      id:'1',
      mark:'mockAuto',
      model:'mpckModel',       
      year: 'MockNumber',
      number: 'MockParam',
      vin:'MockNumber',
      collor: 'MockParam',
      volume: 'MockNumber',
      power: 'MockNumber',
      transmission: 'MockParam',
      mileage: 'MockNumber',
      pts: 'MockParam',
      price: 'MockNumber',
      priceThreeDays: 'MockNumber',
      priceFiveDays: 'MockNumber',
      osago: 'MockParam',
      kasko: 'MockParam',
      privod: 'MockParam',
      motor: 'MockParam',
      body: 'MockParam',
      sts: 'MockParam',
      type: 'MockParam',
    }]
    const autoRepositorySpy =  jest.spyOn(autoRepository, 'FindAll').mockImplementation()
    const result = await autoService.getAllAutos()
    expect(result.length).toEqual(mockAutos.length)
    expect(result[0].id).toEqual(mockAutos[0].id)
  })

})