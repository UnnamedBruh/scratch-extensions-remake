// Name: Mathematical Concepts
// Author: Unnamedbruh
// GitHub: https://github.com/UnnamedBruh
// Scratch: https://scratch.mit.edu/users/UnnamedBruhScratch
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
						"opcode": "interpolate",
						"blockType": "reporter",
						"text": "interpolate [A] - [B] from [C]",
						"arguments": {
							"A": {
								"type": "number",
								"defaultValue": "2"
							},
							"B": {
								"type": "number",
								"defaultValue": "10"
							},
							"C": {
								"type": "number",
								"defaultValue": "0.5"
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
						"opcode": "khinchin",
						"blockType": "reporter",
						"text": "k"
					},
					{
						"opcode": "catalan",
						"blockType": "reporter",
						"text": "g"
					},
					{
						"opcode": "feigenbaum1",
						"blockType": "reporter",
						"text": "δ"
					},
					{
						"opcode": "feigenbaum2",
						"blockType": "reporter",
						"text": "α"
					},
					{
						"opcode": "",
						"blockType": "label",
						"text": "Custom Constants"
					},
					{
						"opcode": "maxFloat",
						"blockType": "reporter",
						"text": "M"
					},
					{
						"opcode": "preciseLimit",
						"blockType": "reporter",
						"text": "PL"
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
					},
					'---',
					{
						"opcode": "standardDeviation",
						"blockType": "reporter",
						"text": "standard deviation of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "variance",
						"blockType": "reporter",
						"text": "variance of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "skewness",
						"blockType": "reporter",
						"text": "skewness of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "kurtosis",
						"blockType": "reporter",
						"text": "kurtosis of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					'---',
					{
						"opcode": "sum",
						"blockType": "reporter",
						"text": "sum of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
							}
						}
					},
					{
						"opcode": "diff",
						"blockType": "reporter",
						"text": "progressive difference of [A]",
						"arguments": {
							"A": {
								"type": "string",
								"defaultValue": "8,7,2,1,12"
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
		interpolate(args) {
			args.A = Scratch.Cast.toNumber(args.A);
			return args.A + (Scratch.Cast.toNumber(args.B) - args.A) * Scratch.Cast.toNumber(args.C);
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
		khinchin() {
			return 2.6854520010653062;
		}
		catalan() {
			return 0.915965594177219;
		}
		feigenbaum1() {
			return 4.66920160910299;
		}
		feigenbaum2() {
			return 2.5029078750958926;
		}
		maxFloat() {
			return 1.7976931348623157;
		}
		preciseLimit() {
			return 18.997896403852554;
		}
		infinity() {
			return Infinity;
		}
		nan() {
			return NaN;
		}
		range(args) {
			if (args.A.toString().trim() === "") return 0;
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
			if (args.A.toString().trim() === "") return NaN;
			const data = args.A.toString().split(",");
			if (data.length === 1) return Scratch.Cast.toNumber(data[0]);
			let sum = 0;
			for (let i = 0; i < data.length; i++) {
				sum += Scratch.Cast.toNumber(data[i]);
			}
			return sum / data.length;
		}
		median(args) {
			if (args.A.toString().trim() === "") return 0;
			let data = args.A.toString().split(",");
			if (data.length === 1) return Scratch.Cast.toNumber(data[0]);
			let result = Math.floor(data.length / 2);
			data = data.sort((a, b) => +a - +b);
			data[result - 1] = Scratch.Cast.toNumber(data[result - 1]);
			data[result] = Scratch.Cast.toNumber(data[result]);
			return (data.length % 2) === 1 ? data[result] : (data[result - 1] + data[result]) / 2;
		}
		mode(args) {
			if (args.A.toString().trim() === "") return 0;
			const data = args.A.toString().split(",").map(Scratch.Cast.toNumber);
			if (data.length === 1) return data[0];
			const frequency = {};
			for (const num of data) {
				frequency[num] = (frequency[num] || 0) + 1;
			}
			const maxFreq = Math.max(...Object.values(frequency));
			const modes = Object.keys(frequency).filter(num => frequency[num] === maxFreq);
			return modes.join(",");
		}
		standardDeviation(args) {
			if (args.A.toString().trim() === "") return 0;
			const data = args.A.toString().split(",").map(Scratch.Cast.toNumber);
			if (data === 1) return 0;
			const mean = this.mean({ A: args.A });
			const squaredDiffs = data.map(x => Math.pow(x - mean, 2));
			const avgSquaredDiff = this.mean({ A: squaredDiffs.join(",") });
			return Math.sqrt(avgSquaredDiff);
		}
		variance(args) {
			if (args.A.toString().trim() === "") return 0;
			const data = args.A.toString().split(",").map(Scratch.Cast.toNumber);
			if (data === 1) return 0;
			const mean = this.mean({ A: args.A });
			const squaredDiffs = data.map(x => Math.pow(x - mean, 2));
			return this.mean({ A: squaredDiffs.join(",") });
		}
		skewness(args) {
			if (args.A.toString().trim() === "") return NaN;
			const data = args.A.toString().split(",").map(Scratch.Cast.toNumber);
			if (data === 1) return NaN;
			const mean = this.mean({ A: args.A });
			const n = data.length;
			const m3 = data.reduce((acc, x) => acc + Math.pow(x - mean, 3), 0) / n;
			const stdDev = this.standardDeviation({ A: args.A });
			return (n * m3) / Math.pow(stdDev, 3);
		}
		kurtosis(args) {
			if (args.A.toString().trim() === "") return NaN;
			const data = args.A.toString().split(",").map(Scratch.Cast.toNumber);
			if (data === 1) return NaN;
			const mean = this.mean({ A: args.A });
			const n = data.length;
			const m4 = data.reduce((acc, x) => acc + Math.pow(x - mean, 4), 0) / n;
			const stdDev = this.standardDeviation({ A: args.A });
			return (n * m4) / Math.pow(stdDev, 4) - 3;
		}
		sum(args) {
			if (args.A.toString().trim() === "") return 0;
			const data = args.A.toString().split(",");
			if (data.length === 1) return Scratch.Cast.toNumber(data[0]);
			let sum = 0;
			for (let i = 0; i < data.length; i++) {
				sum += Scratch.Cast.toNumber(data[i]);
			}
			return sum;
		}
		diff(args) {
			if (args.A.toString().trim() === "") return 0;
			const data = args.A.toString().split(",");
			if (data.length === 1) return Scratch.Cast.toNumber(data[0]);
			let diff = Scratch.Cast.toNumber(data[0]);
			for (let i = 1; i < data.length; i++) {
				diff = Math.abs(diff - Scratch.Cast.toNumber(data[i]));
			}
			return diff;
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
