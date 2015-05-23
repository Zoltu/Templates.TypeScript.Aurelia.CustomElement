export function configure(aurelia: any) {
	aurelia.use.standardConfiguration();
	aurelia.globalizeResources('output/magic-custom-element-name-magic')
	aurelia.start().then((a: any) => a.setRoot('output-sample/app', document.body));
}
