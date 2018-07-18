const fundaEleTemplate = [
	{_id: '0', id: "_Header",
		props: {style: {}, key: "_Header",
			logo: {alt: "Logo EEGGCC", "h": 50, "w": 50}
		}
	},
	{_id: '1', id: "_Nav", props: {key: "_Nav",
		navbarCollapse: {
			id: "myNav", style: {}, key: "myNav", navbarNav: {
				style: {}, items: [
					{url: "fr_a1", txt: "Inicio", key: "_navItem1"},
					{url: "fr_a3", txt: "Noticias", key: "_navItem2"},
					{url: "fr_a4", txt: "Materiales", key: "_navItem3"},
					{url: "fr_a5", txt: "Calendario", key: "_navItem4"},
				]
			}
		}
	}}
];

export default fundaEleTemplate