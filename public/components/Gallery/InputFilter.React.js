/** @jsx React.DOM **/

var InputFilter = React.createClass({
	onChange: function (value) {
		this.props.onInputFilter($("#search").val());
	},
	render : function(){
		return (
			<div className="col-xs-12 col-sm-3">
				<form action="#nike" className="ft-search">
					<input id="search" type="text" className="form-control" placeholder="Search" onChange={this.onChange}/>
					<input type="submit" value="" value={this.props.value} />
				</form>
			</div>
		);
	}
})