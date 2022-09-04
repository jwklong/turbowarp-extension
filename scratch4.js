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
          opcode: 'variableGet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'variable get [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            }
          }
        }
      ]
    };
  }
  array: {}
  variableSet(args) {
    array[args.ONE] = args.TWO
  }
  variableGet(args) {
    return array[args.ONE]
  }
}
Scratch.extensions.register(new Scratch4Booleans());
Scratch.extensions.register(new Scratch4Arrays());
