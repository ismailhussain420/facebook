// Navigation search option
var search = document.getElementById("search");
var srchIcon = document.querySelector(".fa-search");
var fblogo = document.getElementById("fblogo");
var leftArrow =document.querySelector(".fa-arrow-left");
var accountSearching = document.getElementById("accountSearching");
search.addEventListener("click",function(){
    this.style.padding="7px 13px";
    srchIcon.classList.add("movingIcon");
    fblogo.classList.add("fblogohide");
    leftArrow.classList.add("leftArrowShow");
     leftArrow.style.visibility = "visible";
     accountSearching.style.display="block";
     accountSearching.style.transition="10s";   
})
document.addEventListener("click",function(event){
    if(!search.contains(event.target)){
        accountSearching.style.display="none";

    }
  


});
leftArrow.addEventListener("click",function(){
    this.style.visibility="hidden";
    
    search.style.padding ="8px 41px"
    fblogo.classList.remove("fblogohide");
    fblogo.style.opacity="1";
    fblogo.style.transition="5s";
    srchIcon.classList.remove("movingIcon");
})


// Active Nav

var activeNav = document.querySelectorAll(".activeNav");  // Use class selector
var crntlocation = location.href;
var fbiCon = document.querySelectorAll(".fbiCon");



for (let i = 0; i < activeNav.length; i++) {
    if (activeNav[i].href === crntlocation) {
        activeNav[i].style.color = "#2176FF";
        activeNav[i].style.borderBottom = "3px solid #2176FF";

    }
}


// tooltip
var hmtltip = document.getElementById("hmtltip");
var hTip = document.querySelector(".hTip");
hTip.addEventListener("mouseover",function(){
    hmtltip.style.opacity="1";
    hmtltip.style.transition="0.1s";


})
hTip.addEventListener("mouseleave",function(){
    hmtltip.style.opacity="0";

});

var vidotip = document.getElementById("vidotip");
var vTip = document.querySelector(".vTip");
vTip.addEventListener("mouseover",function(){
    vidotip.style.opacity="1";
    vidotip.style.transition="0.1s";


})
vTip.addEventListener("mouseleave",function(){
    vidotip.style.opacity="0";

});


var grptip = document.getElementById("grptip");
var gTip = document.querySelector(".gTip");
gTip.addEventListener("mouseover",function(){
    grptip.style.opacity="1";
    grptip.style.transition="0.1s";


})
gTip.addEventListener("mouseleave",function(){
    grptip.style.opacity="0";

});


var martip = document.getElementById("martip");
var mTip = document.querySelector(".mTip");
mTip.addEventListener("mouseover",function(){
    martip.style.opacity="1";
    martip.style.transition="0.1s";


})
mTip.addEventListener("mouseleave",function(){
    martip.style.opacity="0";

});


var gmtip = document.getElementById("gmtip");
var gamingTip = document.querySelector(".gamingTip");
gamingTip.addEventListener("mouseover",function(){
    gmtip.style.opacity="1";
    gmtip.style.transition="0.1s";


})
gamingTip.addEventListener("mouseleave",function(){
    gmtip.style.opacity="0";

});

// right menys

var aMenu =document.getElementById("aMenu");
var aChat =document.getElementById("aChat");
var aNtf =document.getElementById("aNtf");
var acnt =document.getElementById("acnt");


// spans
var rMenu =document.getElementById("rMenu");
var chat=document.getElementById("chat");
var ntf =document.getElementById("ntf");
var imgtip =document.getElementById("imgtip");



// MENU
aMenu.addEventListener("mouseover",function(){
    rMenu.style.opacity="1";
    rMenu.style.transition="0.1s";

});

aMenu.addEventListener("mouseleave",function(){
    rMenu.style.opacity="0";


});

// MESSENGER
aChat.addEventListener("mouseover",function(){
    chat.style.opacity="1";
    chat.style.transition="0.1s";

});

aChat.addEventListener("mouseleave",function(){
    chat.style.opacity="0";


});


// NOTIFICATION
aNtf.addEventListener("mouseover",function(){
    ntf.style.opacity="1";
    ntf.style.transition="0.1s";

});

aNtf.addEventListener("mouseleave",function(){
    ntf.style.opacity="0";


});
//ACCOUNT
acnt.addEventListener("mouseover",function(){
    imgtip.style.opacity="1";
    imgtip.style.transition="0.1s";

});

