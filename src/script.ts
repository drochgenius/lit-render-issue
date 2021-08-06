import { TestElement } from "./components/test-element";
const element = document.querySelector<TestElement>("test-element");

element.alterTemplateProgrammatically("foo");
element.bar = "bar";
