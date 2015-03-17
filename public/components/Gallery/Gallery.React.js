/** @jsx React.DOM **/
var Gallery = React.createClass({
	getInitialState: function() {
		return {
			galleryType : "simple",
			items : this.props.items.slice(0,this.props.maxPerPage),
			tagFilter : "",
			tagInputFilter : ""
		};
	},

	onLayoutChange: function(type) {
		this.setState({galleryType: type});
	},
	onTagSelected: function(tag) {
		this.setState({
						tagFilter: tag,
						tagInputFilter : ""
					});
	},
	onMostPopularSelected: function() {

	},
	onInputFilter: function(val) {
		this.setState({
						tagInputFilter : val,
						tagFilter : ""
					});
	},
	onLoadMore: function() {
		this.setState({items: this.props.items.slice(0,this.state.items.length + this.props.maxPerPage)})
	},

	render: function() {
		var type = this.state.galleryType;
		var tag = this.state.tagFilter;
		var inputFilter = this.state.tagInputFilter;

		var itemsFill = this.state.items.map(function(item) {
			if(inputFilter.length > 0) {
				for(var index = 0; index < item.tags.length; index++){
					var itemTag = item.tags[index].toLowerCase();
					inputFilter = inputFilter.toLowerCase();
					if(itemTag.indexOf(inputFilter) >= 0){
						tag = item.tags[index];
						break;
					}
					tag = inputFilter;
				}
			}
			if(tag != "" && item.tags.indexOf(tag) < 0)
			{
				return null;
			}
			return (
				<GalleryItem item={item} galleryType={type} />
				);
		});
		var loadMoreButton ="";
		if(this.state.items.length < this.props.items.length) {
			loadMoreButton =  <LoadMoreButton onLoadMore={this.onLoadMore}/>
		}
		return(
			<div className="gallery">
				<div className="row">
					<TagFilter onTagSelected={this.onTagSelected} onMostPopularSelected={this.onMostPopularSelected} />
					<LayoutSelect onLayoutChange={this.onLayoutChange}/>
					<InputFilter onInputFilter={this.onInputFilter} value={this.state.tagInputFilter}/>
				</div>
				<div className="container row gallery">
					{itemsFill}
				</div>
				{loadMoreButton}
				<Modal items={this.state.items}/>
			</div>
		);
	}
})