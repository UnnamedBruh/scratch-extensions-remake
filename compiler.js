(function(Scratch) {
	let code = "", funcs = [], includes = {};
	function addFunction(func, id) {
		if (!includes[id]) {
			funcs.push(func);
			includes[id] = true;
		}
	}
	const funcs = {
		"literals": {
			"string": function(token) {
				return '"' + token.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
			}
		},
		"casts": {
			"string": function(token) {
				if (token[0] === '"' && token[token.length - 1] === '"') {
					return token;
				} else if (/^\d+(\.\d*)?$/.test(token) || token === "false" || token === "true" || token === "null" || token === "undefined" || token === "NaN") {
					return "String(" + token + ")";
				}
			}
		},
		"blocks": {
			"operators_equals": function(args) {
				return args.OPERAND1 + " === " + args.OPERAND2;
			}
		}
	}
	class Extension {
		getInfo() {
			return {
				"id": "unnamedbruhcompilerjavascript",
				"name": "Blocks -> JavaScript",
				"color1": "#A0AA06",
				"color2": "#808803",
				"color3": "#505515",
				"blocks": [
					{
						"opcode": "compile",
						"blockType": "conditional",
						"text": "compile into usable JavaScript"
					}
				]
			}
		}
		compile(_, util) {
			const blocks = Object.keys(util.threads.blockContainer._blocks);
			const program = blocks.find(x => blocks[x].opcode === "unnamedbruhcompilerjavascript_compile");
			return false;
		}
	}
	Scratch.extensions.register(new Extension());
})(Scratch);
