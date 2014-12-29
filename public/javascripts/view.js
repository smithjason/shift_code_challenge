function View(){
  this.$refreshRequestsBtn = $('.refresh-request-list');
  this.$requestsContainer = $('.connect-requests .table-content');
  this.$requestsMinutesWaiting = $('.connect-requests .minutes-waiting');
  var self = this;

  this.getRequestData = function(element){
    return {
      url: element.href,
      method: $(element).attr('method')
    };
  };

  this.renderRequestsList = function(requestsData){
    this.$requestsContainer.empty();
    this.$requestsContainer.append(requestsData);
    this.colorizeMinutesWaiting();
  };

  this.colorizeMinutesWaiting = function(){
    $('.connect-requests .minutes-waiting').each(function(i,obj){
      console.log('INSIDE each loop');
      if(obj.innerHTML > 10){
        $(obj).addClass('time-ten-plus');
      } else if(obj.innerHTML >= 5){
        $(obj).addClass('time-five-to-ten');
      } else if(obj.innerHTML >= 2){
        $(obj).addClass('time-two-to-five');
      }
    });
  };
}
