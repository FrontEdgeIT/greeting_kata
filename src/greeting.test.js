import { HelloWorld } from './greeting'


it('returns hello world', () => {
    expect(HelloWorld()).toEqual("Hello World");
});