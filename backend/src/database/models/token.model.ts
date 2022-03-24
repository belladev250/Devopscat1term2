import  db  from './index'
import { Model, DataTypes, Association } from 'sequelize' 
import { Meter } from './meter.model';


/**
 * Token Class Model
 */
export class Token extends Model{
    public id!: string;
    public token!: string;
    public meter_id!:number;
    public amount!:number;
    public status!:| 'active' | 'expired';
    public expired_at!:Date;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    public readonly meter?:Meter;
    public static associations: { 
        meter: Association<Meter, Token>; 
    };


}

Token.init(
    {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue:DataTypes.UUIDV4
        },
        token: {
          type:DataTypes.NUMBER,
          unique:true,
          defaultValue:Math.floor(1000000 + Math.random() * 9000000),
        },
        meter_id: {
          type:DataTypes.STRING,
          allowNull:false
        },
        amount: {
          type:DataTypes.NUMBER,
          allowNull:false,
        },
        status: {
            type:DataTypes.STRING,
            defaultValue:'active'
        },
        expired_at: {
          type: DataTypes.DATE,
          allowNull:false
        },
      }, 
        {

            sequelize:db,
            tableName: 'tokens',
            underscored : true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
    }
);
