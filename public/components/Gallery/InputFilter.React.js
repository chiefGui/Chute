/** @jsx React.DOM **/

var InputFilter = React.createClass({
	onChange: function (value) {
		this.props.onInputFilter($("#search").val());
	},
	render : function(){
		return (
			<div className="col s4 right-align InputFilter">
				<div className="input-field col s12">
    				<i className="mdi-action-search prefix"></i>
					<input id="search" type="text" onChange={this.onChange} value={this.props.value}/>
					<label htmlFor="search">Search</label>
				</div>
			</div>
		);
	}
})