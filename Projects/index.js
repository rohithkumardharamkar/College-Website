let s=document.getElementsByClassName("class")[0]
    let q=document.getElementById("pc")
    let w=document.getElementById("ppc")
    function cp()
    {
        w.style.display="none";
    }
    function pc1()
    {
        w.style.display="block";
        console.log("open");
    }

    let imgs=["4.jpg","11.jpg","1.jpg","2.jpg","4.jpg","11.jpg","1.jpg","2.jpg"]
let imgref=document.querySelector(".collegephoto img")
let i=0
function bkwd()
{
    i=i-1 
    if(i==-1)
    {
        i=imgs.length-1

    }
    console.log(i)
    imgref.src=imgs[i]

}
function fwd()
{
    if(i<0)
    {
        console.log("-1");
    }
    i=i+1
    i=i%(imgs.length)
    imgref.src=imgs[i]
    console.log(i)
}
function checkfun(i)
{
    id=i
    imgref.src=imgs[i]
}
setInterval(fwd,5000)
let i1=document.getElementById("one");
    let i2=document.getElementById("two");
    let i3=document.getElementById("three");
    let i4=document.getElementById("four");
    
  
    let ia=0;
    let imgages=["c1.jpeg","c2.jpeg","c3.png","c4.png","c5.jpeg","c6.png","c7.png"]
    let l=imgages.length;
    function next()
    {
        ia=(ia+1)%l;
       i1.src=imgages[ia];
       i2.src=imgages[ia+1];
       i3.src=imgages[ia+2];
       i4.src=imgages[ia+3];
        
       
        console.log(ia);
    }
    setInterval(next,3000);
    function prev()
    {
        ia--;
        if(ia==-1)
        {
            i=l;
        }
        i1.src=imgages[ia];
       i2.src=imgages[ia-1];
       i3.src=imgages[ia-2];
       i4.src=imgages[ia-3];
        console.log(ia);
    }
    let testimg=document.querySelector(".pic img")
    let testtext=document.querySelector(".desc p")
    let testname=document.querySelector(".name h3")
    let testarr=[{"picture":"t2.png","text":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, corrupti nesciunt magni incidunt","name":"RAJA"}
    ,{"picture":"t3.png","text":"kjsdkhckj kscakjsnk jasjkslghdndr fgsegrsdf sdfsdfsfdsdfasdfasfasdfasdfnckjasndkjnskjdcnjkasnkjnnskcnjn","name":"RAJU"},
    {"picture":"t4.jpeg","text":"kjsdkhckjks cakjsnkjas jksadfas dfasdfafasfdasdffffffasd fasdfasdfafasfdafdffffffffffffddfsdfdasdfasfasfasnck","name":"RAMESH"},
    {"picture":"t5.jpeg","text":"kjsdkhckjksca kjsnkjasjksnckjasnd kjnfsdfasfdsadfas ddsfafdadfafafaffafaffafafskjdcnjkasnkjnnskcnjn","name":"JOHN"}]
    let ti=0;
    function textnext()
    {
    console.log("next");
        
        ti=ti+1;
        ti=ti%testarr.length;
        console.log(ti);
        testimg.src=testarr[ti].picture;
        testtext.innerText=testarr[ti].text;
        testname.innerText=testarr[ti].name;
        console.log(testarr[ti].text);

    }
    function textprev()
    {
        console.log("prev")
        ti=ti-1
        if(ti==-1)
        {
            ti=testarr.length-1;
        }
        console.log(ti);
    }
    setInterval(textnext,3000)
    
