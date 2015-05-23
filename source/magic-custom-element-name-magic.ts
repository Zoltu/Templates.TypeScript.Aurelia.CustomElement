import { customElement, useView, inject } from 'aurelia-framework';
import './magic-custom-element-name-magic.css!';

@customElement('magic-custom-element-name-magic')
@useView('./magic-custom-element-name-magic.html')
export class magic_CustomElementName_magic {
	heading: string = "Hello world!";
}
