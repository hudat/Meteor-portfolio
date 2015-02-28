Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading',
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
  if (this.ready())
     this.render('portfolio')
   else
     this.render('loading');
});

Router.route('method', {
 name: 'method'
}, function () {
  if (this.ready())
     this.render('method')
   else
     this.render('loading');
});

Router.route('photos', {
 name: 'photos'
}, function () {
  if (this.ready())
     this.render('photos')
   else
     this.render('loading');
});
