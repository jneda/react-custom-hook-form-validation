const BasicForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="first-name">First name:</label>
          <input type="text" id="first-name" />
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last name:</label>
          <input type="text" id="last-name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
