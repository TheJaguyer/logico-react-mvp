class GATE {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
}

class AND extends GATE {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'AND';
    this.inputs = [false, false];
    this.outputs = [this.inputs[0] & this.inputs[1]];
    this.outPos = [[25, 0]];
    this.inPos = [
      [-25, 5],
      [-25, -5],
    ];
  }
}

class OR extends GATE {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'OR';
    this.inputs = [false, false];
    this.outputs = [this.inputs[0] || this.inputs[1]];
    this.outPos = [[25, 0]];
    this.inPos = [
      [-25, 5],
      [-25, -5],
    ];
  }
}

class BUFFER extends GATE {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'BUFFER';
    this.inputs = [false];
    this.outputs = [this.inputs[0]];
    this.outPos = [[25, 0]];
    this.inPos = [[-25, 0]];
  }
}

class NAND extends AND {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'NAND';
    this.outputs = [!(this.inputs[0] & this.inputs[1])];
  }
}

class NOR extends OR {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'OR';
    this.outputs = [!(this.inputs[0] || this.inputs[1])];
  }
}

class NOT extends BUFFER {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'NOT';
    this.outputs = [!this.inputs[0]];
  }
}

class XNOR extends NOR {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'XNOR';
    this.outputs = [this.inputs[0] === this.inputs[1]];
  }
}

class XOR extends OR {
  constructor(id, x, y) {
    super(id, x, y);
    this.name = 'XOR';
    this.outputs = [this.inputs[0] ? !this.inputs[1] : this.inputs[1]];
  }
}

let gates = {
  AND: AND,
  OR: OR,
  BUFFER: BUFFER,
  NAND: NAND,
  NOR: NOR,
  NOT: NOT,
  XNOR: XNOR,
  XOR: XOR,
};

export default gates;
