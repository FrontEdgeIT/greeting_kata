import { greet } from "./greeting";

/* global it expect */
it("returns customized greeting depending on input", () => {
  expect(greet("Bob")).toEqual(`Hello, Bob`);
});

it("return Hello, My Friend when input is null", () => {
  expect(greet(null)).toEqual(`Hello, my friend`);
});

it("returns upper case string when input is uppercase", () => {
  expect(greet("JIMMY")).toEqual(`HELLO, JIMMY`);
});

it("returns greeting with both names if input is array", () => {
  expect(greet(["Bob", "Jane"])).toEqual(`Hello, Bob and Jane`);
});

it("returns all names in the greeting when input is array bigger than two", () => {
  expect(greet(["Bob", "Jane", "Jill"])).toEqual(`Hello, Bob, Jane, and Jill`);
});

it("p", () => {
  expect(greet(["Bob", "Jane", "Jill"])).toEqual(`Hello, Bob, Jane, and Jill`);
});
