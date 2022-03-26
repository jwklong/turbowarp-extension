class JwklongExtension {
  getInfo() {
    return {
      id: 'jwklongextension', // change this if you make an actual extension!
      name: 'Extras',
      blocks: [
        {
          opcode: 'strictEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] === [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },{
          opcode: 'lowerString',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Lower [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'String'
            }
          }
        },{
          opcode: 'upperString',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Upper [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'String'
            }
          }
        },{
          opcode: 'powerOperator',
          text: '[ONE] ^ [TWO]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },{
          opcode: 'testVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Testing Variable'
        }
      ]
    };
  }
  strictEqual(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
  lowerString(args) {
    return args.STRING.toLowerCase()
  }
  upperString(args) {
    return args.STRING.toUpperCase()
  }
  powerOperator(args) {
    return args.ONE ^ args.TWO
  }
  testVar() {
    return "the testing moment";
  }
}
Scratch.extensions.register(new JwklongExtension());
