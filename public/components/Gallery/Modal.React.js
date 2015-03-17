/** @jsx React.DOM **/

var Modal = React.createClass({
	getInitialState : function() {
		return {
			item : this.props.items[0]
		};
	},
	getIndex : function() {
		return this.props.items.indexOf(this.state.item);
	},

	onClickRight : function() {
		this.setState({item : this.props.items[this.getIndex() +1]});
	},
	onClickLeft : function() {
		this.setState({item : this.props.items[this.getIndex() -1]});
	},
	render : function() {
		return(

			<div id="galleryModal" className="modal">
				<div className="row">
					<a className="col s1" href="#" onClick={this.onClickLeft}>
						<i className="large mdi-navigation-chevron-left"></i>
					</a>
					<ModalItem item={this.state.item} />
					<a className="col s1" href="#" onClick={this.onClickRight}>
						<i className="large mdi-navigation-chevron-right"></i>
					</a>
				</div>
			</div>
		);
	}
})