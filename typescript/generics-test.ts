function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(params: T[]) {
  console.log(params.length);
  return params;
}

function loggingIdentity2<T>(params: Array<T>) {
  return params;
}

function gen<T>(params: T) {
  return params;
}

let myGen: <T>(params: T) => T = gen;
let myGen2: <U>(p: U) => U = gen;

let myGen3: { <U>(arg: U): U } = gen;

interface InterfaceGen {
  <T>(arg: T): T;
}

let myGen4: InterfaceGen = gen;

interface InterfaceGen2<T> {
  (arg: T): T[];
}

function getGeneric<V, K extends keyof V>(key: K, obj: V) {
  return obj[key];
}
const obj = { a: 1, b: 2, abc: false };
const r = getGeneric("a", obj);
console.log(r);

function create<T>(c: { new (): T }) {
  return new c();
}

class Animal {
  numLegs: number;
}

class Monkey extends Animal {
  name: string;
}

function createInstance<T extends Animal>(c: new () => T) {
  return new c();
}


createInstance(Monkey)