/** @jsx React.DOM **/

var InputFilter = React.createClass({displayName: "InputFilter",
	onChange: function (value) {
		this.props.onInputFilter($("#search").val());
	},
	render : function(){
		return (
			React.createElement("div", {className: "col-xs-12 col-sm-3"}, 
				React.createElement("form", {action: "#nike", className: "ft-search"}, 
					React.createElement("input", {id: "search", type: "text", className: "form-control", placeholder: "Search", onChange: this.onChange}), 
					React.createElement("input", {type: "submit", value: "", value: this.props.value})
				)
			)
		);
	}
})