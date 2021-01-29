import {Field, reduxForm} from 'redux-form';
import {renderField} from './common';
import {INewAccountValues} from '../types/formTypes';

export const validate = (values: INewAccountValues) => {
    const errors: INewAccountValues = {
      username: '',
      password: '',      
    };   

    return errors
}

let NewAccountForm: React.FunctionComponent = props => {  
  return (
    <form className="new-account-form">
        <p>Congratulations, you have qualified for a loan!  Please create an account to continue.</p>
      <div className="form-group">
        <Field name="username" component={renderField} label="Username" />
      </div>
      <div className="form-group">
        <Field className='password-field' name="password" component={renderField} label="Password" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

//TODO: Fix the type issues here
//@ts-ignore
NewAccountForm = reduxForm<INewAccountForm>({
  form: 'new-account',
  validate,
  //@ts-ignore
})(NewAccountForm);

export default NewAccountForm;