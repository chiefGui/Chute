/** @jsx React.DOM **/

var LayoutSelectItem = React.createClass({
	onClick: function() {
		this.props.onClick(this.props.type)
	},
	render: function() {
		var className = "small " + this.props.icon;

		return (
			<a href="#" onClick={this.onClick}>
				<i className={className}></i>
			</a>
		)
	}
});