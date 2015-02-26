Router.configure({
   layoutTemplate: 'layout',
   yieldTemplate: {
      header: {
         to: 'header'
      },
      footer: {
         to: 'footer'
      }
   }
});

Router.route('/', {
 name: 'about'
}, function () {
 this.render('about');
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
