$(document).ready(function(){
  var view = new View();
  var api = new API();
  var
  var controller = new Controller(view, api);

  controller.bindEventListeners();
});
