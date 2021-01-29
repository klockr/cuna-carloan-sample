import {Field, reduxForm} from 'redux-form';
import {renderField} from './common';
import {ILandingValues} from '../types/formTypes';

export const validate = (values: ILandingValues) => {
    const errors: ILandingValues = {
        price: '',
        make: '',
        income: '',
        model: '',
        credit: ''
    }
    return errors;
}
let LandingForm: React.FunctionComponent = props => {
  
  return (
    <form className="landing-form">
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