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

Router.map(function() {
    this.route('method');
    this.route('about', {path: '/'});
    this.route('modal');
    this.route('photos');
    this.route('portfolio');
    this.route('withpulp', {path: 'portfolio/withpulp'});
    this.route('rubyblanc', {path: 'portfolio/rubyblanc'});
    this.route('2infuse', {path: 'portfolio/2infuse'});
});
