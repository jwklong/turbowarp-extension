class Scratch4 {
  getInfo() {
    return {
      id: 'jwklongscratch4',
      name: 'Scratch 4',
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
    return args.ONE === args.TWO;
  }
  xor(args) {
    return (args.ONE || args.TWO) && !(args.ONE === args.TWO);
  }
  one() {
    return true;
  }
  zero() {
    return false;
  }
}
Scratch.extensions.register(new Scratch4());
