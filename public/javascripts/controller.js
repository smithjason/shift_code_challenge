function Controller(view, async){
  this.view = view;
  this.async = async;
  var self = this;

  this.bindEventListeners = function(){
    $refreshRequestsListBtn = this.view.$refreshRequestsBtn;
    $refreshRequestsListBtn.on('click', this.refreshRequestsListHandler);
  };

  this.refreshRequestsListHandler = function(e){
    e.preventDefault();
    var element = e.currentTarget;
    var options = self.view.getRequestData(element);
    var ajaxRequest = self.async.makeRequest(options);
    ajaxRequest.done(self.updateRequestsList);
  };

  this.updateRequestsList = function(requestsData){
    self.view.renderRequestsList(requestsData);
  };
}
