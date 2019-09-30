== The `ckeditor-learn` - learning ckeditor by examples

This is where we can explore each small built-in features.

== The `ckeditor5-build-classic` - build classic editor

https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html

The guide recommend fork the official classic build and then add modifications as needed.

```
	# Forked it in my own repo
	git clone https://github.com/zemian/ckeditor5-build-classic
	npm install
	npm run build

	# Upstream for pulling future updates
	git remote add upstream https://github.com/ckeditor/ckeditor5-build-classic.git
	git pull upstream stable
```

Every build contains the following files:

```
	build/ckeditor.js – The ready-to-use editor bundle, containing the editor and all plugins.
	src/ckeditor.js – The source entry point of the build. Based on it the build/ckeditor.js file is created by webpack. It defines the editor creator, the list of plugins and the default configuration of a build.
	webpack-config.js – webpack configuration used to build the editor.
```

== The `framework-quick-start` - setup and build classic editor using framework (minimal)

See `framework-quick-start/readme.md`
