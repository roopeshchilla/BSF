'use strict';

import { Inject } from 'typescript-ioc';
import { Path, GET } from 'typescript-rest';
import * as Joi from 'joi';
import { BaseController } from '../framework/base.controller';
import { MtoService } from '../services/mto.service';
import { MtoModel } from '../models/mto.model';

@Path('/goremutual/ca/mto')
export class MtoController extends BaseController<MtoModel> {

    /**
     * All constrollers of BaseController are inherited
     * To build the specific controller of this layer just create them here
     */

    constructor(@Inject protected MtoService: MtoService) {
        super(MtoService);
        
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
    public getMtoData(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve (new MtoService().getMtoData());
           
        });
    }


}
