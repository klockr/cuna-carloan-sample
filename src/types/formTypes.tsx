import { InjectedFormProps } from 'redux-form';
export interface ILandingValues {
    price: string;
    make: string;
    income: string;
    model: string;
    credit: string;
}

export interface ILandingProps {
    handleSubmit: (values: ILandingValues) => void;
    qualified: boolean;
}
  
export type LandingFormProps = ILandingProps & InjectedFormProps<ILandingValues>;

export interface INewAccountValues {
    username: string;
    password: string;  
    passwordVerify: string;
}

export interface INewAccountProps {
    handleSubmit: (values: INewAccountValues) => void;
    accountCreated: boolean;
}

export type NewAccountFormProps = INewAccountProps & InjectedFormProps<INewAccountValues>;

export interface IQualificationResult {
    qualification: boolean;
    message: string;
}

export interface IQualificationProps {    
    message: boolean;
}
