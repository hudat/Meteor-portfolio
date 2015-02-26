Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: {
   }
});

Router.route('/', {
name: 'about'
}, function () {
  if (this.ready())
     this.render('about')
   else
     this.render('loading');
});

Router.route('portfolio', {
 name: 'portfolio'
}, function () {
 this.render('portfolio');
});

Router.route('method', {
 name: 'method'
}, function () {
 this.render('method');
});

Router.route('photos', {
 name: 'photos'
}, function () {
 this.render('photos');
});
