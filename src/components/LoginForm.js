import React from "react";
import PropTypes from 'prop-types'
import WithForm from '../HOC/withForm';

function LoginForm({ data, handleChange, handleSubmit }) {

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
        <label>Password</label>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}
LoginForm.propTypes = {
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
export default WithForm(LoginForm);
