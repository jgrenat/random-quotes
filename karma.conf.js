module.exports = function(config) {
  config.set({
	
	proxies: {
		'/base': '/base/src',
	},

    frameworks: ['jspm', 'mocha'],
	
	jspm: {
		config: "src/jspm-config.js",
		packages: '/src/jspm_packages',
		serveFiles: [
			'src/**/*.js',
			'src/**/*.json',
			'src/**/*.hbs',
		],
		loadFiles: [
			'src/**/tests/**/*.test.js'
		]
	},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,
	
    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
