$(document).ready(function(){
//    nav-li hover e
    var num;
    $('.nav-main>li[id]').hover(function(){
       /*图标向上旋转*/
        $(this).children().removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).slideDown(0);
    },function(){
        /*图标向下旋转*/
        $(this).children().removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box-'+num).hide();
    });
//    hidden-box hover e
    $('.hidden-box').hover(function(){
        /*保持图标向上*/
        $('#li-'+num).children().removeClass().addClass('hover-up');
        $(this).show();
    },function(){
        $(this).slideUp(0);
        $('#li-'+num).children().removeClass().addClass('hover-down');
    });
});

function isTel(str){
       var reg=/^([0-9]|[\-])+$/g ;
       if(str.length<7 || str.length>18){
        return false;
       }
       else{
         return reg.exec(str);
       }
}
function checkform(){
 var title=document.getElementById('title').value;	
 var firstname=document.getElementById('firstname').value;	
  var lastname=document.getElementById('lastname').value;	
  var type=document.getElementById('type').value;
  var size=document.getElementById('size').value;
  var parking=document.getElementById('parking').value;
 var tel=document.getElementById('tel').value;	
 var email=document.getElementById('email').value;	
 var content=document.getElementById('content').value;	
 var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
 var pattern = /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/;  

 if(firstname==""){
   alert("Please enter your first name");
   return false;
}
 if(lastname==""){
   alert("Please enter your last name");
   return false;
}
 if(tel==""){

   alert("Please enter your phone number");
   return false;
}

 if(email==""){
   alert("Please enter your E-mail");
   return false;
}
if(!reg.test(email))
  {
    alert('Reminder/n/nPlease enter valid E_mail！');
   return false;
  }

return true;
}