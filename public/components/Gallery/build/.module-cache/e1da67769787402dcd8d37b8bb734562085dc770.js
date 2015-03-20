/** @jsx React.DOM **/

var TagFilter = React.createClass({displayName: "TagFilter",
	onTagSelected: function(tag) {
		if(tag == "All") tag = "";
		this.props.onTagSelected(tag);
	},
	onMostPopularSelected: function() {
		this.props.onMostPopularSelected();
	},
	render: function() {
		return (
			React.createElement("div", {className: "col-xs-12 col-sm-9"}, 
				React.createElement("ul", {className: "ft-filters clearfix hidden-xs"}, 
					React.createElement(TagFilterItem, {tag: "All", onTagSelected: this.onTagSelected}), 
					React.createElement(TagFilterItem, {tag: "Most Popular", onTagSelected: this.onMostPopularSelected}), 
					React.createElement(TagFilterItem, {tag: "surf", onTagSelected: this.onTagSelected}), 
					React.createElement(TagFilterItem, {tag: "trees", onTagSelected: this.onTagSelected}), 
					React.createElement(TagFilterItem, {tag: "health", onTagSelected: this.onTagSelected})
				), 
				React.createElement("form", {action: "#", className: "visible-xs"}, 
					React.createElement("div", {className: "form-group"}, 
						React.createElement("select", {name: "filters", className: "ft-filters-select", onChange: this.onTagSelected}, 
							React.createElement("option", {value: "All"}, "All"), 
							React.createElement("option", {value: "Most Popular"}, "Most popular"), 
							React.createElement("option", {value: "surf"}, "Surf"), 
							React.createElement("option", {value: "trees"}, "Trees"), 
							React.createElement("option", {value: "health"}, "Health")
						)
					)
				)
			)
		)
	}
})