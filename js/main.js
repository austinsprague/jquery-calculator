(function(){
$(document).ready(function($) {

  var $screen = $('#screen');
  var operator;
  var left = 0;
  var right = 0;
  var result = 0;

    $('span').not('.operator').click(function(event){
      var $this = $(this);
      var content = $this.text();
      // number = parseInt(content);
      // console.log('this is a number');
      if (operator == null){
        left = left + content;
        // result = result + content;
        $screen.text(left);
      }
      else if (operator != null) {
        right = right + content;
        $screen.text(left + operator + right);
      }
      // result = left + operator + right;
      // $screen.text(result);
    });

    $('.operator').click(function(event){
      var $this = $(this);
      var content = $this.text();
      // console.log('this is an operator');
      operator = content;
      // console.log(content);
      $screen.text(left + content);
    });
    $('#calc').click(function(event){
      // console.log('Equals was clicked')
      var leftNum = parseInt(left);
      var rightNum = parseInt(right);
      if(operator === '+'){
        result = leftNum + rightNum;
        $screen.text(result);
      }
      else if (operator === '-') {
        result = leftNum - rightNum;
        $screen.text(result);
      }

    });




});
})();
