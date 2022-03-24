import moment from "moment";

export const calculateExpirationDate= (amount:number)=>{
    if(amount % 100 == 0){
        const days = amount/100;
        return moment().subtract(days, 'days').toDate()
    }
    else{
        return false
    }
}