import { Injectable } from "@nestjs/common";
import { OptionsAuto } from "src/entites/options.entity";
import { getMongoRepository } from "typeorm";

Injectable()
export class OptionsRepository{
    async SaveOptions(options:OptionsAuto){
        const repository = getMongoRepository(OptionsAuto)
        return await repository.save(options)
    }
}