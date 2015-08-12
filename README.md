# Meteor Portfolio App

A mobile-first web app for showcasing your experience and work. Built in Meteor.

Demo here: [husammachlovi.com](http://husammachlovi.com).

<!-- toc -->

* [Roadmap](#roadmap)
  * [Features](#features)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

<!-- toc stop -->

## Roadmap

### Features

* Breadcrumb based footer navigation
* Lightbox
* Newsletter subscription
* Overlay menu

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:hudat/Meteor-portfolio.git
cd Meteor-portfolio
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

### SEO and other concerns

> Meteor cannot do SEO

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. Use constants under
__client/lib/constants.js__ for the app. Change SEO settings inside the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to
__server/config/security.js__

```javascript
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) and
[matteodem:easy-security](https://github.com/matteodem/meteor-easy-security) have also been added.

## Structure

### Packages used

* Meteor Core
  * standard-app-packages
* Routing
  * iron:router
  * zimme:iron-router-active
* UI and UX
  * semantic:ui-css
  * chrismbeckett:fontawesome4
  * linto:fontawesome
  * jQuery

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder (All views)
  main
  stylesheets           # LESS stylesheets
  templates             # Contains all templates
    layouts             # Router layouts
    modules             # UI components (common elements)
    views               # All the views
public/                 # Public files
lib/                    # Collections & routes
server/				          # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    publications/       # All publications
    startup/            # On server startup
```

(*) = the command line tool creates files in these folders

## License
This project has an MIT License, see the LICENSE.txt for more information.
