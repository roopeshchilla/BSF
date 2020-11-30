'use strict';

import { BaseModel } from '../framework/base.model';


export class VinValidationModel extends BaseModel {
   
    public vehicleMake: string;

    constructor(vehicleMake: string) {
        super();
        this.vehicleMake = vehicleMake;
    }
}