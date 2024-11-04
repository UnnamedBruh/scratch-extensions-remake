(function(Scratch) {
	if (!Scratch.Cast) {
		if (confirm("This Scratch mod must support the Scratch.Cast API! Do you want the extension to be used anyway?") || !confirm("Are you sure you want to decline this extension? If a project is loading, and that project uses this extension, and you would decline it, the project might have trouble loading! Are you sure you want to decline this extension?")) {
			Scratch.Cast = {};
			Scratch.Cast.toNumber = function(e) {
				return e === null || e === undefined ? 0 : Number(e);
			}
		} else {
			return;
		}
	}
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
					},
					{
						"opcode": "repeat",
						"blockType": "reporter",
						"text": "repeat [A] [B] times",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "number",
								"defaultValue": "5"
							}
						}
					},
					'---',
					{
						"opcode": "exactEquals",
						"blockType": "Boolean",
						"text": "[A] == [B]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "string",
								"defaultValue": "Apple"
							}
						}
					},
					{
						"opcode": "exactContains",
						"blockType": "Boolean",
						"text": "[A] exactly contains [B]?",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "string",
								"defaultValue": "A"
							}
						}
					},
					{
						"opcode": "startsWith",
						"blockType": "Boolean",
						"text": "[A] starts with [B]?",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "string",
								"defaultValue": "app"
							}
						}
					},
					{
						"opcode": "endsWith",
						"blockType": "Boolean",
						"text": "[A] ends with [B]?",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "string",
								"defaultValue": "ple"
							}
						}
					},
					{
						"opcode": "exactlyStartsWith",
						"blockType": "Boolean",
						"text": "[A] exactly starts with [B]?",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "string",
								"defaultValue": "ple"
							}
						}
					},
					{
						"opcode": "exactlyEndsWith",
						"blockType": "Boolean",
						"text": "[A] exactly ends with [B]?",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple"
							},
							"B": {
								"type": "string",
								"defaultValue": "ple"
							}
						}
					}
				]
			}
		}
		slice(args) {
			return String(args.A).slice(Scratch.Cast.toNumber(args.B) - 1, Scratch.Cast.toNumber(args.C) - 1);
		}
		repeat(args) {
			return String(args.A).repeat(Scratch.Cast.toNumber(args.B));
		}
		exactEquals(args) {
			return String(args.A) === String(args.B);
		}
		exactContains(args) {
			return String(args.A).includes(String(args.B));
		}
		startsWith(args) {
			return String(args.A).toLowerCase().startsWith(String(args.B).toLowerCase());
		}
		endsWith(args) {
			return String(args.A).toLowerCase().endsWith(String(args.B).toLowerCase());
		}
		exactlyStartsWith(args) {
			return String(args.A).startsWith(String(args.B));
		}
		exactlyEndsWith(args) {
			return String(args.A).endsWith(String(args.B));
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
