import db from './index'
import { Model, Association, DataTypes} from 'sequelize'
import { Token } from './token.model';

/**
 *  Meter Class Model
 */
export class Meter extends Model{
    public id!:string;
    public meter!:number;
    public status!: |'active' |'inactive';

    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    public readonly meter_tokens?:Token[];
    public static associations: { 
        meter_tokens: Association<Token, Meter>; 
    };
}

Meter.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        meter: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique:true
        },
        status:{
            type: DataTypes.ENUM,
            values: ['active','inactive'],
            defaultValue: 'active'
        },
    }, 
    {
        sequelize: db,
        tableName: 'meters',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
)