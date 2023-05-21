import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { addPerson } from '../redux/actions/person';
import { RootState } from '../redux/reducers';

class Person extends Component<any, any> {
  private nameNode: React.RefObject<HTMLInputElement>;
  private jobNode: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.nameNode = React.createRef();
    this.jobNode = React.createRef();
  }

  addPerson = () => {
    const name = this.nameNode.current?.value;
    const job = this.jobNode.current?.value;
    const personObj = { id: nanoid(), name, job: job };
    this.props.addPerson(personObj);
    this.nameNode.current!.value = '';
    this.jobNode.current!.value = '';
  };

  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件求和为{this.props.count}</h2>
        <input ref={this.nameNode} type="text" placeholder="输入名字" />
        <input ref={this.jobNode} type="text" placeholder="输入职业" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((p: any) => {
            return (
              <li key={p.id}>
                {p.name}--{p.job}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({
    persons: state.persons,
    count: state.count,
  }), //映射状态
  { addPerson }, //映射操作状态的方法
)(Person);
