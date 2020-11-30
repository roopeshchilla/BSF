'use strict';

import { BaseModel } from '../framework/base.model';


export class SampleModel extends BaseModel {
   
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}