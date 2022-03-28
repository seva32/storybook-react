import React from "react";

function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype?.isReactComponent
  );
}

function isFunctionComponent(component) {
  return typeof component === "function" && !!React.isValidElement(component());
}

export function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component);
}

export function isElement(element) {
  return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === "string";
}

export function isCompositeTypeElement(element) {
  return isElement(element) && typeof element.type === "function";
}

// USE

// CLASS BASED COMPONENT
// class Foo extends React.Component {
// render(){
//     return <h1>Hello</h1>;
// }
// }

// const foo = <Foo />;

//FUNCTIONAL COMPONENT
// function Bar (props) { return <h1>World</h1> }
// const bar = <Bar />;

// REACT ELEMENT
// const header = <h1>Title</h1>;

// CHECK
// isReactComponent(Foo); // true
// isClassComponent(Foo); // true
// isFunctionComponent(Foo); // false
// isElement(Foo); // false

// isReactComponent(<Foo />) // false
// isElement(<Foo />) // true
// isDOMTypeElement(<Foo />) // false
// isCompositeTypeElement(<Foo />) // true

// isReactComponent(Bar); // true
// isClassComponent(Bar); // false
// isFunctionComponent(Bar); // true
// isElement(Bar); // false

// isReactComponent(<Bar />) // false
// isElement(<Bar />) // true
// isDOMTypeElement(<Bar />) // false
// isCompositeTypeElement(<Bar />) // true

// isReactComponent(header); // false
// isElement(header); // true
// isDOMTypeElement(header) // true
// isCompositeTypeElement(header) // false
