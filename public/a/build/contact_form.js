var React = require('react');
var ReactDOM = require('react-dom');

var Form = require('react-formal')
  , yup = require('yup')

// if we are using a different set of inputs
// we can set some defaults once at the beginning
//Form.addInputTypes(
// require('react-formal-inputs'))

var defaultStr = yup.string().default('')

var modelSchema = yup.object({

    name: yup.object({
      username: defaultStr.required('Please leave your name'),
      email:  defaultStr.required('Please enter your email address so I can get back to you'),
      message: defaultStr.required("Don't be shy, leave a message.")
    }),
  });



var form = (
  <Form className='form'
    schema={modelSchema}
    defaultValue={modelSchema.default()}
  >
  <div className='alert alert-danger email-user-message non-r-alert-error non-r-alert email-failed'>Unfortunately your attempts to contact me cannot be achieved at this time. Please try again later.</div>
  <div className='alert alert-success email-user-message non-r-alert email-sent'>Thanks for getting in touch! I will reply to your message ASAP</div>
  <div className='alert alert-info email-user-message non-r-alert email-sending'>Please wait while your message sends</div>
    <div className='contact-form form-group'>
      <label>Name: </label>
        <div className='input-and-error'>
          <Form.Field className='name-form text-form contact form-control' id='name' autoComplete='off' name='name.username' placeholder='Your name'/>
            <Form.Message className='alert alert-danger' for='name.username' />
        </div>
      <label>Email: </label>
        <Form.Field className='email-form text-form contact form-control' id='email' autoComplete='off' name='name.email' placeholder='Email address'/>
        <div>
          <Form.Message className='alert alert-danger no-email-error' for='name.email'/>
          <div className='alert alert-danger non-r-alert non-r-alert-error invalid-error'>This email is invalid</div>
        </div>
      <label>Message: </label>
        <Form.Field className='message-form textarea-form contact form-control' id='message' name='name.message' placeholder='Enter your message here' type='textarea'/>
        <div>
          <Form.Message className='alert alert-danger no-message-error' for='name.message'/>
        </div>

    <Form.Button className='form-button btn btn-default contact form-control' type='button'>Send Message</Form.Button>
  </div>
  </Form>
)

ReactDOM.render(form, document.getElementById('form'));