(function(Scratch) {
	class Extension {
		getInfo() {
			return {
				"id": "unnamedbruhtextmanipulation",
				"name": "Text Manipulation",
				"color1": "#FF00AA",
				"color2": "#AA0073",
				"color3": "#550013",
				"blocks": [
					{
						"opcode": "slice",
						"blockType": "reporter",
						"text": "slice [A] from [B] to [C]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "number",
								"defaultValue": "1"
							},
							"C": {
								"type": "number",
								"defaultValue": "4"
							}
						}
					}
				]
			}
		}
		slice(args) {
			return String(args.A).slice(Scratch.Cast.toNumber(args.B) - 1, Scratch.Cast.toNumber(args.C) - 1);
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
