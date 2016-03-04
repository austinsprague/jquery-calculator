(function(){
$(document).ready(function($) {

  var $screen = $('#screen');
  var operator;
  var left = 0;
  var right = 0;
  var result = 0;

    $('span').not('.operator, #calc').click(function(event){
      var $this = $(this);
      var content = $this.text();
      if (operator == null){
        left = left + content;
        $screen.text(left);
      }
      else if (operator != null) {
        right = right + content;
        $screen.text(left + operator + right);
      }
    });

    $('.operator').not('#calc').click(function(event){
      var $this = $(this);
      var content = $this.text();
      operator = content;
      $screen.text(left + content);
    });
    $('#calc').click(function(event){
      var leftNum = parseInt(left);
      var rightNum = parseInt(right);
      if(operator === '+'){
        result = leftNum + rightNum;
        console.log(result);
        $screen.text(result);
      }
      else if (operator === '-') {
        result = leftNum - rightNum;
        $screen.text(result);
      }
      else if (operator === 'x') {
        result = leftNum * rightNum;
        $screen.text(result);
      }
      else {
        result = leftNum / rightNum;
        $screen.text(result);
      }
    });




});
})();
