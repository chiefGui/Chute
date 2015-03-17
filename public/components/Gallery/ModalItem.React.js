/** @jsx React.DOM **/

var ModalItem = React.createClass({
	render: function() {
		var src = "https://www.youtube.com/embed/"+this.props.item.youtube+"?controls=0&amp;showinfo=0";
		var tags = "";
		for (var index = 0; index < this.props.item.tags.length; index++) {
			tags += "#"+this.props.item.tags[index]+" ";
		}
		return (
			<div className="col s10 card">
				<div className="col s12 card-image">
					<iframe width="681" height="510" src={src}></iframe>
				</div>
				<span className="col s12 center-align">{this.props.item.name}</span>
				<span className="col s12 center-align">{tags}</span>
			</div>
		);
	}
})