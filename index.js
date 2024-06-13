function iPhone1(ASIN,color,display,camera){
    let obj = {};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.dial=function(){
        console.log('tring.. tring...');
    }
    obj.sendMessage = function(){
        console.log("Sending message...");
    }
    obj.cameraClick=function(){
        console.log("Camera clicked"); 
    }
    return obj;
}

let data =iPhone1(44537,'blue','5.7','108')
console.log(data);
// data.cameraClick();