/** @jsx React.DOM **/

var TagFilter = React.createClass({
	onTagSelected: function(tag) {
		if(tag == "All") tag = "";
		this.props.onTagSelected(tag);
	},
	onMostPopularSelected: function() {
		this.props.onMostPopularSelected();
	},
	render: function() {
		return (
			<div className="col s4 left-align tagFilter">
				<TagFilterItem tag="All" onTagSelected={this.onTagSelected} />
				<TagFilterItem tag="Most Popular" onTagSelected={this.onMostPopularSelected} />
				<TagFilterItem tag="Voice" onTagSelected={this.onTagSelected} />
				<TagFilterItem tag="Instruments" onTagSelected={this.onTagSelected} />
				<TagFilterItem tag="Lyrics" onTagSelected={this.onTagSelected} />
			</div>
		)
	}
})