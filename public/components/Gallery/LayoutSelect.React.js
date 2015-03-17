/** @jsx React.DOM **/

var LayoutSelect = React.createClass({
	onClick: function(type) {
		this.props.onLayoutChange(type);
	},
	render: function(){

		return (
			<div className="col s4 center-align galleryType">
				<LayoutSelectItem icon="mdi-action-view-week" type="simple" onClick={this.onClick}/>
				<LayoutSelectItem icon="mdi-action-view-module"  type="mozaic" onClick={this.onClick}/>
				<LayoutSelectItem icon="mdi-action-view-list"  type="list" onClick={this.onClick}/>
			</div>
		);
	}
})