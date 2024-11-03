
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
						"opcode": "nan",
						"blockType": "reporter",
						"text": "NaN"
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
						"text": "Data Concepts"
					},
					{
						"opcode": "range",
						"blockType": "reporter",
						"text": "range of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "mean",
						"blockType": "reporter",
						"text": "mean of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "median",
						"blockType": "reporter",
						"text": "median of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "mode",
						"blockType": "reporter",
						"text": "mode of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12,1,4,3"
							}
						}
					}
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
		infinity() {
			return Infinity;
		}
		nan() {
			return NaN;
		}
		range(args) {
			if (args.A === "") return 0;
			const data = args.A.toString().split(",");
			if (data.length === 1) return 0;
			let min = Infinity, max = -Infinity;
			for (let i = 0; i < data.length; i++) {
				data[i] = Scratch.Cast.toNumber(data[i]);
				if (data[i] > max) max = data[i];
				if (data[i] < min) min = data[i];
			}
			return max - min;
		}
		mean(args) {
			if (args.A === "") return NaN;
			const data = args.A.toString().split(",");
			if (data.length === 1) return Scratch.Cast.toNumber(data[0]);
			let sum = 0;
			for (let i = 0; i < data.length; i++) {
				sum += Scratch.Cast.toNumber(data[i]);
			}
			return sum / data.length;
		}
		median(args) {
			if (args.A === "") return 0;
			let data = args.A.toString().split(",");
			if (data.length === 1) return Scratch.Cast.toNumber(data[0]);
			let result = Math.floor(data.length / 2);
			data = data.sort((a, b) => a - b);
			data[result - 1] = Scratch.Cast.toNumber(data[result - 1]);
			data[result] = Scratch.Cast.toNumber(data[result]);
			return data.length % 2 === 1 ? data[result] : data[result - 1] + (data[result] - data[result - 1]) / 2;
		}
		mode(args) {
			const data = args.A.toString().split(",").map(Scratch.Cast.toNumber);
			const frequency = {};
			data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
			const maxFreq = Math.max(...Object.values(frequency));
			const modes = Object.keys(frequency).filter(num => frequency[num] === maxFreq);
			return modes.join(",");
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
