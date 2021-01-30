import {validate as newAccountValidate} from '../forms/NewAccountForm';
import {INewAccountValues} from '../types/formTypes';

const values: INewAccountValues = {
    username: '',
    password: '',
    passwordVerify: '',
}

let errors: INewAccountValues;

test('NewAccountForm required fields are required', () => {
    errors = newAccountValidate(values);
    expect(errors.username).toBe('Required');
    expect(errors.password).toBe('Required');
    expect(errors.passwordVerify).toBe('Required');
});

test('NewAccountForm username cannot be non-email', () => {
    values.username='not-an-email';
    errors = newAccountValidate(values);
    expect(errors.username).toBe('Username must be a valid email address');
});

test('NewAccountForm username valid email is OK', () => {
    values.username='some-email@mailnator.com';
    errors = newAccountValidate(values);
    expect(errors.username).toBe('');
});

test('NewAccountForm password must be at least 8 characters long', () => {
    values.password='123';
    errors = newAccountValidate(values);
    expect(errors.password).toBe('Password requires length greater than 8 and one special character or number')
});

test('NewAccountForm password must contain a number or spec char', () => {
    values.password='abcdabcd';
    errors = newAccountValidate(values);
    expect(errors.password).toBe('Password requires length greater than 8 and one special character or number')
});

test('NewAccountForm password length 8 with number is OK', () => {
    values.password='abcdabcd1';
    errors = newAccountValidate(values);
    expect(errors.password).toBe('');
});

test('NewAccountForm password length 8 with spec char is OK', () => {
    values.password='abcdabcd!';
    errors = newAccountValidate(values);
    expect(errors.password).toBe('');
});

test('NewAccountForm password and passwordValidate mismatch is invalid', () => {
    values.password='abcdabcd!';
    values.passwordVerify='dcbadcba1';
    errors = newAccountValidate(values);
    expect(errors.passwordVerify).toBe('Passwords do not match');
});

test('NewAccountForm matching password and passwordValidate is OK', () => {
    values.password='abcdabcd!';
    values.passwordVerify='abcdabcd!';
    errors = newAccountValidate(values);
    expect(errors.passwordVerify).toBe('');
});