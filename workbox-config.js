module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,js,py,sh,png,sql,md,alerts,bundle,txt,mod,sum,go,json,example,ipynb,yaml,tpl,lock,ico,svg,tsx,ts,js_old,dev,conf,yml,crt,key,gotmpl,cjs,dd}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};