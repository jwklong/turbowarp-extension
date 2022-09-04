class Scratch4 {
  getInfo() {
    return {
      id: 'jwklong_scratch4',
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
        }
      ]
    };
  }
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  xor(args) {
    return (args.ONE || args.TWO) && !(args.ONE === args.TWO);
  }
}
Scratch.extensions.register(new Scratch4());
