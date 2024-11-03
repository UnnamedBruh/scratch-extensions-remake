// Name: Mathematical Concepts
// Author: Unnamedbruh
// GitHub: https://github.com/UnnamedBruh
// Scratch: https://scratch.mit.edu/users/UnnamedBruhScratch
(function(Scratch) {
	if (!Scratch.Cast) {
		if (confirm("This Scratch mod must support the Scratch.Cast API! Do you want the extension to be used anyway?")) {
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
				"id": "unnamedbruhmathconcepts",
				"name": "Mathematical Concepts",
				"color1": "#FF0F00",
				"color2": "#AA0A00",
				"color3": "#550500",
				"blocks": [
					{
						"opcode": "",
						"blockType": "label",
						"text": "Simple/Basic Concepts"
					},
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
					},
					{
						"opcode": "exponents",
						"blockType": "reporter",
						"text": "[A] ** [B]",
						"arguments": {
							"A": {
								"type": "number",
								"defaultValue": "3"
							},
							"B": {
								"type": "number",
								"defaultValue": "3"
							}
						}
					},
					{
						"opcode": "",
						"blockType": "label",
						"text": "Basic Constants"
					},
					{
						"opcode": "infinity",
						"blockType": "reporter",
						"text": "∞"
					},
					{
						"opcode": "",
						"blockType": "label",
						"text": "Irrational Constants"
					},
					{
						"opcode": "",
						"blockType": "label",
						"text": "Constants"
					},
					{
						"opcode": "pi",
						"blockType": "reporter",
						"text": "π"
					},
					{
						"opcode": "e",
						"blockType": "reporter",
						"text": "e"
					},
					{
						"opcode": "goldenratio",
						"blockType": "reporter",
						"text": "ϕ"
					},
					{
						"opcode": "tau",
						"blockType": "reporter",
						"text": "t"
					},
					{
						"opcode": "",
						"blockType": "label",
						"text": "Less-known Constants"
					},
					{
						"opcode": "eMascheroni",
						"blockType": "reporter",
						"text": "γ"
					},
					{
						"opcode": "",
						"blockType": "label",
						"text": "Other Concepts"
					},
				]
			}
		}
		identity(args) {
			return args.A;
		}
		exponents(args) {
			return Math.pow(Scratch.Cast.toNumber(args.A), Scratch.Cast.toNumber(args.B));
		}
		pi() {
			return Math.PI;
		}
		e() {
			return Math.E;
		}
		goldenratio() {
			return 1.618033988749895;
		}
		tau() {
			return 6.283185307179586;
		}
		eMascheroni() {
			return 0.5772156649015329;
		}
		
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
