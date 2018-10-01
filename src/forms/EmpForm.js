import React, { Component } from 'react';
import { Button, Alert, Form, FormGroup, Label, Input,  Table } from 'reactstrap';
import {connect} from 'react-redux';



class EmpForm extends Component {

  state = {
    emp:{
        eid:'',
        ename:'',
        sal:'',
        formErrors:{
           eid:'',
           ename:'',
           sal:''
        }
    },
    status:'',
    selectedRow:-1,
    emps :[ ]
    }



	constructor(props) {
		  super(props);
      this.addEmp = this.addEmp.bind(this);
      this.selectRow = this.selectRow.bind(this);
      this.reset = this.reset.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
      this.validateFun = this.validateFun.bind(this);
      //this.handleChange = this.handleChange.bind(this);
      this.setState({status:this.props.pin});
  }

	componentDidMount() {
    console.log('Component Did Mount', this.props.emps);
    this.setState({emps:this.props.emps});
	}

	componentWillUnMount() {
	}


  validateFun() {
   var errors = false;
    let formErrors = this.state.emp.formErrors;
    formErrors.eid = "";
    formErrors.ename = "";
    formErrors.sal = "";
    let newState = Object.assign({}, this.state);
    if (this.state.emp.eid.length > 5) {
       formErrors.eid = "EmpID must be less than 5 numbers";
       errors = true;
    }

    if (!parseInt(this.state.emp.eid,10)) {
      formErrors.eid = "EmpID should be in numbers";
      errors = true;
    }
    if (this.state.emp.ename.length > 10) {
       formErrors.ename = "Employee Name cannot be more than 10 chars";
       errors = true;
    }
    if ( (this.state.emp.sal.length>0) && !parseFloat(this.state.emp.sal,10) ) {
       formErrors.sal = "Salary must be a float";
       errors = true;
    }
    newState.emp.formErrors = formErrors;
    this.setState(newState);
    return errors;
  }

  handleChange = e => {
     let newState = Object.assign({}, this.state);
     newState.emp[e.target.name] = e.target.value;
     this.setState(newState);
    // console.log("In Handle Change :" + newState.emp.eid);
  }

  selectRow(emp,index) {
    let newState = Object.assign({}, this.state);
    let selectedEmp = this.state.emp;
    selectedEmp.eid = emp.eid;
    selectedEmp.ename = emp.ename;
    selectedEmp.sal = emp.sal;
    newState.emp = selectedEmp;
    this.setState(newState);
    this.setState({selectedRow:index});
    this.setState({status:"Selected Row is " + index});
  }

  reset() {
    let empData = this.state.emp;
    empData.eid = '';
    empData.ename = '';
    empData.sal = '';
    empData.formErrors.eid = "";
    empData.formErrors.ename = "";
    empData.formErrors.sal = "";
    let newState = Object.assign({}, this.state);
    newState.emp = empData;
    this.setState(newState);
    this.setState({selectedRow:-1});
    this.setState({status:""});
  }

  update() {

    if (this.validateFun()) {
      return;
    }

    var idx = this.state.selectedRow - 1;
    var empList = this.state.emps;

    empList[idx] = { eid: this.state.emp.eid, ename: this.state.emp.ename, sal: this.state.emp.sal };
    this.setState({emps:empList});
    this.setState({selectedRow:idx+1});
    this.setState({status:"Record Successfully Updated...."});
    this.props.onSaveEmpClick(this.state.emps);
  }


	addEmp(){

    if (this.validateFun()) {
      return;
    }

    var eemps = this.state.emps;
    eemps.push({ eid: this.state.emp.eid, ename: this.state.emp.ename, sal: this.state.emp.sal });
    this.setState({emps:eemps});
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
      this.reset();
      this.setState({emps:this.state.emps});
      this.setState({selectedRow:-1});
      this.setState({status:"Record Successfully Deleted....{" + oldEmp.eid + "-" + oldEmp.ename + "-" + oldEmp.sal + "}"});
      this.props.onSaveEmpClick(this.state.emps);
  }






  render() {
    var employees = this.state.emps.map((emp,index) =>
      <tr key={index}><td>{index+1}</td><td>{emp.eid}</td><td>{emp.ename}</td><td>{emp.sal}</td><td> <Button color="link" onClick={()=>this.selectRow(emp,index+1)}>Select</Button></td></tr>
    );

    var formErrors = this.state.emp.formErrors;

	return (

    <div className='wrapper'>
			<div className='form-wrapper'>
      <br/>
       <div><h2><p>Employee Form with Bootstraping </p></h2></div>
      <br/>

          <Form>
          <FormGroup>
            <Label for="empId">Employee Id</Label>
            <Input type="text" name="eid" id="eid" ref="eid" placeholder="Employee Id" value={this.state.emp.eid} onChange={e =>this.handleChange(e)}/>
            {formErrors.eid.length > 0 && (<span> <font color ="red">{formErrors.eid} </font></span> )}
          </FormGroup>
          <FormGroup>
            <Label for="empName">Employee Name</Label>
            <Input type="text" name="ename" id="ename" ref="ename" placeholder="Employee Name" value={this.state.emp.ename} onChange={e =>this.handleChange(e)} />
            {formErrors.ename.length > 0 && (<span> <font color ="red">{formErrors.ename} </font></span> )}
          </FormGroup>
          <FormGroup>
            <Label for="empSal">Employee Salary</Label>
            <Input type="text" name="sal" id="sal" ref="sal" placeholder="Salary" value={this.state.emp.sal} onChange={e =>this.handleChange(e)}/>
            {formErrors.sal.length > 0 && (<span> <font color ="red">{formErrors.sal} </font></span> )}
          </FormGroup>
            <hr/>
            <Button color="primary" onClick={this.addEmp}>Add Emp</Button> | <Button color="primary" onClick={this.update}>Save</Button> | <Button color="primary" onClick={this.reset}>Reset</Button> | <Button color="primary" onClick={this.delete}>Delete</Button>
          </Form>

         <br/>
          <Alert color="success">
            {this.state.status}
          </Alert>
         <br/>

        <Table  striped>
              <thead>
                <tr><th>Sl No</th><th>Employee ID</th><th>Employee Name</th><th>Salary</th><th>Action</th></tr>
                </thead>
                <tbody>
                {employees}
              </tbody>
        </Table>
			</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(EmpForm);
