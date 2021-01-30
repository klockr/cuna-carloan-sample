import {validate as landingValidate} from '../forms/LandingForm';
import { ILandingValues } from '../types/formTypes';

const values: ILandingValues = {
    price: '',
    make: '',
    model: '',
    income: '',
    credit: '',
}
let errors: ILandingValues;

test('LandingForm required fields are required', () => {
    errors = landingValidate(values);    
    expect(errors.price).toBe('Required');
    expect(errors.make).toBe('Required');
    expect(errors.model).toBe('Required');
    expect(errors.income).toBe('Required');
    expect(errors.credit).toBe('Required');
});

test('LandingForm price cannot be non-numeric', () => {
    values.price='not a number';
    errors = landingValidate(values);    
    expect(errors.price).toBe('Price must be a number');    
});

test('LandingForm price cannot be invalid currency', () => {
    values.price='123.123';
    errors = landingValidate(values);
    expect(errors.price).toBe('Price must be a valid currency value');
});

test('LandingForm price valid currency is OK', () => {
    values.price='100.23';
    errors = landingValidate(values);
    expect(errors.price).toBe('');
});

test('LandingForm income cannot be non-numeric', () => {
    values.income='not a number';
    errors = landingValidate(values);
    expect(errors.income).toBe('Income must be a number');
});

test('LandingForm income cannot be invalid currency', () => {
    values.income='.123';
    errors = landingValidate(values);
    expect(errors.income).toBe('Income must be a valid currency value');
});

test('LandingForm income valid currency is OK', () => {
    values.income='10000.00';
    errors = landingValidate(values);
    expect(errors.income).toBe('');
});

//TODO: Fix this bug
test('LandingForm credit cannot be non-integer', () => {
    values.credit='123.12';
    errors = landingValidate(values);
    expect(errors.credit).toBe('Credit must be a valid integer');
});

test('LandingForm credit cannot be below min (350)', () => {
    values.credit='349';
    errors = landingValidate(values);
    expect(errors.credit).toBe('Credit must be a valid credit score (350-800)');
});

test('LandingForm credit cannot be above max (800)', () => {
    values.credit='801';
    errors = landingValidate(values);
    expect(errors.credit).toBe('Credit must be a valid credit score (350-800)');
});
