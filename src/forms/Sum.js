import React, { Component } from 'react';


class Sum extends Component {
	constructor() {
		super();
		this.state = {
			total:0,
		  options : [
		  { value: 'one', label: '1-One' },
		  { value: 'two', label: '2-Two' },
		  { value: 'three', label: '3-Three' },
		  { value: 'four', label: '4-Four' }
		  ]
    	};
  //this.employee = new Emp(this);
	this.addNum = this.addNum.bind(this);
	}

	componentDidMount() {
		this.refs.opt.value = "two";
	}

	componentWillUnMount() {
	}


	addNum(t1,t2){
		//alert(this.refs.tone.value);
		//alert(this.refs.ttwo.value);
		alert(this.refs.opt.value);
		alert(this.refs.opt.options[this.refs.opt.selectedIndex].text);
		//alert(this.refs.opt.options[0].selected);
		//this.refs.opt.options[0].selected= true;
		//this.refs.opt.value = "one";
		var tot = parseInt(this.refs.tone.value,10) + parseInt(this.refs.ttwo.value,10);
		this.setState({
			total: tot
		});
	}

  render() {
    var items = this.state.options;


	return (

			<div>
			    Select Option : <br/>
				<select ref="opt">
				  {
					items.map(function (item) {
						return <option key={item.value} value={item.value }>{item.label}</option>
					})
					}
				 </select>
     			<br/>
			   <p>
				Enter First Number : <input ref="tone" type="text" name="t1" /> <br/>
				Enter Second Number : <input ref="ttwo" type="text" name="t2"/><br/>
				<input type="button" value="Sum" onClick={this.addNum}/>
				<br/> The Sum is {this.state.total}
			   </p>
				 <div>
				 		<p>
								name
						</p>
				 </div>
			</div>

    );
  }
}

export default Sum;
