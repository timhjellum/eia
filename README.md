# Style Guide


# Powered by:

<img src="http://lesscss.org/public/img/less_logo.png" alt="LESS" width="100" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1280px-Babel_Logo.svg.png" alt="Babel" width="100" /> | <img src="https://s3.amazonaws.com/kajabi-storefronts-production/blogs/3971/images/8ruOp1kKQDuczshP4kX8_webpack.png" alt="Webpack" width="100" />
------------ | ------------ | -------------
[LESS](http://lesscss.org/) | [Babel](https://babeljs.io/) | [Webpack 4](https://webpack.js.org/)

## Install

Clone the repository and run NPM

First, clone the repo via git:

```bash
git clone https://git.eia.gov/oc/design/style-guide.git
```

```bash
$ cd style-guide
```
And then install the dependencies.

1) Run npm install and npm update in the same directory as the package.json file of the application that you want to update.
``` bash
npm install
npm update
```

## Gulp is being phased out but it's still a dependency if you are going to EDIT the style-guide.

2A) Are you upgrading to Gulp 4? If so, you must remove older versions first:
``` bash
npm rm gulp -g
npm rm gulp-cli -g
npm rm gulp --save-dev
npm rm gulp --save
npm rm gulp --save-optional
npm cache clean
```

2B) Install Gulp (no need to install globally)
``` bash
npm install gulp --save-dev
npm install gulp-cli --save-dev
gulp -v
```

4) Run the server 
``` bash
npm run gulp watch
```

## Packaging global.min.js and global.min.css for Production

```bash
$ npm run build
```
```
.
└── dist_global
	├── global.min.js
	└── global.min.css
```
## Packaging the style-guide files for Production

```bash
$ npm run build
```
```
.
└── dist_styles
	├── assets
	│   └── images
	├── scripts.min.js
	├── styles.min.css
	├── index.html
	├── base
	│	├── color-palette.html
	│	├── forms-no-script.html
	│	├── forms.html
	│	├── icons.html
	│	├── index.html
	│	├── size-conversions.html
	│	├── symbols.html
	│	└── typography.html
	├── components
	│	├── index.html
	│	├── page-content.html
	│	├── slider-home.html
	│	├── slider-multi-cards.html
	│	└── sub-navigation.html
	├── examples
	│ 	├── contact-formatting.html
	│	├── frequently-asked-questions-example-1.html
	│	├── frequently-asked-questions-example-2.html
	│	├── home-slider.html
	│	├── index.html
	│	├── multi-card-slider.html
	│	├──sub-navigation.html
	│	├── template.html
	│	├── template2.html
	│	└── test.html
	├── modules
	│	├── accordion.html
	│	├── banners.html
	│	├── contact.html
	│	├──content-containers-home.html
	│	├── delete.html
	│	├── energy-education.html
	│	├── fancybox.html
	│	├── forms.html
	│	├── home-modules.html
	│	├── images.html
	│	├── index.html
	│	├── lists.html
	│	├── page-titles.html
	│	├── primary-content-containers.html
	│	├── report-headers.html
	│	├── reusable-modules.html
	│	├── secondary-containers.html
	│	├── side-content-containers.html
	│	├── tables.html
	│	├── tabs.html
	│	├── template.html
	│	├── ufig3.html
	│	└── visulizations.html
	├── layouts
	│	├── examples.html
	│	├── full-page-examples.html
	│	├── index.html
	│	├── nested-examples.html
	│	└──row-examples.html
	├── states
	│	├── empty-list-items.html
	│	└──index.html
	│	├──links-list.html
	│	├── sticky-table-headers.html
	│	├── toggle.html
	│	└── _empty-list-items.html
	└── themes
		├── accordion-list.html
		├── article.html
		├── faqs.html
		├── index.html
		└──themes.html
```


## Directory Structure
```bash
.
├── app
│   └── assets
│       ├── images
│       ├── scripts
│       │   ├── .js
│       │   └── modules
│       └── styles
│           ├── .css
│           └── less
│               └── .less
├── gulp
│   └── tasks
│       └── build.js
│       └── watch.js
├── .gitignore
├── .babelrc
├── gulpfile.js
├── package-lock.json
├── package.json
├── webpack.config
└── README.md
```

## Watch
When a .js file or .less file is updated

```bash
assets
   └── Temp
       ├── scripts
       │   └── scripts.min.js
       └── styles
           └── stylesmin.css
```

## Build
``` bash
gulp build
```

Output production files and folder structure for the web:

```bash
app					# App folder
   └── dist                     	# Dist folder
       ├── assets			# Assets folder
       │   ├── images			# Images folder
       │   └── fonts			# Fonts file
       ├── scripts			# Scripts folder
       │   └── scripts.min.js	    	# Minimized scripts file
       ├── styles			# Styles folder
       │   └── stylesmin.css	    	# Minimized styles file
	   └── index.html		# Index file
```


## Package Structure
NPM Package | Version | Description
------------ | ------------- | -------------


## To do
- 
