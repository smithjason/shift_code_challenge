function Controller(view, api){
  this.view = view;
  this.api = api;
  var self = this;
  console.log(self);

  this.bindEventListeners = function(){
    $refreshRequestsListBtn = this.view.$refreshRequestsBtn;

    $refreshRequestsListBtn.on('click', this.refreshRequestsListHandler);
  };

  this.refreshRequestsListHandler = function(e){
    e.preventDefault();
    var element = e.currentTarget;
    var options = self.view.getRequestData(element);
    var ajaxRequest = self.api.makeRequest(options);
    ajaxRequest.done(self.updateRequestsList);
  };

  this.updateRequestsList = function(requestsData){
    console.log('INSIDE Controller#updateRequestsList');
    self.view.renderRequestsList(requestsData);
  };
}
