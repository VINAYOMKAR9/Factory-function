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

//-------------------------------    problem 2      ----------------------------------------------------------------

function iPhone2(ASIN,color,display,camera,Bluetooth){
    let obj = {};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.Bluetooth=Bluetooth
    obj.dial=function(){
        console.log('tring.. tring...');
    }
    obj.sendMessage = function(){
        console.log("Sending message...");
    }
    obj.cameraClick=function(){
        console.log("Camera clicked"); 
    }
    obj.connectBluetooth=function(){
        console.log("Bluetooth connected successfully...");
    } 


    return obj;
}

let data2 =iPhone2(44537,'blue','5.7','108','5.3')
console.log(data2);


