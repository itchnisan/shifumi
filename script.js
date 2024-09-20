

let box = document.getElementsByClassName("box"); 


let boxChoix = box[0]; 

let boxResultat = document.getElementById("resultat"); 

let resultatChoix = document.createElement('p'); 

let resultatOrdi = document.createElement('p'); 

let resultatGagnant = document.createElement('p'); 



for(let choix of (boxChoix.childNodes)){
    console.log(choix.textContent); 

    choix.addEventListener("click", ()=>onChoix(choix.textContent)); 
}   

function onChoix(textChoix){                                                                            

    resultatChoix.textContent = ("choix joueur : " + textChoix); 

    let valeurAleatoir = Math.floor(Math.random() * 3);

    resultatOrdi.textContent = "choix ordi : "; 
    resultatGagnant.textContent = "gagnant : "; 


    switch(valeurAleatoir){

        case(0) :
            resultatOrdi.textContent += "Feuilles"; 

            if(textChoix == "Feuille"){
                resultatGagnant.textContent += "égalité"; 
            }
            else if(textChoix == "Pierre"){
                resultatGagnant.textContent += "perdu"; 
            }
            else if(textChoix == "Ciseaux"){
                resultatGagnant.textContent += "gagné"; 
            }
            break; 

        case(1) :
            resultatOrdi.textContent += "Pierre"; 

            
            if(textChoix == "Feuilles"){
                resultatGagnant.textContent += "gagné"; 
            }
            else if(textChoix == "Pierre"){
                resultatGagnant.textContent += "égalité"; 
            }
            else if(textChoix == "Ciseaux"){
                resultatGagnant.textContent += "perdu"; 
            }

            break; 

        case(2) :
            resultatOrdi.textContent += "Ciseaux"; 

            if(textChoix == "Feuilles"){
                resultatGagnant.textContent += "perdu"; 
            }
            else if(textChoix == "Pierre"){
                resultatGagnant.textContent += "gagné"; 
            }
            else if(textChoix == "Ciseaux"){
                resultatGagnant.textContent += "égalité"; 
            }

            break;     
    }

    boxResultat.appendChild(resultatChoix); 
    boxResultat.appendChild(resultatOrdi); 
    boxResultat.appendChild(resultatGagnant); 
    
}




