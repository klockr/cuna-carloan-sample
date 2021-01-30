import {fetchQualification} from '../api/fetchQualification';
import {ILandingValues} from '../types/formTypes';

const values: ILandingValues = {
    price: '10000',
    make: 'Subaru',
    model: 'Forrester',
    income: '50000',
    credit: '750',
}

test('QualificationAPI valid input is qualified', async () => {
    let result = await fetchQualification(values);          
    expect(result.qualification).toBe(true);
});

test('QualificationAPI insufficient credit is disqualified', async () => {
    values.credit = '350';    
    let result = await fetchQualification(values);            
    expect(result.qualification).toBe(false);
})

test('QualificationAPI insufficient income for price is disqualified', async () => {
    values.income = '1000'
    let result = await fetchQualification(values);
    expect(result.qualification).toBe(false);
})

test('QualificationAPI price is too high throws bad request', async () => {
    values.price = '9999999';
    try {
        let result = await fetchQualification(values) 
        expect(null).toBeTruthy();       
    } catch (e) {        
        expect(e).toBe('Bad Request');
    }
});
