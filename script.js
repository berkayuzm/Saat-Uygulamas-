 var date;
 var hour;
 var minute;
 var second;
 var arrowHour=document.getElementById("arrow-hour")
 var arrowMinute=document.getElementById("arrow-minute")
 var title=document.getElementById("deneme");
 var arrowSecond=document.getElementById("arrow-second")
 



// arrowHour.style.transform = `rotate(${hour*30}deg)`;
setInterval(function () {
    date= new Date();
    hour=date.getHours();
    minute=date.getMinutes();
    second=date.getSeconds();
    title.innerHTML=`${hour}:${minute}:${second}`;
    arrowHour.style.transform = `rotate(${hour*30}deg)`;
    arrowMinute.style.transform = `rotate(${minute*6}deg)`;
    arrowSecond.style.transform= `rotate(${second*6}deg)`;
}, 1000);