import {Response} from 'express'

export interface ResponseParams{
    res: Response,
    status: number,
    success:boolean,
    [x:string]: number | string | object | boolean,
}

const jsonResponse = ({res, status,success,...data}:ResponseParams):Response=>{
    return res.status(status).json({
        status,
        success,
        ...data,
    })
};

export default jsonResponse;