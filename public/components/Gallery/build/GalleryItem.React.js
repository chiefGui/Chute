/** @jsx React.DOM **/
var GalleryItem = React.createClass({displayName: "GalleryItem",
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
				React.createElement("li", {className: "col-xs-12 col-sm-4 col-md-3"}, 
					React.createElement("div", {className: "media-box"}, 
						React.createElement("a", {href: this.props.item.source.source_url, "data-featherlight-gallery": true, "data-featherlight-filter": "image"}, 
							React.createElement("img", {className: "img-responsive", src: this.props.item.source.source_url, alt: "Thumbnail"}), 
							React.createElement("img", {src: "images/zoom.png", className: "img-responsive zoom"})
						)
					)
				)
			)
		}
		this.checkImageExists(this.props.item.source.source_url, this);
		return( null )		
	}
})