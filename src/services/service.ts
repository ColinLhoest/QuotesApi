import { apiDataAccess } from '../dataAccess/apiDataAccess/apiDataAccess'

import { DataAccess } from '../dataAccess/dataAccess'

export class Service {
    protected dataAccess: DataAccess = apiDataAccess
}