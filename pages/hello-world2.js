import React from 'react';
import HelloWorld from '../components/hello-world';

export default class SinglePage {
	getElements() {
		return (
				<HelloWorld/>
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
