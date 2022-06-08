const target = document.getElementById('target');
const source = document.createElement('canvas');
const ctx = source.getContext('2d');
ctx.font = "50px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
anim();

const stream = source.captureStream();
target.srcObject = stream;

const btn = document.getElementById('btn');
if( target.requestPictureInPicture ) {
  btn.onclick = e => target.requestPictureInPicture();
}
else {
  btn.disabled = true;
}

function anim() {
  ctx.fillStyle = "white";
  ctx.fillRect( 0, 0, source.width, source.height );
  ctx.fillStyle = "black";
  ctx.font ="16px Areial";
//   ctx.fillText( new Date().toTimeString().split(' ')[0], source.width / 2, source.height / 2 );
  navigator.getBattery().then(battery => {
    console.log(battery.charging);
     console.log(battery.level);

     let stat = [battery.charging,battery.level];
     ctx.fillText( stat.toString(),source.width / 3, source.height /20);

})
  requestAnimationFrame( anim );
}