import React, { Component } from 'react';
import {connect} from 'react-redux';


class EmpRedux extends Component {

  state = {
    status:'',
    selectedRow:-1,
    emps :[]
    }


	constructor(props) {
		  super(props);
      console.log('passed props',props.emps);
      this.addEmp = this.addEmp.bind(this);
      this.selectRow = this.selectRow.bind(this);
      this.reset = this.reset.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
      var empList = this.props.emps;
      console.log("emplist ",empList);
      //this.setState({status:this.props.pin});
      console.log("The Current state emps are ",this.state.emps);
  }

	componentDidMount() {
    console.log('Component Did Mount', this.props.emps);
    this.setState({emps:this.props.emps});
	}

	componentWillUnMount() {
	}


  selectRow(emp,index) {
    this.refs.eid.value=emp.eid;
    this.refs.ename.value=emp.ename;
    this.refs.sal.value=emp.sal;
    this.setState({selectedRow:index});
    this.setState({status:"Selected Row is " + index});
  }

  reset() {
    this.refs.eid.value="";
    this.refs.ename.value="";
    this.refs.sal.value='';
    this.setState({selectedRow:-1});
    this.setState({status:""});
  }

  update() {
    var idx = this.state.selectedRow - 1;
    var empList = this.state.emps;

    empList[idx] = { eid: this.refs.eid.value, ename: this.refs.ename.value, sal: this.refs.sal.value };
    this.setState({emps:empList});
    this.setState({selectedRow:idx+1});
    this.setState({status:"Record Successfully Updated...."});
    this.props.onSaveEmpClick(this.state.emps);

  }

	addEmp(){
    var eemps = this.state.emps;
    eemps.push({ eid: this.refs.eid.value, ename: this.refs.ename.value, sal: this.refs.sal.value });
    this.setState({emps:eemps});

    this.refs.eid.value="";
    this.refs.ename.value="";
    this.refs.sal.value="";
    this.setState({status:"Record Successfully Added...."});
    this.props.onSaveEmpClick(this.state.emps);
	}

  delete() {
      var index = this.state.selectedRow -1 ;
      if (index<0) {
        alert("Please select the record to be deleted....");
        return;
      }
      var oldEmp = this.state.emps[index];
      this.state.emps.splice(index,1);
      this.setState({emps:this.state.emps});
      this.setState({selectedRow:-1});
      this.setState({status:"Record Successfully Deleted....{" + oldEmp.eid + "-" + oldEmp.ename + "-" + oldEmp.sal + "}"});
      this.refs.eid.value="";
      this.refs.ename.value="";
      this.refs.sal.value="";
      this.props.onSaveEmpClick(this.state.emps);
  }


  render() {
    var employees = this.state.emps.map((emp,index) =>
      <tr key={index}><td>{index+1}</td><td>{emp.eid}</td><td>{emp.ename}</td><td>{emp.sal}</td><td><input type="button"  value="Select" onClick={()=>this.selectRow(emp,index+1)}/></td></tr>
    );


	return (

			<div>
        <br/>
        <hr/>
          <h3>Employee Management with Redux </h3>
        <hr/>

          <form>
            <table>
              <tbody>
                <tr><td>Empid</td><td><input ref="eid" type="text" name="eid"/></td></tr>
                <tr><td>Ename</td><td><input ref="ename" type="text" name="ename"/></td></tr>
                <tr><td>Salary</td><td><input ref="sal" type="text" name="esal"/></td></tr>
                </tbody>
            </table>
            <input type="button"  value="Add" onClick={this.addEmp}/> | <input type="button"  value="Save" onClick={this.update}/>
            | <input type="button"  value="Reset" onClick={this.reset} /> | <input type="button"  value="Delete" onClick={this.delete} />
          </form>

         <br/>
          <div><h2><p>{this.state.status}</p></h2></div>
         <br/>

        <table  border="1">
              <tbody>
                <tr><th>Sl No</th><th>Employee ID</th><th>Employee Name</th><th>Salary</th><th>Action</th></tr>
                {employees}
              </tbody>
        </table>
			</div>

    );
  }
}

function mapStateToProps(storeState) {
  console.log('mapStatetoProps',storeState);
  return {
    emps:storeState.emps
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
     onSaveEmpClick:(empList) => {
       console.log('onAddEmpClick ....');
       console.log('Employee List is  ....',props);

       console.log('Employee List is state   ....',empList);
       const action = { type: 'SAVE_EMPLIST' , emps:empList};
       dispatch(action);
     }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmpRedux);
//export default connect(mapStateToProps)(EmpRedux);
//export default Emp;
