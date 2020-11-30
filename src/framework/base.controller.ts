'use strict';

import { BaseService } from './base.service';
import { BaseModel } from './base.model';
import * as Joi from 'joi';
import { GET, Abstract, Path, POST, Return, Errors, PathParam, DELETE, PUT } from 'typescript-rest';


export enum ORDER {
    ASC = 'ASC',
    DESC = 'DESC'
}


@Abstract
export abstract class BaseController<T extends BaseModel> { 

    constructor(private service: BaseService<T>) { }
    
    public abstract getValidationSchema(): Joi.Schema;
    public abstract getEndpointPermission(): any;


    protected validateEntity(entities: Array<T>): Promise<Array<T>> {
        const schema: Joi.Schema = this.getValidationSchema();        
        if(!schema) {
            return Promise.resolve(entities);
        }
        const promises = entities.map(entity => {
            return new Promise((resolve, reject) => {
                Joi.validate(entity, schema, (err: any, value: T) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(value);
                    }
                });
            });
        });
        return Promise.all(promises).then();
    }

//Generic Exception Handler
    public errHandler(serverStatusCode:string, serverStatusMessage:string)
    {
        //return serverStatusCode;
        
        let statusObject = {
            status:
            {
                serverStatusCode: serverStatusCode,
                serverStatusMessage:serverStatusMessage
            }
    
        }
        
       return statusObject;
    }

}
