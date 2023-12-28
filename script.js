var namee=document.getElementById("name")
var arr=["S","ST","STA","STAR","STARB","STARBU","STARBUC","STARBUCK","STARBUCKS"]
var i=0;
function namew(){
    namee.innerText=arr[i];

    if(i<8){
        i=i+1;
    }

}
setInterval(namew,100)

var circle=document.getElementById('circle');
var green=document.getElementById('pic1');
var pinkl=document.getElementById('pic2');
var pink=document.getElementById('pic3');
var one="./media/img1.png";
var two="./media/img2.png";
var three="./media/img3.png";
var img=document.getElementById('imgc');
var nam=document.getElementById('name');
var para=document.getElementById('drink');

function change(x){
    img.src=x;
};
pink.addEventListener('click',function(){
    event.preventDefault;
    change(three);
    circle.style.backgroundColor="#f14d80";
    nam.style.color='#f14d80';
    para.style.color='#f14d80';
    para.innerHTML="Pink crusher makes your day colourfull <br> with its taste and beat";
    para.style.fontSize='40px';
    namee.innerText='';
    setInterval(namew(i=0),100);
    

});
green.addEventListener('click',function(){
    change(one);
    circle.style.backgroundColor="#017143";
    nam.style.color='#017143';
    para.style.color='#017143';
    para.innerHTML="green crusher makes your day colourfull <br> with its taste and beat";
    para.style.fontSize='40px';
    namee.innerText='';
    setInterval(namew(i=0),100);



});
pinkl.addEventListener('click',function(){
    change(two);
    img.style.height="600px";
    img.style.width="400px";
    circle.style.backgroundColor="#ecb8b8";
    nam.style.color='#ec8b8b';
    para.style.color='#ec8b8b';

    para.innerHTML="settle pink crusher makes your day colourfull <br> with its taste and beat";
    para.style.fontSize='40px';

    namee.innerText='';
    setInterval(namew(i=0),100);

});
