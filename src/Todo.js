import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: "someting1", edit: false },
        { title: "someting2", edit: false },
      ],
      value: "",
    };
  }

  add_todo = () => {
    let obj = { title: this.state.value };
    this.setState({
      todos: [...this.state.todos, obj],
      value: " ",
    });
  };

  delete_todo = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({
      todos: this.state.todos,
    });
  };

  edit_todo = (index, v) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos,
    });
  };

  handle_change = (e, i) => {
    this.state.todos[i].title = e.target.value;
    this.setState({
      todos: this.state.todos,
    });
  };

  update_todos = (i) => {
    this.state.todos[i].edit = false;
    this.setState({
      todos: this.state.todos,
    });
  };

  render() {
    const { todos, value } = this.state;
    return (
      <div>
        <h1>Daynemic Todos Application !</h1>
        <input
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
          type="text"
          placeholder="Enter Your Value!!"
        />
        <button onClick={this.add_todo}>Click Your Data!</button>
        <br /> <br />
        <ul>
          {todos.map((v, i) => {
            return (
              <li key={i}>
                {v.edit ? (
                  <input
                    value={v.title}
                    onChange={(e) => this.handle_change(e, i)}
                    type="text"
                    placeholder="Enter Your Edit Value!"
                  />
                ) : (
                  v.title
                )}
                {v.edit ? (
                  <button onClick={() => this.update_todos(i)}>Update</button>
                ) : (
                  <button onClick={() => this.edit_todo(i, v.title)}>
                    Edit
                  </button>
                )}
                <button onClick={() => this.delete_todo(i)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
