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
}

export interface INewAccountProps {
    handleSubmit: (values: INewAccountValues) => void;
}

export type NewAccountFormProps = INewAccountProps & InjectedFormProps<INewAccountValues>;