import React, { Component } from "react";
import axios from "axios";

import BackButton from "../buttons/BackButton.jsx";

class CohortEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort_id: 0,
      manualStdnt: "",
      manualHandle: "",
      easyStdnt: "",
      easyHandle: "",
      students: [],
      materials: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.stateChecker = this.stateChecker.bind(this);
    this.getAllStudents = this.getAllStudents.bind(this);
    this.manualRegister = this.manualRegister.bind(this);
    this.easyRegister = this.easyRegister.bind(this);
    this.checkBoxCH = this.checkBoxCH.bind(this);
    this.massClone = this.massClone.bind(this);
  }

  getAllStudents() {
    axios
      .get(
        `http://localhost:3030/api/students/getStudent/?cohort_id=${
          this.props.location.id
        }`
      )
      .then(succ => {
        console.log(
          `Got all the students with cohort_id: ${this.state.cohort_id}`
        );
        console.log("this is the students", succ.data.rows);
        this.setState({
          students: succ.data.rows
        });
      })
      .catch(err => {
        console.log(
          "Could not get the students from the database with cohort_id: " +
            this.stateChecker.cohort_id
        );
      });
  }

  componentDidMount() {
    this.state.cohort_id = this.props.location.id;
    this.getAllStudents();
  }

  stateChecker() {
    console.log("state,", this.state);
    console.log("props:", this.props);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkBoxCH(e) {
    if (this.state.materials.includes(e.target.name)) {
      let indexOfTarget = this.state.materials.indexOf(e.target.name);
      let copyOfMaterials = this.state.materials.slice();
      // remove the selected element from the array
      copyOfMaterials.splice(indexOfTarget, 1);
      // set it as the new state.
      this.setState({
        materials: copyOfMaterials
      });
    } else {
      this.setState({
        materials: [...this.state.materials, e.target.name]
      });
    }
    console.log(e.target.name);
  }

  manualRegister() {
    axios
      .post("http://localhost:3030/api/students/addStudent", {
        fullname: this.state.manualStdnt,
        username: this.state.manualHandle,
        cohort_id: this.state.cohort_id
      })
      .then(succ => {
        console.log("Successfully registered a student!");
        alert(
          `${this.state.manualStdnt} was added as 
          ${this.state.manualHandle} in ${this.props.location.name}`
        );
      })
      .catch(err => {
        console.log("Could not register the student:", err);
      });
  }

  easyRegister() {
    let temp = this.state.easyStdnt.split(" ");
    let stdntNameArr = [];
    for (let i = 0; i < temp.length; i += 2) {
      let fullname = `${temp[i]} ${temp[i + 1]}`;
      stdntNameArr.push(fullname);
    }
    const stdntHandleArr = this.state.easyHandle.split(" ");

    console.log("arr", stdntNameArr, stdntHandleArr);

    if (stdntNameArr.length === stdntHandleArr.length) {
      for (let j = 0; j < stdntNameArr.length; j++) {
        axios
          .post("http://localhost:3030/api/students/addStudent", {
            fullname: stdntNameArr[j],
            username: stdntHandleArr[j],
            cohort_id: this.state.cohort_id
          })
          .then(succ => {
            console.log("Successfully registered a student!");
            alert("Successfully added the students!");
          })
          .catch(err => {
            console.log("Could not register the student:", err);
          });
      }
    } else {
      alert("Check the Students Name and GitHub Handles inputs!");
    }
  }

  gitClone(handle, repo) {
    axios
      .post("http://localhost:3030/api/repos/clone", {
        cohortname: this.props.location.name,
        githubHandle: handle,
        repoNames: repo
      })
      .then(succ => {
        console.log("Sucessfully cloned down all the repos");
      })
      .catch(err => {
        console.log("Failed to clone the repos");
      });
  }

  massClone() {
    this.state.students.forEach(student => {
      this.state.materials.forEach(material => {
        this.gitClone(student.username, material);
      });
    });
  }

  render() {
    return (
      <div>
        <div>Current Cohort: {this.props.location.name}</div>
        <hr />
        <div>
          Easy Entry - Copy and Paste or Drag into the box
          <div>
            Students Name:
            <input name="easyStdnt" onChange={this.onChangeHandler} />
          </div>
          <div>
            GitHub Handles:
            <input name="easyHandle" onChange={this.onChangeHandler} />
          </div>
          <button onClick={this.easyRegister}>Easy Register Students</button>
        </div>

        <hr />

        <div>
          Manual Entry
          <div>
            Student Name:<input
              name="manualStdnt"
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            GitHubHandle:<input
              name="manualHandle"
              onChange={this.onChangeHandler}
            />
          </div>
          <button onClick={this.manualRegister}>Register A Student</button>
        </div>
        <hr />

        <div>
          Koans
          <input
            type="checkbox"
            name="javascript-koans"
            onChange={this.checkBoxCH}
          />
        </div>
        <div>
          Underbar
          <input type="checkbox" name="underbar" onChange={this.checkBoxCH} />
        </div>
        <div>
          Test Builder
          <input
            type="checkbox"
            name="testbuilder"
            onChange={this.checkBoxCH}
          />
        </div>

        <div>
          Twittler
          <input type="checkbox" name="twittler" onChange={this.checkBoxCH} />
        </div>

        <div>
          Recursion
          <input type="checkbox" name="recursion" onChange={this.checkBoxCH} />
        </div>

        <button onClick={this.massClone}>Clone to your Desktop</button>

        <hr />
        {this.state.students.map(student => (
          <div>
            <div>
              {student.fullname}: {student.username}{" "}
            </div>
          </div>
        ))}

        <button onClick={this.stateChecker}>State Checker</button>
      </div>
    );
  }
}

export default CohortEntry;
