import React, { Component } from 'react';
import {connect} from 'react-redux';



class DisplayEmp extends Component {

  state = {
    emps :[]
    }

	constructor(props) {
		  super(props);
      console.log('passed props',props.emps);
      var empList = this.props.emps;
      console.log("emplist ",empList);
  }

	componentDidMount() {
    console.log('Component Did Mount', this.props.emps);
    this.setState({emps:this.props.emps});
	}

	componentWillUnMount() {
	}


  render() {
    var employees = this.state.emps.map((emp,index) =>
      <tr key={index}><td>{index+1}</td><td>{emp.eid}</td><td>{emp.ename}</td><td>{emp.sal}</td></tr>
    );

	return (

			<div>
        <table  border="1">
              <tbody>
                <tr><th>Sl No</th><th>Employee ID</th><th>Employee Name</th><th>Salary</th></tr>
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

//export default connect(mapStateToProps,mapDispatchToProps)(Emp);
export default connect(mapStateToProps)(DisplayEmp);
//export default Emp;
