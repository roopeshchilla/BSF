'use strict';


import { MtoModel } from '../models/mto.model';
import { BaseService } from '../framework/base.service';

export class MtoService extends BaseService<MtoModel> {

    /**
     * All services of BaseService are inherited
     * To build the specific services of this layer just create them here
     */

    public getSchemaName() {
        return 'sample.model';
    }

    public getMtoData(){
       return  '{"DriverFirstName":"Diego","DriverLastName":"Maradona"}';

    }

}
