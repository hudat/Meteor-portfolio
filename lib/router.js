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
    this.route('projects');
});
