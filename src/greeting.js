export default function HelloWorld() {
  return "Hello World";
}

/** @param {string | string[]} name */
export function greet(name) {
  if (name === null) {
    return "Hello, my friend";
  }
  if (name instanceof Array) {
    if (name.length === 2) {
      return `Hello, ${name[0]} and ${name[1]}`;
    }
    if (name.length > 2) {
      const last = name[name.length - 1];
      const init = name.slice(0, name.length - 1);
      return `Hello, ${init.join(", ")}, and ${last}`;
    }
  }
  if (name === name.toLocaleUpperCase()) {
    return `HELLO, ${name}`;
  }
  return `Hello, ${name}`;
}
