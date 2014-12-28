$(document).ready(function(){
  var view = new View();
  var api = new API();
  var controller = new Controller(view, api);

  controller.bindEventListeners();
});
