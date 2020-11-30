'use strict';

import { SampleModel } from '../models/sample.model';
import { BaseService } from '../framework/base.service';

export class SampleService extends BaseService<SampleModel> {

    /**
     * All services of BaseService are inherited
     * To build the specific services of this layer just create them here
     */

    public getSchemaName() {
        return 'sample.model';
    }

}
