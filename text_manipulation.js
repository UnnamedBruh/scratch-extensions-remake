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
								"defaultValue": "APP"
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
								"defaultValue": "PLE"
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
								"defaultValue": "APP"
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
								"defaultValue": "PLE"
							}
						}
					},
					'---',
					{
						"opcode": "characterCode",
						"blockType": "reporter",
						"text": "character code at [B] from [A]",
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
					{
						"opcode": "codePoint",
						"blockType": "reporter",
						"text": "code point at [B] from [A]",
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
					{
						"opcode": "fromCharacterCode",
						"blockType": "reporter",
						"text": "character from code [A]",
						"arguments": {
							"A": {
								"type": "number",
								"defaultValue": "97"
							}
						}
					},
					{
						"opcode": "fromCodePoint",
						"blockType": "reporter",
						"text": "character from point [A]",
						"arguments": {
							"A": {
								"type": "number",
								"defaultValue": "97"
							}
						}
					},
					'---',
					{
						"opcode": "item",
						"blockType": "reporter",
						"text": "item [C] of [A] separated by [B]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apple, banana, orange"
							},
							"B": {
								"type": "string",
								"defaultValue": ", "
							},
							"C": {
								"type": "number",
								"defaultValue": "2"
							}
						}
					},
					'---',
					{
						"opcode": "reverse",
						"blockType": "reporter",
						"text": "reverse [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "elppa"
							}
						}
					},
					{
						"opcode": "convert",
						"blockType": "reporter",
						"text": "convert [A] to [B]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "Apples are delicious"
							},
							"B": {
								"type": "string",
								"menu": "CASES"
							}
						}
					},
					'---',
					{
						"opcode": "replace",
						"blockType": "reporter",
						"text": "in [A] replace [B] with [C] [D] [E]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "apples are a great source of potassium"
							},
							"B": {
								"type": "string",
								"defaultValue": "apple"
							},
							"C": {
								"type": "string",
								"defaultValue": "banana"
							},
							"D": {
								"type": "string",
								"menu": "TYPES"
							},
							"E": {
								"type": "string",
								"menu": "REGEX"
							}
						}
					}
				],
				"menus": {
					"CASES": {
						"items": ["lowercase", "uppercase"]
					},
					"TYPES": {
						"items": [{"text": "once", "value": ""}, {"text": "every time", "value": "g"}]
					},
					"REGEX": {
						"items": [{"text": "case-sensitive", "value": ""}, {"text": "case-insensitive", value: "i"}]
					}
				}
			}
		}
		slice(args) {
			return String(args.A).slice(Scratch.Cast.toNumber(args.B) - 1, Scratch.Cast.toNumber(args.C));
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
		characterCode(args) {
			return String(args.A).charCodeAt(Scratch.Cast.toNumber(args.B) - 1);
		}
		codePoint(args) {
			return String(args.A).codePointAt(Scratch.Cast.toNumber(args.B) - 1);
		}
		fromCharacterCode(args) {
			return String.fromCharCode(Scratch.Cast.toNumber(args.A));
		}
		fromCodePoint(args) {
			return String.fromCodePoint(Scratch.Cast.toNumber(args.A));
		}
		item(args) {
			return String(args.A).split(String(args.B))[Scratch.Cast.toNumber(args.C) - 1];
		}
		reverse(args) {
			return String(args.A).split("").reverse().join("");
		}
		convert(args) {
			return args.B === "lowercase" ? String(args.A).toLowerCase() : String(args.A).toUpperCase();
		}
		replace(args) {
			return String(args.A).replace(new RegExp(String(args.B).replace(/./g, "\\$&"), args.D + args.E), String(args.C));
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
