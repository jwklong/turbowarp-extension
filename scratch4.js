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

class Scratch4Storage {
  getInfo() {
    return {
      id: 'jwklongscratch4storage',
      name: 'localStorage - Scratch 4',
      blocks: [
        {
          opcode: 'storageset',
          blockType: Scratch.BlockType.COMMAND,
          text: 'localStorage set [ONE] [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'storage'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'value'
            }
          }
        }
      ]
    };
  }
  storageSet(args) {
    localStorage.setItem("scratch4-"+args.ONE,args.TWO)
  }
}
Scratch.extensions.register(new Scratch4Booleans());
Scratch.extensions.register(new Scratch4Storage());
