import * as React from 'react';
import classnames from 'classnames';

interface Props {}

class Login extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const loginUser = {
      userName: '',
      password: ''
    };

    console.log(loginUser);
  }

  render() {
    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>Sign in to your LMS account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classnames('form-control form-control-lg')}
                    placeholder='User Name'
                    onChange={this.onChange}
                    value=''
                    name='userName'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={classnames('form-control form-control-lg')}
                    placeholder='Password'
                    onChange={this.onChange}
                    value=''
                    name='password'
                  />
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
