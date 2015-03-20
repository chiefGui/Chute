/** @jsx React.DOM **/

var TagFilterItem = React.createClass({displayName: "TagFilterItem",
	onClick : function() {
		this.props.onTagSelected(this.props.tag);
	},
	render : function() {
		return(
			React.createElement("li", null, React.createElement("a", {href: "#nike", onClick: this.onClick}, this.props.tag))
		);
	}
})