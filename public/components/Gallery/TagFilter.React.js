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
			<div className="col-xs-12 col-sm-9">
				<ul className="ft-filters clearfix hidden-xs">
					<TagFilterItem tag="All" onTagSelected={this.onTagSelected} />
					<TagFilterItem tag="Most Popular" onTagSelected={this.onMostPopularSelected} />
					<TagFilterItem tag="surf" onTagSelected={this.onTagSelected} />
					<TagFilterItem tag="trees" onTagSelected={this.onTagSelected} />
					<TagFilterItem tag="health" onTagSelected={this.onTagSelected} />
				</ul>
				<form action="#" className="visible-xs">
					<div className="form-group">
						<select name="filters" className="ft-filters-select" onChange={this.onTagSelected}>
							<option value="All">All</option>
							<option value="Most Popular">Most popular</option>
							<option value="surf">Surf</option>
							<option value="trees">Trees</option>
							<option value="health">Health</option>
						</select>
					</div>
				</form>
			</div>
		)
	}
})