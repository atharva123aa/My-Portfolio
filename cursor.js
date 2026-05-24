var d1=document.getElementById('dot1')
 var d2=document.getElementById('dot2')
  var d3=document.getElementById('dot3')
  var mx=0, my=0
  var x1=0,y1=0,x2=0,y2=0,x3=0,y3=0
  //stack overflow
function lerp(a,b,t){return a+(b-a)*t }


  doocument.addEventListener('mousemove',function(e){
    mx=e.clientX
    my=e.clientY})
    doocument.addEventListener('mousedown',function(){
        document.body.classList.add('clicking')})
        doocument.addEventListener('mouseup',function(){
            document.body.classList.remove('clicking')})
            function loop() {
                x1=lerp(x1,mx,0.18)
                y1=lerp(y1,my,0.18)
            x2=lerp(x2,mx,0.13)
            y2=lerp(y2,my,0.13)
            x3=lerp(x3,mx,0.09)
            y3=lerp(y3,my,0.09)


d1.style.left=x1+'px'
d1.style.top=y1+'px'
d2.style.left=x2+'px'
d2.style.top=y2+'px'
d3.style.left=x3+'px'
d3.style.top=y3+'px' 
requestAnimationFrame(loop)}

loop()