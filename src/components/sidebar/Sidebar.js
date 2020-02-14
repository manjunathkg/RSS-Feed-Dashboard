import React, { Component } from 'react';
import FeedItem from '../../containers/sidebar/FeedItem';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

class Sidebar extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.getFeeds();
	}

	render() {
		return (
			<aside>
				<Scrollbars>
					<h1>MY FEED</h1>
					{this.props.feeds.map((elem , key) => <FeedItem isActive={this.props.activeFeed.id == elem.id} data={elem} key={key} />)}
				</Scrollbars>
			</aside>
		);
	}
}

Sidebar.propTypes = {
	feeds: PropTypes.array.isRequired,
	getFeeds: PropTypes.func.isRequired,
	activeFeed: PropTypes.object.isRequired
};

export default Sidebar;