var Outerfunction= function(Innerfunc){
    return iF();
    
};

var iF= function(){
        console.log("Hello World From Inner Function");
}
Outerfunction();