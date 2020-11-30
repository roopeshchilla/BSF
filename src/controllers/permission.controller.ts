'use strict';

import { Path } from 'typescript-rest';
import * as Joi from 'joi';
import { BaseController } from '../framework/base.controller';
import { SampleModel } from '../models/sample.model';

/**
 * @author lucasalvesteixeira
 * This class was created to increase test coverage
 */
@Path('/permission')
export class PermissionController extends BaseController<SampleModel> {

    public getValidationSchema(): Joi.Schema {
        return null;
    }

    public getEndpointPermission(): any {
        return {
            'list': false,
            'get': false,
            'create': false,
            'delete': false,
            'update': false
        };
    }

}
