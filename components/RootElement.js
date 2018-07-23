import React from "react";
import {logging} from "react-server";

const logger = logging.getLogger(__LOGGER__);

export default class RootElement extends React.Component {
	render () {
		return (
				<div id="REle">
					{this.props.children}
				</div>
			);
	}
}