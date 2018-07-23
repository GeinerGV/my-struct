import React from "react";
import {logging} from "react-server";

const logger = logging.getLogger(__LOGGER__);

export default class RootContainer extends React.Component {
	render () {
		return (
				<div id="RCnt">
					{this.props.children}
				</div>
			);
	}
}