acnt.addEventListener("mouseleave",function(){
    imgtip.style.opacity="0";
});

// RIGHT MENU

var menuContent = document.querySelector(".menuContent");
var aMenu = document.getElementById("aMenu");
var mnText = document.getElementById("mnText")
aMenu.addEventListener("click", function() {
    menuContent.style.display = "block";
});

document.addEventListener("click", function(event) {
    if(!aMenu.contains(event.target)){
        menuContent.style.display = "none";

    }
});

//FIXED NAVIGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGAAAAAAAAAAAAAAAAAAAAAATTTTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIIIIIIIIIIIIIIIIIOOOOOOOOOOOOOOOOOOONNNNNNNN
// var navigationMenu =document.querySelector(".navigationMenu");
// var winLimit = window.scrollY;
// window.addEventListener("scroll",function(){

//     if(winLimit >100){
//        navigationMenu.style.position="fixed";
//     }

// });



// UpPost

var UpPost = document.getElementById("UpPost");
var fbMAinCArd = document.querySelector(".fbMAinCArd");
var postedCard = document.querySelector(".postedCard");

UpPost.addEventListener("click", function() {
    fbMAinCArd.classList.add("showCArd");
   
   
});



// close post card

var dltCard= document.getElementById("dltCard");

dltCard.addEventListener("click",function(){


    fbMAinCArd.classList.remove("showCArd");
    creatingPost.value=''

});
// Posting
var creatingPost = document.getElementById("creatingPost");
var postButton =document.getElementById("postButton");
creatingPost.addEventListener("input",function(event){
    event.preventDefault();
    var postValue = creatingPost.value;
    if(postValue.length  >0){
        postButton.style.backgroundColor="#2176FF"
    }
})

// Posted Content
var timing = document.getElementById("timing");
postButton.addEventListener("click",function(){
    var postedValue = creatingPost.value;
    var postPera = document.getElementById("postPera");
    postPera.innerHTML=postedValue;
    var time = new Date().getMinutes();
    if(time > 0){
        timing.innerHTML ="Just Now";
    }
    timing.innerHTML =time;
    if(postPera){
        fbMAinCArd.classList.remove("showCArd");

    }
    

})

// like 

var  like = document.querySelector(".fa-thumbs-up");
var rctCount =0;;
var countReact = document.getElementById("countReact");
like.addEventListener("click",function(){
    rctCount++;
    countReact.innerHTML=rctCount;
    like.style.color ="#2176FF"
})
var showLikes  = document.querySelector(".showLikes");


like.addEventListener("mouseover",function(){
    showLikes.style.display = "block";
});

like.addEventListener("mouseleave",function(){
    showLikes.style.display = "none";
});


var swRct = document.getElementById("swRct");
console.log(swRct);

swRct.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default behavior (if applicable)
    
    var reactlk = document.getElementById("reactlk");
    if (reactlk) {
        // Extract the image URL from swRctHaha
        var imageUrl = swRct.getAttribute("data-src");
        if (!imageUrl) {
            imageUrl = swRct.src; // Fallback to src if data-src is not found
        }
        if (imageUrl) {
            // Insert the image dynamically into reactlk
            reactlk.innerHTML = `<img src="${imageUrl}" width="4%" alt="Dynamic Image" />`;
        } else {
            console.error("No valid image URL found in swRctHaha");
        }
    }
});



// Commment
var  comntIcon = document.querySelector(".fa-comment");
comntIcon.addEventListener("click",function(){
    cmntArea.style.height="70px";
   
});



var submitIcon =document.querySelector(".fa-paper-plane");
var cmntArea =document.getElementById("cmntArea");

cmntArea.addEventListener("input",function(){
    if(cmntArea.value.length > 0){
        submitIcon.style.color ="lightgray";
       }else{
        submitIcon.style.color ="gray";

       }

});

// commented area
var submitIcon =document.querySelector(".fa-paper-plane");
var commenters= document.querySelector(".commenters");
var commentedtext = document.getElementById("commentedtext");
var countComnt =0;
submitIcon.addEventListener("click",function(){
    countComnt++;
    if(commentedtext){
        commentedtext.innerHTML = cmntArea.value

    }
    

})
