/** @jsx React.DOM **/

var TagFilterItem = React.createClass({
	onClick : function() {
		this.props.onTagSelected(this.props.tag);
	},
	render : function() {
		return(
			<a href="#" className="btn-flat" onClick={this.onClick}>{this.props.tag}</a>
		);
	}
})