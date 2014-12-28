function View(){
  this.$refreshRequestsBtn = $('.refresh-request-list');
  this.$requestsContainer = $('.connect-requests');
}

View.prototype = {
  getRequestData: function(element){
    return { url: element.href, method: $(element).attr('method') };
  },
  renderRequestsList: function(requestsData){
    this.$requestsContainer.empty();
    this.$requestsContainer.append(requestsData);
  }
};
