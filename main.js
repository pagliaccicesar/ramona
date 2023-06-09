function openMenu() {
    $('.js-menu-container').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
}


function closeMenu() {
    $('.js-menu-container').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}

// Document Ready

jQuery(document).ready(function($){ // When everything has finished loading

    $('.js-menu-button').click(function(){ // When the element with the class 'js-menu-button' is clicked
        openMenu(); // Run the openMenu function
    });

    $('.js-menu-close').click(function(){ // When the element with the class 'js-menu-close' is clicked
        closeMenu(); // Run the closeMenu function
    });

});

// Keyboard Accessibility

jQuery(document).keyup(function(e) { // Listen for keyboard presses

    if (e.keyCode === 27) { // 'Esc' key

        if ($('.js-menu-container').hasClass('is-open')) { // If the menu is open close it
            closeMenu(); // Run the closeMenu function
        }

    }

});

/* JS DE SECCION PORTFOLIO*/

//Creates an event that fires every time the mouse moves over any div with the class of "img".
$(".img").mousemove(function(event){
  
    //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
    var mousex = event.pageX - $(this).offset().left;
    var mousey = event.pageY - $(this).offset().top;
    
    
    //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
    
    //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
    var imgx = (mousex - 300) / 40;
    var imgy = (mousey - 200) / 40;
    
    //Adds a translation css styles to the image element
    $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
  });
  
  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $(".img").mouseout(function(){
    $(this).css("transform", "translate(0px,0px)");
  });

