Router.route('/about');
Router.route('/team');
Router.route('/journal');
Router.route('contact');
Router.route('/', {
  name:'home',
  template:'home'
});
Router.configure({
	layoutTemplate:'main'
});
Router.route('/loiras');
Router.route('/morenas');
Router.route('/ruivas');