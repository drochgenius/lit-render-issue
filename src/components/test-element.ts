import { LitElement, html, TemplateResult, render } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("test-element")
export class TestElement extends LitElement {
  @property() bar: string;

  protected render(): TemplateResult {
    render(html`<div class="foo">${this.bar}</div>`, this);

    return html`<h3>In the shadow DOM</h3>
      <slot></slot>`;
  }

  public alterTemplateProgrammatically(content: string): void {
    this.querySelector(".foo").innerHTML = content;
  }
}
