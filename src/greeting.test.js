/* eslint-disable import/named */
import { HelloWorld } from "./greeting";

/* global it expect */
it("returns hello world", () => {
  expect(HelloWorld()).toEqual("Hello World");
});
