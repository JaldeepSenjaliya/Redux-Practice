import {compose, pipe} from "lodash/fp";

function sayHello() {
  return "Hello World!";
}


const input = "     JavaScript         ";
const trim = str => str.trim();

const wrap = (type, str)=> `<${type}>${str}</${type}>`;

const lowerCase = str => str.toLowerCase();

const transform = pipe(trim, lowerCase, wrap("div", "hello "));
console.log(wrap("span", "Hello World"));

console.log(transform(input));