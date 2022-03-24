import { Meter } from "./meter.model";
import { Token } from "./token.model";


Meter.hasMany(Token,{
    foreignKey:'meter_id',
    as:'meter_tokens'
})

Token.belongsTo(Meter,{
    as:'meter',
    foreignKey:'meter_id'
})