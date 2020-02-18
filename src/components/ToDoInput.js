import React, { Component } from "react";

export default class ToDoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="inout-group-prepend"></div>
            <input
              type="text"
              className="form-control text-capitaliza"
              placeholder="add a todo item"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            add ToDo
          </button>
        </form>
      </div>
    );
  }
}
