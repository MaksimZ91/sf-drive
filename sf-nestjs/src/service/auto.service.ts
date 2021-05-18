import { Injectable } from '@nestjs/common';
import { unlink } from 'fs/promises';
import { AddAutoDto } from '../dto/add-auto.dto';
import { AutoRepository } from 'src/repo/auto.repository';
import { UserRepository } from 'src/repo/user.repository';
import { OptionsRepository } from 'src/repo/options.repository';
import { Autos } from '../entites/auto.entity';
import { AddAutoOptionsDto } from 'src/dto/addAutoOptions.dto';
import { OptionsAuto } from 'src/entites/options.entity';
import { AddAutoPhotoNameDto } from 'src/dto/addAutoPhotoName';
import { AutoPhotoName } from 'src/entites/autoPhotoName.entity';
import { PhotoRepository } from 'src/repo/photo.repository';
import { AddAutoDocumentPhotoNameDto } from 'src/dto/addAutoPhotoDocumentName.dto';
import { AutoPhotoDocumentName } from 'src/entites/autoPhotoDocument.entity';
import { PhotoDocumentRepository } from 'src/repo/photoDocument.repository';
import { ArendaDtO } from 'src/dto/arenda.dto';
import { AutoDataDto } from 'src/dto/autoData.dto';
import { Arenda } from 'src/entites/arenda.entity';
import { ArendaRepository } from 'src/repo/arenda.repository';

@Injectable()
export class AutoService {
  constructor(
    private autoRepository: AutoRepository,
    private userRepository: UserRepository,
    private optionsRepository: OptionsRepository,
    private photoRepository: PhotoRepository,
    private photoDocumentRepository: PhotoDocumentRepository,
    private arendaRepository: ArendaRepository,
  ) {}

  async createAuto(addAuto: AddAutoDto) {
    const newAuto = new Autos();
    const currentUser = await this.userRepository.FindOneByID(addAuto.userId);
    newAuto.mark = addAuto.mark;
    newAuto.model = addAuto.model;
    newAuto.number = addAuto.number;
    newAuto.year = addAuto.year;
    newAuto.vin = addAuto.vin;
    newAuto.collor = addAuto.collor;
    newAuto.volume = addAuto.volume;
    newAuto.power = addAuto.power;
    newAuto.transmission = addAuto.transmission;
    newAuto.mileage = addAuto.mileage;
    newAuto.pts = addAuto.pts;
    newAuto.price = addAuto.price;
    newAuto.priceThreeDays = addAuto.priceThreeDays;
    newAuto.priceFiveDays = addAuto.priceFiveDays;
    newAuto.osago = addAuto.osago;
    newAuto.kasko = addAuto.kasko;
    newAuto.privod = addAuto.privod;
    newAuto.motor = addAuto.motor;
    newAuto.body = addAuto.body;
    newAuto.sts = addAuto.sts;
    newAuto.user = currentUser;
    await this.autoRepository.SaveAuto(newAuto);
    currentUser.autos=[newAuto]
    await this.userRepository.SaveUser(currentUser)
    const currentAuto = await this.autoRepository.FindOneByNumber(
      addAuto.number,
    );
    return { newAuto: currentAuto.id };
  }

  async AddAutoOptions(AddOptions: AddAutoOptionsDto) {
    const newOptions = new OptionsAuto();
    const auto = await this.autoRepository.FindOneByID(AddOptions.newAuto);
    newOptions.isofix = AddOptions.isofix;
    newOptions.srs = AddOptions.srs;
    newOptions.heater = AddOptions.heater;
    newOptions.aux = AddOptions.aux;
    newOptions.bluetooth = AddOptions.bluetooth;
    newOptions.cruizControl = AddOptions.cruizControl;
    newOptions.conditioning = AddOptions.conditioning;
    newOptions.multimedia = AddOptions.multimedia;
    newOptions.navigation = AddOptions.navigation;
    newOptions.seatCondi = AddOptions.seatCondi;
    newOptions.seatHeater = AddOptions.seatHeater;
    newOptions.trunk = AddOptions.trunk;
    newOptions.park = AddOptions.park;
    newOptions.camera = AddOptions.camera;
    newOptions.babyChair = AddOptions.babyChair;
    newOptions.deliveryAuto = AddOptions.deliveryAuto;
    newOptions.close = AddOptions.close;
    newOptions.fullTank = AddOptions.fullTank;
    newOptions.auto = auto;
    await this.optionsRepository.SaveOptions(newOptions);
    return { message: 'ok' };
  }

  async AddAutoPhotoName(addAutoPhotoName: AddAutoPhotoNameDto) {
      const currentAuto = await this.autoRepository.FindOneByID(
      addAutoPhotoName.newAuto,
    );
    addAutoPhotoName.photoName.forEach(photo=> {
      const newAutoPhotoName = new AutoPhotoName();
      newAutoPhotoName.photoName = photo
      newAutoPhotoName.auto = currentAuto;
      this.photoRepository.SavePhoto(newAutoPhotoName);      
    })
    return { message: 'ok' };
  }

  async AddAutoDocumentPhotoName(
    addAutoDocumentPhotoName: AddAutoDocumentPhotoNameDto,
  ) {
    const newAutoDocumentPhotoName = new AutoPhotoDocumentName();
    const currentAuto = await this.autoRepository.FindOneByID(
      addAutoDocumentPhotoName.newAuto,
    );
    newAutoDocumentPhotoName.photoName = addAutoDocumentPhotoName.photoName;
    newAutoDocumentPhotoName.auto = currentAuto;
    await this.photoDocumentRepository.SavePhoto(newAutoDocumentPhotoName);
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
    return  await this.autoRepository.FindePhotoByID(id);

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

  async createArenda(addArenda: ArendaDtO) {
    const arenda = new Arenda();
    const auto = await this.autoRepository.FindOneByID(addArenda.newAuto);
    arenda.startDay = addArenda.startDay;
    arenda.endDay = addArenda.endDay;
    arenda.auto = auto;
    await this.arendaRepository.SaveArenda(arenda);
  }

  async filterAuto(AutoData: AutoDataDto) {
    const { startDate, endDate } = AutoData;
    return await this.arendaRepository.filterAuto(startDate, endDate);
  }
}
