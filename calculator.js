//nutritions.js

var co,p,f,ca;
function nutrition(){
    //For the Breakfast
    
    var breakfast=document.getElementById("bf");
    var bf = breakfast.options[breakfast.selectedIndex].value;
    //For the Dinner
    
    var lunch=document.getElementById("lu");
    var lu = lunch.options[lunch.selectedIndex].value;
    //For the Lunch
    
    var dinner=document.getElementById("di");
    var di = dinner.options[dinner.selectedIndex].value;
    //Amount
    var amt=parseInt(document.getElementById("amount").value);
    
//Add item values here
var dosa={carbo:37, protiens:5.7, fats:4.1, calories:210,};
var idli={ carbo:25, protiens:6.4,fats:0.4,calories:128,};
var Mysorebonda={ carbo:38.86, protiens:6.71,fats:8.47,calories:261};
var puri={ carbo:46.37, protiens:7.54,fats:9.43,calories:296};
var Pesarattu={ carbo:271, protiens:11.98,fats:8.02,calories:271};
var wheatupma={ carbo:30.41, protiens:5.13,fats:2.74,calories:167};
var vada={ carbo:33,protiens:13,fats:9.7,calories:265}    
var potato={ carbo:50, protiens:30,fats:30,calories:30,};
var tomato={ carbo:3.92, protiens:0.88,fats:0.2,calories:18};
var brinjal={ carbo:5.7,protiens:1.01,fats:0.19,calories:24};
var chicken={ carbo:0,protiens:27.07,fats:13.49,calories:237};
var mutton={ carbo:1.57,protiens:11.96,fats:5.86,calories:109};
var rice={ carbo:27.9,protiens:2.66,fats:0.28,calories:129};    
var mushroom={ carbo:20.12,protiens:3.09,fats:0.34,calories:22};
var cauliflower={ carbo:5.3,protiens:1.98,fats:0.1,calories:25};
var sweetpotato={carbo:20.12,protiens:1.57,fats:0.05,calories:26};    
var cabbage={ carbo:5.58,protiens:1.44,fats:0.12,calories:24};
var beetroot={carbo:9.56,protiens:1.61,fats:0.17,calories:43};
var brownrice={ carbo:22.78,protiens:2.56,fats:0.89,calories:110};   
var curd={ carbo:14,protiens:10,fats:7,calories:160};
var carrot={ carbo:9.58,protiens:0.93,fats:0.24,calories:41};    
var pulka={ carbo:60, protiens:40,fats:40,calories:40,};
var roti={ carbo:55.81,protiens:9.61,fats:1.3,calories:264};    

   //Create if - else if to calculate the amount 
    if(bf === "dosa"){
        co=(amt * dosa.carbo)/100;
        p=(amt * dosa.protiens)/100;
        f=(amt * dosa.fats)/100;
        ca=(amt * dosa.calories)/100;    
        }
    else if (bf === "idli"){
        co=(amt * idli.carbo)/100;
        p=(amt * idli.protiens)/100;
        f=(amt * idli.fats)/100;
        ca=(amt * idli.calories)/100;    
        }
    else if (bf === "vada"){
        co=(amt * vada.carbo)/100;
        p=(amt * vada.protiens)/100;
        f=(amt * vada.fats)/100;
        ca=(amt * vada.calories)/100;    
        }
    else if (bf === "Mysorebonda"){
        co=(amt * Mysorebonda.carbo)/100;
        p=(amt * Mysorebonda.protiens)/100;
        f=(amt * Mysorebonda.fats)/100;
        ca=(amt * Mysorebonda.calories)/100; 
        }
    else if (bf === "Pesarattu"){
        co=(amt * Pesarattu.carbo)/100;
        p=(amt * Pesarattu.protiens)/100;
        f=(amt * Pesarattu.fats)/100;
        ca=(amt * Pesarattu.calories)/100; 
        }
    else if (bf === "wheatupma"){
        co=(amt * wheatupma.carbo)/100;
        p=(amt * wheatupma.protiens)/100;
        f=(amt * wheatupma.fats)/100;
        ca=(amt *wheatupma.calories)/100;    
        }
    
    else if (bf === "puri"){
        co=(amt * puri.carbo)/100;
        p=(amt * puri.protiens)/100;
        f=(amt * puri.fats)/100;
        ca=(amt * puri.calories)/100; 
        
    }
    else if(lu=="potato"){
        co=(amt * potato.carbo)/100;
        p=(amt * potato.protiens)/100;
        f=(amt * potato.fats)/100;
        ca=(amt * potato.calories)/100;
    
    }
    else if(lu=="tomato"){
        co=(amt * tomato.carbo)/100;
        p=(amt * tomato.protiens)/100;
        f=(amt * tomato.fats)/100;
        ca=(amt * tomato.calories)/100;
    
    }
    else if(lu=="brinjal"){
        co=(amt * brinjal.carbo)/100;
        p=(amt * brinjal.protiens)/100;
        f=(amt * brinjal.fats)/100;
        ca=(amt * brinjal.calories)/100;
    
    }
    else if(lu=="brownrice"){
        co=(amt * brownrice.carbo)/100;
        p=(amt * brownrice.protiens)/100;
        f=(amt * brownrice.fats)/100;
        ca=(amt * brownrice.calories)/100;
    
    }
    else if(lu=="chicken"){
        co=(amt * chicken.carbo)/100;
        p=(amt * chicken.protiens)/100;
        f=(amt * chicken.fats)/100;
        ca=(amt * chicken.calories)/100;
    
    }
    
    else if(lu=="mushroom"){
        co=(amt * mushroom.carbo)/100;
        p=(amt * mushroom.protiens)/100;
        f=(amt * mushroom.fats)/100;
        ca=(amt * mushroom.calories)/100;
    
    }
    
    
    else if(lu=="mutton"){
        co=(amt * mutton.carbo)/100;
        p=(amt * mutton.protiens)/100;
        f=(amt * mutton.fats)/100;
        ca=(amt * mutton.calories)/100;
        }
    else if(lu=="cauliflower"){
        co=(amt * cauliflower.carbo)/100;
        p=(amt * cauliflower.protiens)/100;
        f=(amt * cauliflower.fats)/100;
        ca=(amt * cauliflower.calories)/100;
    
    }
    else if(lu=="cabbage"){
        co=(amt * cabbage.carbo)/100;
        p=(amt * cabbage.protiens)/100;
        f=(amt * cabbage.fats)/100;
        ca=(amt * cabbage.calories)/100;
    
    }
    else if(lu=="beetroot"){
        co=(amt * beetroot.carbo)/100;
        p=(amt * beetroot.protiens)/100;
        f=(amt * beetroot.fats)/100;
        ca=(amt * beetroot.calories)/100;
    }
    else if(lu=="sweetpotato"){
        co=(amt * sweetpotato.carbo)/100;
        p=(amt * sweetpotato.protiens)/100;
        f=(amt * sweetpotato.fats)/100;
        ca=(amt * sweetpotato.calories)/100;
    }
    else if(lu=="curd"){
        co=(amt * curd.carbo)/100;
        p=(amt * curd.protiens)/100;
        f=(amt * curd.fats)/100;
        ca=(amt * curd.calories)/100;
    }
    else if(lu=="carrot"){
        co=(amt * carrot.carbo)/100;
        p=(amt * carrot.protiens)/100;
        f=(amt * carrot.fats)/100;
        ca=(amt * carrot.calories)/100;
    }
    else if(di=="pulka"){
        co=(amt * pulka.carbo)/100;
        p=(amt * pulka.protiens)/100;
        f=(amt * pulka.fats)/100;
        ca=(amt * pulka.calories)/100;
    }
    else if(di=="roti"){
        co=(amt * roti.carbo)/100;
        p=(amt * roti.protiens)/100;
        f=(amt * roti.fats)/100;
        ca=(amt * roti.calories)/100;
    }
    else if(lu=="rice"){
        co=(amt * rice.carbo)/100;
        p=(amt * rice.protiens)/100;
        f=(amt * rice.fats)/100;
        ca=(amt * rice.calories)/100;
    }
document.getElementById("o_carbohydrates").innerHTML=co;
document.getElementById("o_proteins").innerHTML=p;
document.getElementById("o_fats").innerHTML=f;
document.getElementById("o_calories").innerHTML=ca;
}

function resetbutton(){
    location.reload();
}