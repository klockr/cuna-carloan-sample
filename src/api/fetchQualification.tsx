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
            reject("Bad Request")
        }        

        if (credit < 600) {            
            result.qualification = false;         
            result.message = 'CREDIT TOO LOW: '+disqualificationMessage;
            resolve(result);
        }
        else if (price > (income / 5)) {   
            result.qualification = false;         
            result.message = 'INCOME INSUFFICIENT: '+disqualificationMessage;
            resolve(result);
        }                
        else {
            result.qualification = true;
            result.message = 'Successfully qualified';
            resolve(result);
        }
    });
}