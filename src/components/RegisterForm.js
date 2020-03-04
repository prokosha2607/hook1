import React from "react";
import PropTypes from 'prop-types'
import WithToggle from '../HOC/withToggle';
import WithForm from '../HOC/withForm';


function RegisterForm({ data, handleChange, handleSubmit, isToggled, handleToggled }) {

  return (
    <form onSubmit={handleSubmit} className="col-md-3" autoComplete="off">
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Login</label>
        <input
          name="login"
          value={data.login}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-check">
        <input
          checked={isToggled}
          onChange={handleToggled}
          type="checkbox"
          name="isAgree"
          id="isAgree"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="isAgree">
          I Agree
          </label>
      </div>

      {isToggled && (
        <div className="form-group">
          <button className="btn btn-success">Register</button>
        </div>
      )}
    </form>
  );
}
RegisterForm.propTypes = {
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleToggled: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired
};

export default WithToggle(WithForm(RegisterForm));
