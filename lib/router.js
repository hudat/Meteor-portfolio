Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'root',
    action: function() {
        if (this.ready())
            this.render('root')
        else
            this.render('loading');
    }
});

Router.route('/about', {
  name: 'about',
  data: function() {
    return Quotes.find();
  },
  waitOn: function () {
    return Meteor.subscribe('quotes')
  },
action: function () {
  if (this.ready())
     this.render('about');
   else
     this.render('loading');
  }
});


Router.route('/writing', {
    name: 'writing',
    data: function() {
        return Quotes.find();
    },
    waitOn: function () {
        return [
            Meteor.subscribe('posts'),
            Meteor.subscribe('books')
        ]
    },
    action: function () {
        if (this.ready())
            this.render('writing');
        else
            this.render('loading');
    }
});


Router.route('/writing/psychology-driven-design', {
    name: 'psych-driven-ux',
    waitOn: function () {
        return Meteor.subscribe('books')
    },
    action: function () {
        if (this.ready())
            this.render('books');
        else
            this.render('loading');
    }
});


Router.route('/work', {
 name: 'work',
 data: function() {
   return Cases.findOne({_id: this.params._id});
 },
 waitOn: function() {
   return Meteor.subscribe('cases');
 },
 action: function() {
   if (this.ready())
     this.render('work')
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
      var data = Cases.findOne({"slug": this.params.slug});
      if (data) {
        return data;
      }
    },
    action: function() {
      if (this.ready())
        this.render('case')
      else
        this.render('loading');
    }
  });

//Router.route('/method', {
// name: 'method'
//}, function () {
//  if (this.ready())
//     this.render('method')
//   else
//     this.render('loading');
//});
//
//Router.route('/photos', {
// name: 'photos'
//}, function () {
//  if (this.ready())
//     this.render('photos')
//   else
//     this.render('loading');
//});

Router.onBeforeAction('dataNotFound', {only: 'case'});

Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
};

var filters = Router._filters;

if(Meteor.isClient) {
  Router.onAfterAction(filters.resetScroll); // for all pages
}
