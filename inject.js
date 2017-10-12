$('body').append(`
  <div class='hurrdurr-selector modal modal-fade show' tabindex='-1' role='dialog'>
    <div class='inputs-container modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>Random!</div>
        <div class='modal-body'>
          <!-- Could grab from current filters but want it in english -->
          Remove fish: <input type='checkbox'> <br />
          Remove shrooms: <input type='checkbox'> <br />
          Remove onion: <input type='checkbox'> <br />
          Remove garlic: <input type='checkbox'> <br />
          Remove paprika: <input type='checkbox'> <br />
          Remove broccoli: <input type='checkbox'> <br />
          Remove meat: <input type='checkbox'> <br />
          Remove beetroot: <input type='checkbox'> <br />
        </div>
        <div class='modal-footer'>
          <button class='btn btn-primary' onclick='getRandom()'>Get more random!</button>
          <button class='btn btn-default' data-dismiss='modal' onclick='closeIt()'>Close!</button>
        </div>
      </div>
    <script>
      function getRandom() {
        $('.random-border').removeClass('random-border');
        // Unselect all filters
        $('#phraseFilter input').each(function(index) {
          $(this).attr('checked', false);
        });
        // Select only selected filters
        $('.hurrdurr-selector > .inputs-container input').each(function(index) {
          if ($(this).is(':checked')) {
            $($('#phraseFilter input')[index]).prop('checked', true); // Checks it
          }
        });
        // Get random offer
        var offers = $('#offers').children(':visible');
        var len = offers.length;
        var random = Math.floor(Math.random() * len) + 1;
        var offer = offers[random];
        // Add border to random offer
        $(offer).addClass('random-border');

        // Scroll down to selection
        $('html,body').animate({
          scrollTop: $('#' + offer.id).offset().top
        });
      }
      
      function closeIt() {
        $('.hurrdurr-selector').remove();
      }
    </script>
    <style>
      .random-border {
        border: 2px solid red;
      }
      .hurrdurr-selector {
        background-color: red;
        color: white;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 999;
      }
    </style>
  </div>
`);
