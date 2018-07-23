import React from 'react';
import HelloWorld from '../components/hello-world';
import {RootContainer, RootElement} from 'react-server';

export default class SinglePage {
	getElements() {
		return (
				<RootContainer>
					<RootElement>
						<HelloWorld/>
					</RootElement>
				</RootContainer>
			);
	}

	getTitle() {
		return "New page";
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
