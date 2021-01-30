import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {renderField} from './common';
import {ILandingValues, LandingFormProps} from '../types/formTypes';

export const validate = (values: ILandingValues) => {
    const currencyRegex =  /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    const integerRegex = /^-?\d+$/;
    const errors: ILandingValues = {
        price: '',
        make: '',
        income: '',
        model: '',
        credit: '',
    }

    if (!values.price) {
        errors.price = 'Required'
    }     
    else if (isNaN(parseFloat(values.price))) {        
        errors.price = 'Price must be a number'
    }    
    else if (!currencyRegex.test(values.price)) {
        errors.price = 'Price must be a valid currency value'
    }
  
    if (!values.make) {
        errors.make = 'Required'
    }
  
    if (!values.model) {
        errors.model = 'Required'
    }
  
    if (!values.income) {
        errors.income = 'Required'
    }     
    else if (isNaN(parseFloat(values.income))) {        
        errors.income = 'Income must be a number'
    }    
    else if (!currencyRegex.test(values.income)) {
        errors.income = 'Income must be a valid currency value'
    }
  
    if (!values.credit) {
        errors.credit = 'Required'
    }
    else if (!integerRegex.test(values.credit)) {
        errors.credit = 'Credit must be a valid integer'
    }
    else if (parseInt(values.credit) < 350 || parseInt(values.credit) > 800) {
        errors.credit = 'Credit must be a valid credit score (350-800)'
    }

    return errors;
}
let LandingForm: React.FunctionComponent<LandingFormProps> = props => {
    const {handleSubmit, qualified} = props;

    if (qualified === true) {
        return(<Redirect to="/new-account"/>) 
    }
    if (qualified === false) {
        return(<Redirect to="/disqualification"/>) 
    }

    return (
        <form onSubmit={handleSubmit} className="landing-form">
            <div className="form-group">
                <Field name="price" component={renderField} label="Purchase Price" />
            </div>
            <div className="form-group">
                <Field name="make" component={renderField} label="Auto Make" />
            </div>
            <div className="form-group">
                <Field name="model" component={renderField} label="Auto Model" />
            </div>
            <div className="form-group">
                <Field name="income" component={renderField} label="Estimated Yearly Income" />
            </div>
            <div className="form-group">
                <Field name="credit" component={renderField} label="Estimated Credit Score" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

//TODO: Fix the type issues here
//@ts-ignore
LandingForm = reduxForm<ILandingForm>({
  form: 'landing',
  validate,
  //@ts-ignore
})(LandingForm);

export default LandingForm;