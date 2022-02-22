export enum NumType {
  One = 1,
  Two = 2,
  Three,
  Zero = 0,
  Four = One + Three,
  Five = Four + 1,
  LessThanSix = Zero || One || Two || Three || Four || Five,
  None = null,
}

export enum StrType {
  One = 'One',
  Two = 'Two',
}

const a = NumType.None;
console.log(!!a);
