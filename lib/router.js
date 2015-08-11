Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading',
});

Router.route('/', {
  name: 'about',
  data: function() {
    return Quotes.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('quotes'),
      Meteor.subscribe('posts')
    ]
  },
action: function () {
  if (this.ready())
     this.render('about');
   else
     this.render('loading');
  }
});

Router.route('/portfolio', {
 name: 'portfolio',
 data: function() {
   return Cases.findOne({_id: this.params._id});
 },
 waitOn: function() {
   return Meteor.subscribe('cases');
 },
 action: function() {
   if (this.ready())
     this.render('portfolio')
   else
     this.render('loading');
}
});

// Case Study Route

Router.route('case', {
  name: 'case',
  path: '/portfolio/:slug',
  template: 'case',
  subscriptions: function() {
      return Meteor.subscribe('case', this.params.slug);
    },
    data: function() {
      var post = Posts.findOne({"slug": this.params.slug});
      if (post) {
        return post;
      }
    },
    action: function() {
      if (this.ready())
        this.render('case')
      else
        this.render('loading');
    }
  });
/*
Router.route('/cases/:_id', {
  name: 'case',
  data: function() {
    return Cases.findOne({_id: this.params._id});
  },
  waitOn: function() {
    return Meteor.subscribe('cases');
  },
  action: function() {
    if (this.ready())
      this.render('case')
    else
      this.render('loading');
  }
});
*/

Router.route('/method', {
 name: 'method'
}, function () {
  if (this.ready())
     this.render('method')
   else
     this.render('loading');
});

Router.route('/photos', {
 name: 'photos'
}, function () {
  if (this.ready())
     this.render('photos')
   else
     this.render('loading');
});

Router.onBeforeAction('dataNotFound', {only: 'case'});
