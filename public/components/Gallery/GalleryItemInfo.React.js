/** @jsx React.DOM **/

var GalleryItemInfo = React.createClass({
	render: function() {
		return(
			<div>
				<div className="row">
					<i className="col s2 small mdi-av-my-library-music"></i>
					<span className="col s8">{this.props.item.name}</span>
				</div>
				<div>
					<h6 className="right-align">{this.props.item.length}</h6>
				</div>
			</div>
		);
	}
})