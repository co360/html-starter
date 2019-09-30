== ckeditor-learn

This is where we can explore each small built-in features.

== Custom Build (classidc)

https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html

	# Forked it in my own repo
	git clone https://github.com/zemian/ckeditor5-build-classic
	npm install
	npm run build

	# Upstream for pulling future updates
	git remote add upstream https://github.com/ckeditor/ckeditor5-build-classic.git
	git pull upstream stable

Every build contains the following files:

	build/ckeditor.js – The ready-to-use editor bundle, containing the editor and all plugins.
	src/ckeditor.js – The source entry point of the build. Based on it the build/ckeditor.js file is created by webpack. It defines the editor creator, the list of plugins and the default configuration of a build.
	webpack-config.js – webpack configuration used to build the editor.
