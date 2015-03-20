/** @jsx React.DOM **/

var TagFilterItem = React.createClass({
	onClick : function() {
		this.props.onTagSelected(this.props.tag);
	},
	render : function() {
		return(
			<li><a href="#nike" onClick={this.onClick}>{this.props.tag}</a></li>
		);
	}
})