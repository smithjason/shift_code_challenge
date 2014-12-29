$(document).ready(function(){
  var view = new View();
  var async = new Async();
  var controller = new Controller(view, async);

  controller.bindEventListeners();
  view.$refreshRequestsBtn.trigger('click');
});
