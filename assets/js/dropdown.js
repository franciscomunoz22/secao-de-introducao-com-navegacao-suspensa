$(document).ready(function() {
    var botao = $('.nav-features');
    var dropDown = $('.features-list');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.nav-company');
    var dropDown = $('.company-list');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });