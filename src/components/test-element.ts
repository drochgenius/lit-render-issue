import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('test-element')
export class TestElement extends LitElement {
    @property() bar: string;

    protected render(): TemplateResult {
        return html`<div class="foo">${this.bar}</div>`;
    }

    public alterTemplateProgrammatically(content: string): void {
        this.shadowRoot.querySelector('.foo').innerHTML = content;
    }
}
