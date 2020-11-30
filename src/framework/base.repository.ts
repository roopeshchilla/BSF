'use strict';

import {BaseModel} from './base.model';
import {Abstract} from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import { ORDER } from './base.controller';
import { MongoConnector } from '../database/mongo-connector';

@Abstract
export abstract class BaseRepository<T extends BaseModel> {

    @Inject
    protected dbMongo: MongoConnector;

    // @Inject
    // protected dbMySql: MySqlConnector;

    // @Inject
    // protected dbPostgres: PostgresConnector;
    
    public getModel(schema: string): any {
        return Object.values(require(`../models/${schema}`))[0];
    }

    public async list(schema: string, recordsByPage: number, page: number, sort: ORDER): Promise<Array<any>> { 
        return this.dbMongo.connection.getRepository(this.getModel(schema)).find({
            order: { name: sort },
            skip: recordsByPage * (page-1),
            take: recordsByPage,
        });
    }

    public get(schema: string, _id: string): Promise<any> {
        return this.dbMongo.connection.getRepository(this.getModel(schema)).findOne(_id);
    }

    /* 
     * Return of insert method for mysql database is incorrect
     * see: https://github.com/typeorm/typeorm/issues/4922
     */
    public create(schema: string, entities: Array<T>): Promise<InsertResult> {
        return this.dbMongo.connection.getRepository(this.getModel(schema)).insert(entities);
    }
 
    public delete(schema: string, _ids: Array<any>): Promise<DeleteResult> {
        return this.dbMongo.connection.getRepository(this.getModel(schema)).delete(_ids);
    }

    // TODO: Increment array ids and array entities
    public update(schema: string, _id: string, entity: T): Promise<UpdateResult> {
        return this.dbMongo.connection.getRepository(this.getModel(schema)).update(_id, entity);
    }

}
