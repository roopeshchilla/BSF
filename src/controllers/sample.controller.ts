'use strict';

import { Inject } from 'typescript-ioc';
import { Path } from 'typescript-rest';
import * as Joi from 'joi';
import { BaseController } from '../framework/base.controller';
import { SampleService } from '../services/sample.service';
import { SampleModel } from '../models/sample.model';

@Path('/sample-controller')
export class SampleController extends BaseController<SampleModel> {

    /**
     * All constrollers of BaseController are inherited
     * To build the specific controller of this layer just create them here
     */

    constructor(@Inject protected sampleService: SampleService) {
        super(sampleService);
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

}
