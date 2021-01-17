import React from 'react';

class LoginInput extends React.Component {
    validateEmail = (email) => {
        const validation = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!validation || email.length === 0) {
            return 'Invalid email.!';
        }
        return '';
    }

    render() {
        return (
            <label>
                Login
                <input value={this.props.value} onChange={this.props.onChange} type="text" name="login" id="login" />
                <span className="form-error">{this.validateEmail(this.props.value)}</span>
            </label>
        )
    }
}

export default LoginInput;