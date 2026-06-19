function Form() {
  //function to submit a task
  const handleSubmit = (event) => {
    event.preventDefault();
    //resets the form
    event.target.reset;
  };

  return (
    <form className="form" onClick={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="What are you upto today"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
