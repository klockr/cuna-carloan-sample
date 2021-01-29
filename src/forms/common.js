//TODO: convert to tsx and make strongly typed
export const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={className} />
        {touched && ((error && <span className="error-text">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
)