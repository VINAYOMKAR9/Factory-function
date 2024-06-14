function iPhone1(ASIN,color,display,camera){
    let obj = {};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.dial=function(){
        return 'tring.. tring...'
    }
    obj.sendMessage = function(){
        return "Sending message..."
    }
    obj.cameraClick=function(){
        return"Camera clicked" 
    }
    return obj;
}

let data =iPhone1(44537,'blue','5.7','108')
console.log(data);
console.log(data.dial());
console.log(data.sendMessage());
console.log(data.cameraClick());

//-------------------------------    problem 2      ----------------------------------------------------------------

function iPhone2(ASIN,color,display,camera,Bluetooth){
    let obj = {};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.Bluetooth=Bluetooth
    obj.dial=function(){
        return 'tring.. tring...'
    }
    obj.sendMessage = function(){
        return "Sending message..."
    }
    obj.cameraClick=function(){
        return "Camera clicked" 
    }
    obj.connectBluetooth=function(){
        return "Bluetooth connected successfully..."
    } 


    return obj;
}

let data2 =iPhone2(44537,'blue','5.7','108','5.3')
console.log(data2);
console.log(data2.dial());
console.log(data2.sendMessage());
console.log(data2.cameraClick());
console.log(data2.connectBluetooth());

