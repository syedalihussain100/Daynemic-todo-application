import React, { Component } from "react";

class happy extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { title: "hammad", edit: false },
        { title: "zaid", edit: false },
      ],
      value: "",
    };
  }

  handle_add = () => {
    let obj = { title: this.state.value };
    this.setState({
      todos: [...this.state.todos, obj],
      value: " ",
    });
  };

  handle_delete = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({
      todos: this.state.todos,
    });
  };

  handle_edit = (i) => {
    this.state.todos[i].edit = true;
    this.setState({
      todos: this.state.todos,
    });
  };

  handle_Change = (e, i) => {
    this.state.todos[i].title = e.target.value;
    this.setState({
      todos: this.state.todos,
    });
  };

  handle_Update = (i) => {
    this.state.todos[i].edit = false;
    this.setState({
      todos: this.state.todos,
    });
  };
  render() {
    const { todos, value } = this.state;
    return (
      <div>
        <h2>Practise Todo-Application!</h2>
        <input
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
          type="text"
          placeholder="Enter Your Value"
        />
        <button onClick={this.handle_add}>Click Data</button>

        <ul>
          {todos.map((v, i) => {
            return (
              <li key={i}>
                {v.edit ? (
                  <input
                    onChange={(e) => this.handle_Change(e, i)}
                    type="text"
                    placeholder="Enter Your Edit Value!"
                    value={v.title}
                  />
                ) : (
                  v.title
                )}
                {v.edit ? (
                  <button onClick={() => this.handle_Update(i)}>Update</button>
                ) : (
                  <button onClick={() => this.handle_edit(i)}>Edit</button>
                )}
                <button onClick={() => this.handle_delete(i)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default happy;

