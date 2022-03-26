class JwklongExtension {
  getInfo() {
    return {
      id: 'jwklongextension', // change this if you make an actual extension!
      name: 'TBD',
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
  testVar() {
    return "the testing moment";
  }
}
Scratch.extensions.register(new JwklongExtension());
