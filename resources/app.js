$('html').mousemove(function(e){
    console.log(e);
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    console.log(amountMovedX);
    console.log(amountMovedY);
    $('body').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});
