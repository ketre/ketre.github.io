function setup() {
  let canvas = createCanvas(1200, 1200);
  canvas.parent('p5Canvas')
jan1st = +new Date('2020-01-01')
 today = +new Date()
}
function draw() {
  background('white');
  for(d = 0; d <366; ++d) {
    myDate = jan1st + d * 1000*3600*24; 
    y= new Date(myDate).getMonth()
    x= new Date(myDate).getDate()
    rect(x *60, 60 * y, 50,  120)
    z = new Date(myDate).getDay()
    
    switch(z) {
   case 6:
      fill('pink')
      break
   case 0:
      fill('red')
      break
   default:
      fill('white')
 }
  if (today - myDate < 1000*3600*24 && today - myDate > 0){
  fill('yellow')
    }
  }
  }
