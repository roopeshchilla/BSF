'use strict';

import { Inject } from 'typescript-ioc';
import { Path, GET } from 'typescript-rest';
import * as Joi from 'joi';
import { BaseController } from '../framework/base.controller';
import { VinValidationService } from '../services/vinvalidation.service';
import { VinValidationModel } from '../models/vinvalidation.model';

@Path('/goremutual/ca/vinvalidation')
export class VinValidationController extends BaseController<VinValidationModel> {

    /**
     * All constrollers of BaseController are inherited
     * To build the specific controller of this layer just create them here
     */

    constructor(@Inject protected VinValidationService: VinValidationService) {
        super(VinValidationService);
        
    }

    public getValidationSchema(): Joi.Schema {
        return Joi.object().keys({
            name: Joi.string().required()
        });
    }

    public getEndpointPermission(): any {
        return {
            'list': true,
            'get': true,
            'create': true,
            'delete': true,
            'update': true
        };
    }

    @GET
    //public getVinData(): Promise<string> {
        public getVinData() {
        var vindatapromise = new VinValidationService().getVinData();
        
        vindatapromise.then((res) => {
            console.log(res, 'Vin Validation called successfully:'); 
            return new Promise((resolve, reject) => {
                resolve (res);
               
            });
        });
        vindatapromise.catch((err) => {
            console.log('Vin Validation error:'); 
            this.errHandler('401','error');
            
        });
        
       /*
        return new Promise((resolve, reject) => {
            resolve (new VinValidationService().getVinData());
           
        });
        */
        
        
        
        
        


        

    }


}
