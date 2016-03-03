(function(){
$(document).ready(function($) {

  var $screen = $('#screen');
  var operator;
  var left;
  var right;
  var result;

    $('span').not('.operator').click(function(event){
      var $this = $(this);
      var content = $this.text();
      number = parseInt(content);
      console.log('this is a number');

      $screen.text(number);
    });

    $('.operator').click(function(event){
      console.log('this is an operator')
      if('.operator === +;'){
        result = left + right;
      }



    // })
    // $('#calc').click(function(event){
    //   var $this = $(this);
    //   if ("$('.operator') === '+')"){
    //     result = 1+2;
    //     console.log(result);
    //   }
    //   else if ("$('.operator') === '-')") {
    //     result = 1-2;
    //     console.log(result);
    //   }
    //
    // })


  // $("span.operator:contains('+')").click(function(event){
  //   var $this = $(this);
  //   var content = $this.text();
  //   total += number;
  //   $screen.text(content);
  //   console.log('plus')
  //   console.log('thie totla' + total)
  //   }
  // )
  // $("span.operator:contains('-')").click(function(event){
  //   var $this = $(this);
  //   var content = $this.text();
  //   // total += number;
  //   $screen.text(content);
  //   }
  // )
  // $("span.operator:contains('=')").click(function(event){
  //   console.log('the total is ' + total);
  //
  //   $screen.text(total);
  //   }
  // )




});
})();


//____Clear #screen of count
//____Total #screen with = // $screen.text(total);
//____Multiply #screen
//____Divide #screen contents
//____Add contents




// for (var i=0; i<9; i++){
//
//
//   if ($("span:contains('[i]')")) {
//   console.log('one clicked');
//
// }

// if ($("span:contains('1')")) {
//   console.log('one clicked');
// }
