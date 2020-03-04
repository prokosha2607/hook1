import React from 'react'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import WithToggle from '../HOC/withToggle';

function User({ isToggled: isRegister, handleToggled: handleChange }) {
    const submit = value => {
        console.log(value)
    }
    return (
        <div className="pt-3">
            <div className="form-check">
                <input checked={isRegister} onChange={handleChange}
                    type="checkbox" name="isRegister" id="isRegister" className="form-check-input"
                />
                <label className="form-check-label" htmlFor="isRegister">Switch to {isRegister ? 'Login' : 'Register'}</label>
            </div>
            <hr />

            <h2>{isRegister ? 'Register' : 'Login'}</h2>

            {isRegister ?
                <RegisterForm submit={submit} initState={{
                    login: "",
                    email: "",
                    password: ""
                }} dataToggled={false}/> :
                <LoginForm initState={{
                    email: "",
                    password: ""
                }} submit={submit} />}
        </div>
    )
}
User.propTypes = {
    handleToggled: PropTypes.func.isRequired,
    isToggled: PropTypes.bool.isRequired
};
export default WithToggle(User); 