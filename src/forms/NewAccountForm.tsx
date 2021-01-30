import {Field, reduxForm} from 'redux-form';
import {renderField} from './common';
import {INewAccountValues, NewAccountFormProps} from '../types/formTypes';

export const validate = (values: INewAccountValues) => {
    const emailRegex =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const checkNumber = /[0-9]+/.test(values.password);
    const checkSpecial = /[*@!#%&()^~{}]+/.test(values.password);    
    const errors: INewAccountValues = {
      username: '',
      password: '',      
    };   

    if (!values.username) {
      errors.username = 'Required'
    }        
    if (!emailRegex.test(values.username)) {
        errors.username = 'Username must be a valid email address'
    }
    
    if (!values.password) {
        errors.password = 'Required'
    }            
    else if (values.password.length < 8 || (!checkNumber && !checkSpecial)) {
        errors.password = 'Password requires length greater than 8 and one special character or number'
    }
    return errors
}

let NewAccountForm: React.FunctionComponent<NewAccountFormProps> = props => {  
    const {handleSubmit, accountCreated} = props;  
    return (
        <form onSubmit={handleSubmit} className="new-account-form">
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
            {accountCreated ? <div className='account-created-message'>Account Created!</div> : null }
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