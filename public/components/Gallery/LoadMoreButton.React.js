/** @jsx React.DOM **/

var LoadMoreButton = React.createClass({
	onLoadMore: function() {
		this.props.onLoadMore();
	},

	render: function() {
		return (

			<div className="container row valign-wrapper">
				<a href="#" className="btn valign center" style={{width: "100%"}} onClick={this.onLoadMore}>LOAD MORE</a>
			</div>
		);
	}
})