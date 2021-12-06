let key = document.getElementById("Key")
let container = document.getElementById("container")

onkeydown=function(event){
    
var top=key.offsetTop, left=key.offsetLeft ,width = container.offsetWidth
console.log(key)

   if (top<-0) {
      top=5;
      this.alert("Cox getdineeee qaqaaaaaaaaaaaaaa") 
   }else if (left<-0) {
     left=5;
     this.alert("Ekrandaki yer sene azliq edir ?") 
   }else if (left>=width) {
       left = left-15;
    this.alert("Ekrandaki yer sene azliq edir ?") 
   }
   if(event.keyCode==37)
   {
   key.style.left=(left-5)+"px";
   }
   else if(event.keyCode==38)
   {
   key.style.top=(top-5)+"px";
   }
   else if(event.keyCode==39)
   {
   key.style.left=(left+5)+"px";
   }
   else if(event.keyCode==40)
   {
   key.style.top=(top+5)+"px";
   }
  }

