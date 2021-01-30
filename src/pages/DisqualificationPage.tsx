import {IQualificationProps} from '../types/formTypes';

const DisqualificationPage: React.FunctionComponent<IQualificationProps> = (props) => 
    <div>
        <div className="qualification-message">
            {props.message}
        </div>
        <div className="qualification-questions">
            Questions? Contact <a href="mailto:cuna-mutual@customersuccess.com">cuna-mutual@customersuccess.com</a>
        </div>
    </div>

export default DisqualificationPage;