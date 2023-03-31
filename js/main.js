// function toggle_div_fun(id){
//     var divelement = document.getElementById(id);
//     var divelement = document.getElementsByClassName("active");
//     if(divelement.style.display == "none")
//     divelement.style.display = 'flex';

//     else
//     divelement.style.display = 'none';
// }

// var card_outer = document.getElementsByClassName("cards_W2");
// var card_fistouter = document.getElementsByClassName("cards_W1");
//  if{
//     card_outer.style.display == 'flex';
//  }
//     else{
//         card_fistouter.style.display == 'none'
//     }
    


/* <button onclick="toggle_div_fun('sectiontohide')">clicl 1</button>
<button onclick="toggle_div_fun('sectiontohide2')">clicl 1</button>


<div id='sectiontohide'>
this
</div>

<div id="selctiontohide2">
this2
</div> */

// var header = document.getElementById("myDIV");
// var list = header.getElementsByClassName("inner_item");
// for (var i = 0; i < list.length; i++) {
//   list[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

// var content = document.getElementById("product_card");
// var card = content.getElementsByClassName("cards_wrapper");
// for (var i = 0; i < list.length; i++) {
//   list[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }


// Tabs
// $('.clickme a').click(function(){
//   console.log(12112, this);
//   $('.clickme a').removeClass('activelink');
//   $(this).addClass('activelink');
//   var tagid = $(this).data('tag');
//   $('.list').removeClass('active').addClass('hide');
//   $('#'+tagid).addClass('active').removeClass('hide');
// });



$('.clickme2 a').click(function(){
  $('.clickme2 a').removeClass('activelink');
  $(this).addClass('activelink');
  var tagid = $(this).data('tag');
  $('.list').removeClass('active').addClass('hide');
  $('#'+tagid).addClass('active').removeClass('hide');
});

// $('.clickme3 a').click(function(){
//   $('.clickme3 a').removeClass('activelink');
//   $(this).addClass('activelink');
//   var tagid = $(this).data('tag');
//   $('.list').removeClass('active').addClass('hide');
//   $('#'+tagid).addClass('active').removeClass('hide');
// });

// initializing default size by passing the id  
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => selectProductType("mediumProductGrid"),1000)
}, false);



// modal show more list 


// end modal show more list