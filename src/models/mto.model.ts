'use strict';

import { BaseModel } from '../framework/base.model';


export class MtoModel extends BaseModel {
   
    
    public DriverDateOfBirth : string;
    public DriverGender: string;
    public DriverLastName: string;
    public DriverFirstName: string;
    public DriverMiddleName: string;

    constructor() {
        super();
        
    }
}