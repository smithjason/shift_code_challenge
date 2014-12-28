$(document).ready(function(){
  $('select#acts').change(getWorldsInAct);
  $('select#worlds').change(worldSelected);
  $('form#fps').submit(getFPS);
});

var addFPSListing = function(data){
  var newFPSResult = $('<li>',{
    text: "Act: " + data.act + " World: " + data.world + " - FPS: " + data.fps,
  });

  $('#results_list').append(newFPSResult);
};

var getFPS = function(event){
  event.preventDefault();
  var ajax = $.ajax({
    type: 'GET',
    url: this.action,
    data: $(this).serialize()
  });
  ajax.done(addFPSListing)
};

var worldSelected = function(event){
  $('input[type="submit"]').removeAttr("disabled");
};

var updateWorldsDropdown = function(data){
  var worlds = data.worlds;

  $('#worlds').removeAttr("disabled");
  $('#worlds option').remove();

  var chooseWorldOption = $('<option>',{
    text: "Choose World",
    value: "all"
  });

  chooseWorldOption.attr("disabled", true);
  chooseWorldOption.attr("selected", true);

  $('#worlds').append(chooseWorldOption);

  for(var i = 0; i < worlds.length; i++){
    var option = $('<option>', {
      text: worlds[i],
      value: worlds[i]
    });
    $('#worlds').append(option);
  }

  var allOption = $('<option>',{
    text: "All Worlds",
    value: "all"
  });

  $('#worlds').append(allOption);
};

var getWorldsInAct = function(event){
  $('input[type="submit"]').attr("disabled", true);

  var selectedAct = this.value;
  var ajax = $.ajax({
    url: "/acts/" + selectedAct + "/worlds",
    type: 'GET'
  });

  ajax.done(updateWorldsDropdown);
};
