/** @jsx React.DOM **/
var GalleryItem = React.createClass({
	getInitialState : function() {
		return {
			exists: false
		};
	},

	checkImageExists: function(src, parent) {
		var nImg = document.createElement('img');

		nImg.onload = function() {
			parent.setState({exists: true});
		}

		nImg.src = src;

	},



	render: function() {
		if(this.state.exists) {
			return(   
				<li className="col-xs-12 col-sm-4 col-md-3">
					<div className="media-box">
						<a href={this.props.item.source.source_url} data-featherlight-gallery data-featherlight-filter="image">
							<img className="img-responsive" src={this.props.item.source.source_url} alt="Thumbnail" />
							<img src="images/zoom.png" className="img-responsive zoom" />
						</a>
					</div>
				</li>
			)
		}
		this.checkImageExists(this.props.item.source.source_url, this);
		return( null )		
	}
})