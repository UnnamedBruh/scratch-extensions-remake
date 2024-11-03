(function(Scratch) {
	class Extension {
		getInfo() {
			return {
				"id": "unnamedbruhexample",
				"name": "Example",
				"color1": "#FF0000",
				"color2": "#AA0000",
				"color3": "#550000",
				"blocks": [
					{
						"opcode": "identity",
						"blockType": "reporter",
						"text": "identity [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							}
						}
					}
				]
			}
		}
		identity(args) {
			return args.A;
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
