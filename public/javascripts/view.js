function View(){
  this.$refreshRequestsBtn = $('.refresh-request-list');
  this.$requestsContainer = $('.connect-requests .table-content');

  this.getRequestData = function(element){
    return {
      url: element.href,
      method: $(element).attr('method')
    };
  };

  this.renderRequestsList = function(requestsData){
    if (this.$requestsContainer.has("ul").length){
      this.$requestsContainer.empty();
    }
    this.$requestsContainer.append(requestsData);
    this.colorizeMinutesWaiting();
    this.fadeInRequestsList();
  };

  this.colorizeMinutesWaiting = function(){
    $('.connect-requests .minutes-waiting').each(function(i,obj){
      if(obj.innerHTML > 10){
        $(obj).addClass('time-ten-plus');
      } else if(obj.innerHTML >= 5){
        $(obj).addClass('time-five-to-ten');
      } else if(obj.innerHTML >= 2){
        $(obj).addClass('time-two-to-five');
      }
    });
  };

  this.fadeInRequestsList = function(){
    $('.table-content ul').velocity("transition.fadeIn", { stagger: 100, drag: true });
  };
}
