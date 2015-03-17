/** @jsx React.DOM **/
var GalleryItem = React.createClass({
	getInitialState : function() {
		return {
			hover: 0
		};
	},
	getCardClass : function(type) {
		switch(type){
			case "simple" :
				return "col s3 card"
			case "mozaic" :
				return "col s2 card little-card"
			case "list" :
				return "col s12 card"
		}
	},
	getImageClass : function(type) {
		switch(type){
			case "simple" :
			case "mozaic" :
				return "col s12 card-image"
			case "list" :
				return "col s3 card-image"
		}
	},

	onMouseEnter : function(){
		this.setState({hover:1});
	},
	onMouseLeave : function(){
		this.setState({hover:0});
	},
	onClick: function(){
		$("#galleryModal").openModal();
	},



	render: function() {
		var youtube = "http://img.youtube.com/vi/" + this.props.item.youtube + "/0.jpg";
		var hoverStyle = {
			opacity: this.state.hover
		};
		var cardClass = this.getCardClass(this.props.galleryType);
		var imageClass = this.getImageClass(this.props.galleryType);

		return(   
         	<div className={cardClass} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onClick}>
				<div className={imageClass}>
					<img src={youtube}><i className="play_hover medium mdi-av-play-circle-outline" style={hoverStyle}></i></img>
				</div>
				<GalleryItemInfo item={this.props.item} />
			</div>
		)
	}
})