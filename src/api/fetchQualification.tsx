import {ILandingValues, IQualificationResult} from '../types/formTypes';
    
const disqualificationMessage = "Lorum Ipsem Disqualification Message";

export const currencyToNumber = (value: string) => {
    return Number(value.replace(/[^0-9.-]+/g,""));
}

export const fetchQualification = async (values: ILandingValues) => {    
    const result: IQualificationResult = {
        qualification: false,
        message: '',
    }

    const income = currencyToNumber(values.income);
    const price = currencyToNumber(values.price);
    const credit = parseInt(values.credit);    
    return new Promise<IQualificationResult>((resolve, reject) => {        
        
        if (price > 1000000) {
            console.log('price too high')
            reject("Bad Request")
        }        
        if (price > (income / 5) || credit < 600) {
            console.log("income/credit insufficient")
            result.message = disqualificationMessage;
            resolve(result);
        }        
        console.log('qualified!')
        result.qualification = true;
        result.message = 'Successfully qualified';
        resolve(result);
    });
}