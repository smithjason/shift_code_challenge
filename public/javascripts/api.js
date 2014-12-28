function API(){}

API.prototype = {
  makeRequest: function(options){
    var jqxhr = $.ajax({
      url: options.url,
      type: options.method
    });
    return jqxhr;
  }
};
