import { Injectable } from '@nestjs/common';
import { unlink } from 'fs/promises';
import { AddAutoDto } from '../dto/add-auto.dto';
import { AutoRepository } from '../repo/auto.repository';
import { UserRepository } from '../repo/user.repository';
import { OptionsRepository } from '../repo/options.repository';
import { Autos } from '../entites/auto.entity';
import { AddAutoOptionsDto } from 'src/dto/addAutoOptions.dto';
import { OptionsAuto } from '../entites/options.entity';
import { AddAutoPhotoNameDto } from 'src/dto/addAutoPhotoName';
import { AutoPhotoName } from '../entites/autoPhotoName.entity';
import { PhotoRepository } from '../repo/photo.repository';
import { AddAutoDocumentPhotoNameDto } from '../dto/addAutoPhotoDocumentName.dto';
import { AutoPhotoDocumentName } from '../entites/autoPhotoDocument.entity';
import { PhotoDocumentRepository } from '../repo/photoDocument.repository';


@Injectable()
export class AutoService {
  constructor(
    private autoRepository: AutoRepository,
    private userRepository: UserRepository,
    private optionsRepository: OptionsRepository,
    private photoRepository: PhotoRepository,
    private photoDocumentRepository: PhotoDocumentRepository,
  ) {}

  async createAuto(addAuto: AddAutoDto) {
    const newAuto = new Autos(
      addAuto.mark,
      addAuto.model,
      addAuto.year,
      addAuto.number,
      addAuto.vin,
      addAuto.collor,
      addAuto.volume,
      addAuto.power,
      addAuto.transmission,
      addAuto.mileage,
      addAuto.pts,
      addAuto.price,
      addAuto.priceThreeDays,
      addAuto.priceFiveDays,
      addAuto.osago,
      addAuto.kasko,
      addAuto.privod,
      addAuto.motor,
      addAuto.body,
      addAuto.sts,
      addAuto.type,            
    );
    const currentUser = await this.userRepository.FindOneByID(addAuto.userId);
    newAuto.user = currentUser;
    await this.autoRepository.SaveAuto(newAuto);
    const currentAuto = await this.autoRepository.FindOneByNumber(
      addAuto.number,
    );
    return { newAuto: currentAuto.id };
  }

  async AddAutoOptions(AddOptions: AddAutoOptionsDto) {
    const newOptions = new OptionsAuto(
      AddOptions.isofix,
      AddOptions.srs,
      AddOptions.heater,
      AddOptions.aux,
      AddOptions.bluetooth,
      AddOptions.cruizControl,
      AddOptions.conditioning,
      AddOptions.multimedia,
      AddOptions.navigation,
      AddOptions.seatCondi,
      AddOptions.seatHeater,
      AddOptions.trunk,
      AddOptions.park,
      AddOptions.camera,
      AddOptions.babyChair,
      AddOptions.deliveryAuto,
      AddOptions.close,
      AddOptions.fullTank,
    );
    const auto = await this.autoRepository.FindOneByID(AddOptions.newAuto);
    newOptions.auto = auto;
    await this.optionsRepository.SaveOptions(newOptions);
    return { message: 'ok' };
  }

  async AddAutoPhotoName(addAutoPhotoName: AddAutoPhotoNameDto) {
    const currentAuto = await this.autoRepository.FindOneByID(
      addAutoPhotoName.newAuto,
    );
    addAutoPhotoName.photoName.forEach((photo) => {
      const newAutoPhotoName = new AutoPhotoName(photo);
      newAutoPhotoName.auto = currentAuto;
      this.photoRepository.SavePhoto(newAutoPhotoName);
    });
    return { message: 'ok' };
  }
  
  async AddAutoDocumentPhotoName(
    addAutoDocumentPhotoName: AddAutoDocumentPhotoNameDto,
  )   {
    const currentAuto = await this.autoRepository.FindOneByID(
      addAutoDocumentPhotoName.newAuto,
    );
    addAutoDocumentPhotoName.photoName.forEach((photo) => {
      const newAutoDocumentPhotoName = new AutoPhotoDocumentName(photo);
      newAutoDocumentPhotoName.auto = currentAuto;
      this.photoDocumentRepository.SavePhoto(newAutoDocumentPhotoName);
    });
    return { message: 'ok' };
  }

  async getAll(addAuto: AddAutoDto) {
    return await this.userRepository.FindAllByUserID(addAuto.userId);
  }

  async getOne(id: string) {
    return await this.autoRepository.FindOneByID(id);
  }

  async getAllAutos() {
    return await this.autoRepository.FindAll();
  }

  async getPhotoAuto(id) {
    return await this.autoRepository.FindePhotoByID(id);
  }

  async uploadFile(file) {
    return file.filename;
  }

  async deleteFile(imagename: string) {
    unlink('files/AutoPhoto/' + imagename);
    return { message: 'Delete' };
  }

  async deleteDocumentFile(imagename: string) {
    unlink('files/documentAuto/' + imagename);
    return { message: 'Delete' };
  }

 

  async filterAuto(startDate: Date, endDate: Date, type: string) {
    const date = new Date()
    const arendaStatus = 'created'
    const allAuto = await this.autoRepository.FindeAllByType(type);
    const filterAuto = await this.autoRepository.filterAuto(startDate,endDate); 
    filterAuto.forEach((e, index)=>{
      if(e.arenda[0].bookingTime < date && e.arenda[0].status == arendaStatus ){
        filterAuto.splice(index,1)
      }
    })
    for (let i = 0; i <= allAuto.length - 1; i++) {     
      filterAuto.forEach((e) => {     
        if (allAuto[i].id == e.id) {
          allAuto.splice(i, 1);
        }
      });
    }     
    return allAuto;
  }  
}
