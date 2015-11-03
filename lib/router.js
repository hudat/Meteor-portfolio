Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'root',
    data: function() {
      return Quotes.find();
    },
    waitOn: function () {
      return Meteor.subscribe('quotes')
    },
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
    return [
        Meteor.subscribe('clients'),
        Meteor.subscribe('quotes')
    ]
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
            Meteor.subscribe('books'),
            Meteor.subscribe('quotes')
        ]
    },
    action: function () {
        if (this.ready())
            this.render('writing');
        else
            this.render('loading');
    }
});


//Router.route('/writing/psychology-driven-design', {
//    name: 'psych-driven-ux',
//    waitOn: function () {
//        return [
//          Meteor.subscribe('books'),
//          Meteor.subscribe('readinglog')
//        ]
//    },
//    action: function () {
//        if (this.ready())
//            this.render('book');
//        else
//            this.render('loading');
//    }
//});

Router.route('/work', {
 name: 'work',
 data: function() {
     return Quotes.find();
 },
 waitOn: function() {
   return [
      Meteor.subscribe('clients'),
      Meteor.subscribe('quotes')
   ]
 },
 action: function() {
   if (this.ready())
     this.render('work')
   else
     this.render('loading');
}
});

Router.route('/quotes', {
 name: 'quotes',
 data: function() {
     return Quotes.find();
 },
 waitOn: function() {
   return [
      Meteor.subscribe('quotes')
   ]
 },
 action: function() {
   if (this.ready())
     this.render('quotes')
   else
     this.render('loading');
}
});

Router.route('/reading', {
  name: 'reading',
  waitOn: function () {
    return [
      Meteor.subscribe('reviews'),
      Meteor.subscribe('readinglog'),
      Meteor.subscribe('quotes')
    ]
  },
action: function () {
  if (this.ready())
     this.render('reading');
   else
     this.render('loading');
  }
});

// Router.route('/portfolio', {
//  name: 'work',
//  data: function() {
//    return Cases.findOne({_id: this.params._id});
//  },
//  waitOn: function() {
//    return Meteor.subscribe('clients');
//  },
//  action: function() {
//    if (this.ready())
//      this.render('work')
//    else
//      this.render('loading');
// }
// });


// Router.route('case', {
//   name: 'case',
//   path: '/portfolio/:slug',
//   template: 'case',
//   subscriptions: function() {
//       return Meteor.subscribe('case', this.params.slug);
//     },
//     data: function() {
//       var data = Cases.findOne({"slug": this.params.slug});
//       if (data) {
//         return data;
//       }
//     },
//     action: function() {
//       if (this.ready())
//         this.render('case')
//       else
//         this.render('loading');
//     }
//   });

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
