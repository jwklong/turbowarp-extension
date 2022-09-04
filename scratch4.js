class Scratch4Booleans {
  getInfo() {
    return {
      id: 'jwklongscratch4booleans',
      name: 'Booleans - Scratch 4',
      blocks: [
        {
          opcode: 'strictEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] === [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'xor',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] xor [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.BOOLEAN,
            },
            TWO: {
              type: Scratch.ArgumentType.BOOLEAN,
            }
          }
        },
        {
          opcode: 'one',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true',
        },
        {
          opcode: 'zero',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false',
        }
      ]
    };
  }
  strictEquals(args) {
    return args.ONE === args.TWO
  }
  xor(args) {
    return (args.ONE || args.TWO) && !(args.ONE === args.TWO)
  }
  one() {
    return true
  }
  zero() {
    return false
  }
}
let Scratch4Array = {}
class Scratch4Arrays {
  getInfo() {
    return {
      id: 'jwklongscratch4arrays',
      name: 'Arrays - Scratch 4',
      blocks: [
        {
          opcode: 'variableSet',
          blockType: Scratch.BlockType.COMMAND,
          text: 'variable set [ONE] [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'value'
            }
          }
        },
        {
          opcode: 'arrayMake',
          blockType: Scratch.BlockType.COMMAND,
          text: 'array make [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            }
          }
        },
        {
          opcode: 'arraySet',
          blockType: Scratch.BlockType.COMMAND,
          text: 'array set [ONE] [TWO] [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'array'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'value'
            }
          }
        },
        {
          opcode: 'variableGet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'variable get [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            }
          }
        },
        {
          opcode: 'arrayGet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'array get [ONE] [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'array'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            }
          }
        },
        {
          opcode: 'arrayReturn',
          blockType: Scratch.BlockType.REPORTER,
          text: 'array return [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'array'
            }
          }
        }
      ]
    };
  }
  variableSet(args) {
    Scratch4Array[args.ONE] = args.TWO
  }
  variableGet(args) {
    if (!Scratch4Array[args.ONE]) {return null}
    return Scratch4Array[args.ONE]
  }
  arrayMake(args) {
    Scratch4Array[args.ONE] = {}
  }
  arraySet(args) {
    if (!Scratch4Array[args.ONE]) {return}
    Scratch4Array[args.ONE][args.TWO] = args.THREE
  }
  arrayGet(args) {
    if (!Scratch4Array[args.ONE] || !Scratch4Array[args.ONE][args.TWO]) {return null}
    return Scratch4Array[args.ONE][args.TWO]
  }
  arrayReturn(args) {
    if (!Scratch4Array[args.ONE]) {return null}
    return Scratch4Array[args.ONE]
  }
}
class Scratch4Strings {
  getInfo() {
    return {
      id: 'jwklongscratch4strings',
      name: 'Strings - Scratch 4',
      blocks: [
        {
          opcode: 'split',
          blockType: Scratch.BlockType.REPORTER,
          text: 'split [ONE] by [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'string'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'seperator'
            }
          }
        },
        {
          opcode: 'replace',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace all [ONE] in [TWO] with [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'symbol'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'string'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'symbol'
            }
          }
        },
      ]
    };
  }
  split(args) {
    return args.ONE.split(args.TWO)
  }
  replace(args) {
    return args.TWO.replaceAll(args.ONE, args.THREE)
  }
}
class Scratch4Quirks {
  getInfo() {
    return {
      id: 'jwklongscratch4quirks',
      name: 'Quirks - Scratch 4',
      blocks: [
        {
          opcode: 'quirkifvariable',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [ONE] [TWO]\nelse [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.BOOLEAN,
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'string'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'string'
            }
          }
        },
       ]
    }
  }
}
Scratch.extensions.register(new Scratch4Booleans());
Scratch.extensions.register(new Scratch4Arrays());
Scratch.extensions.register(new Scratch4Strings());
Scratch.extensions.register(new Scratch4Quirks());
