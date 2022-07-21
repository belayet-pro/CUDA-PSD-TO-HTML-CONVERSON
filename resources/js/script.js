$(document).ready(function(){
    
    // STICKY MENU 
    
    $('.js--services-section').waypoint(function(direction){
       if (direction == "down"){
              $("nav").addClass("sticky");
           } else {
               $("nav").removeClass("sticky");
           } 
    });
    
    // MIXITUP SECTION (PORTFOLIO SECTION)
    var mixer = mixitup('.container');
    
    // SMOOTH SCROOL FOR IE/EDGE
    
    $("a").on('click', function(event){
        
        if (this.hash !== "") {
                 event.preventDefault();
            
                 var hash = this.hash;
            
                 $('html, body').animate({
                     scrollTop: $(hash).offset().top
                     }, 1000, function(){
                     window.location.hash = hash;
                 });
            }
    });
});

// Mobile Menu
function openNav() {
    document.getElementById("myNav").style.width ="100%";
}
function closeNav() {
    document.getElementById("myNav").style.width ="0%";
}


