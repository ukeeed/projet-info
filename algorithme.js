function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
Array.prototype.insert = function (index, ...items) {
    this.splice(index, 0, ...items);
};


function getweeks(startDate, endDate) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
  
    return Math.ceil(Math.abs(endDate - startDate) / msInWeek);
  }

  function getnuberofdays(date1,date2){
      
    let Difference_In_Time = date2.getTime() - date1.getTime();
      
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    return Difference_In_Days; 
  }

function vacances(matrix) {
    let matricefinal=[]; 
    matricefinal=matrix.slice(0);

}
function matricefinale(matric){
    let matricefinal=[]; 
    matricefinal=matric.slice(0);
    for (let j = 0; j < matricefinal.length; j++) {
        let length_semaine = matricefinal[j].length;
        let nbr_seance_dans_semaine = length_semaine/3;
        if (nbr_seance_dans_semaine == 10) {
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
        }
        else if (nbr_seance_dans_semaine == 9) {
            matricefinal[j].insert(length_semaine,null, null, null);
            length_semaine = matricefinal[j].length;
           
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
             
        }
        else if (nbr_seance_dans_semaine == 8) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            length_semaine = matricefinal[j].length;
            
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
        }
        else if (nbr_seance_dans_semaine == 7) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            matricefinal[j].insert(length_semaine - 2*3, null, null, null);
            length_semaine = matricefinal[j].length;
            
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
        }
        else if (nbr_seance_dans_semaine == 6) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            matricefinal[j].insert(length_semaine - 2*3, null, null, null);
            matricefinal[j].insert(length_semaine - 3*3, null, null, null);
            length_semaine = matricefinal[j].length;
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
        }
        else if (nbr_seance_dans_semaine == 5) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            matricefinal[j].insert(length_semaine - 2*3, null, null, null);
            matricefinal[j].insert(length_semaine - 3*3, null, null, null);
            matricefinal[j].insert(length_semaine - 4*3, null, null, null);
            length_semaine = matricefinal[j].length;
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
    
        }
        else if (nbr_seance_dans_semaine == 4) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            matricefinal[j].insert(length_semaine - 2*3, null, null, null);
            matricefinal[j].insert(length_semaine - 3*3, null, null, null);
            matricefinal[j].push( null, null, null,null, null, null);
            length_semaine = matricefinal[j].length;
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
    
        }
        else if (nbr_seance_dans_semaine == 3) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            matricefinal[j].insert(length_semaine - 2*3, null, null, null);
            matricefinal[j].push( null, null, null,null, null, null,null, null, null,null, null, null);
            length_semaine = matricefinal[j].length;
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
        }
        else if (nbr_seance_dans_semaine == 2) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].insert(length_semaine - 1*3, null, null, null);
            matricefinal[j].push( null, null, null,null, null, null,null, null, null,null, null, null,null, null, null,null, null, null);
            length_semaine = matricefinal[j].length;
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
        }
        else if (nbr_seance_dans_semaine == 1) {
            matricefinal[j].insert(length_semaine, null, null, null);
            matricefinal[j].push( null, null, null,null, null, null,null, null, null,null, null, null,null, null, null,null, null, null,null, null, null,null, null, null);
            length_semaine = matricefinal[j].length;
            matricefinal[j].insert(length_semaine-2*3,"Vendredi");
            matricefinal[j].insert(length_semaine-4*3,"Jeudi");
            matricefinal[j].insert(length_semaine-6*3,"Mercredi");
            matricefinal[j].insert(length_semaine-8*3,"Mardi");
            matricefinal[j].insert(length_semaine-10*3,"Lundi");
    
        }
        matricefinal[j].push( "Samedi",null, null, null,null, null, null,"Dimandch",null, null, null,null, null, null);
    
    }
    return matricefinal; 
}


function lerest(the_array) {
    let semaine = [];
    for (let k = 0; k < CM.length; k++) {
        for(let j=0;j<the_array[0].length;j++){
            if(the_array[k][j]>0){
                for(let x=0;x<the_array[k][j];x++){
                    if(j==0){
                        semaine.push("CM", k,"Presentiel");
                    }
                    else if(j==1){
                        semaine.push("CM", k,"CPA_P");
                    }
                    else if(j==2){
                        semaine.push("CM", k,"CPA_D");
                    }
                    else if(j==3){
                        semaine.push("CM", k,"CDA_P");
                    }
                    else if(j==4){
                        semaine.push("CM", k,"CDA_D");
                    }
                    else if(j==5){
                        semaine.push("CM", k,"DNA");
                    }
                    else if(j==6){
                        semaine.push("TP", k,"Presentiel");
                    }
                    else if(j==7){
                        semaine.push("TP", k,"CPA_P");
                    }
                    else if(j==8){
                        semaine.push("TP", k,"CPA_D");
                    }
                    else if(j==9){
                        semaine.push("TP", k,"CDA_P");
                    }
                    else if(j==10){
                        semaine.push("TP", k,"CDA_D");
                    }
                    else if(j==11){
                        semaine.push("TP", k,"DNA");
                    }
                    else if(j==12){
                        semaine.push("TD", k,"Presentiel");
                    }
                    else if(j==13){
                        semaine.push("TD", k,"CPA_P");
                    }
                    else if(j==14){
                        semaine.push("TD", k,"CPA_D");
                    }
                    else if(j==15){
                        semaine.push("TD", k,"CDA_P");
                    }
                    else if(j==16){
                        semaine.push("TD", k,"CDA_D");
                    }
                    else if(j==17){
                        semaine.push("TD", k,"DNA");
                    }
                  

                }

            }
        }
        
    }

    return semaine;
    
}


function pourcentage(id_etudiant, ProfesseurP, CF, Ppetab, Peetab, etudiantP, CM, TD, TP) {

    array = [];
    beta = Array(CF.length);
    P = Array(CF.length);
    CPA = Array(CF.length);
    CDA = Array(CF.length);
    DNA = Array(CF.length);
    gamma = Array(etudiantP.length);
    for (let i = 0; i < CF.length; i++) {
        gamma = Array(etudiantP.length);
        beta[i] = Math.max(ProfesseurP[i], Ppetab[i]);

        P[i] = Math.max(CF[i], Peetab[i]);
        CPA[i] = Math.max((beta[i] - P[i]), 0);
  

        for (let j = 0; j < etudiantP.length; j++) {
            gamma[j] = Math.max(Peetab[i], etudiantP[j]) - P[i] - CPA[i] ;

        }
        CDA[i] = Math.max((Math.max(...gamma)), 0);
        DNA[i] = 100 - P[i] - CDA[i] - CPA[i];

    }
    for (let i = 0; i < CF.length; i++) {
        let chyata = 0;
        let totaldescours = (CM[i] + TP[i] + TD[i]) / 3;
        if (P[i] >= etudiantP[id_etudiant]) {
            chyata = (((P[i] * totaldescours) % 100) + ((CPA[i] * totaldescours) % 100) + ((CDA[i] * totaldescours) % 100) + ((DNA[i] * totaldescours) % 100)) / 100;
            array.push([id_etudiant, Math.floor((P[i] * totaldescours) / 100)+chyata, 0, Math.floor((CPA[i] * totaldescours) / 100), 0 * totaldescours, Math.floor((CDA[i] * totaldescours) / 100), Math.floor((DNA[i] * totaldescours) / 100)]);
        }
        else {
            if (etudiantP[id_etudiant] - P[i] >= CPA[i]) {
                chyata = (((P[i] * totaldescours) % 100) + ((CPA[i] * totaldescours) % 100) + (((etudiantP[id_etudiant] - P[i] - CPA[i]) * totaldescours) % 100) + (((CDA[i] - (etudiantP[id_etudiant] - P[i] - CPA[i])) * totaldescours) % 100) + ((DNA[i] * totaldescours) % 100)) / 100;

                array.push([id_etudiant, Math.floor((P[i] * totaldescours) / 100)+chyata, Math.floor((CPA[i] * totaldescours) / 100), 0, Math.floor(((etudiantP[id_etudiant] - P[i] - CPA[i]) * totaldescours) / 100), Math.floor((CDA[i] - (etudiantP[id_etudiant] - P[i] - CPA[i])) * (totaldescours / 100)), Math.floor((DNA[i] * totaldescours) / 100)]);
            }
            else {
                chyata = (((P[i] * totaldescours) % 100) + (((etudiantP[id_etudiant] - P[i]) * totaldescours) % 100) + (((CPA[i] - (etudiantP[id_etudiant] - P[i])) * totaldescours) % 100) + ((CDA[i] * totaldescours) % 100) + ((DNA[i] * totaldescours) % 100)) / 100;

                array.push([id_etudiant, Math.floor((P[i] * totaldescours) / 100)+chyata, Math.floor(((etudiantP[id_etudiant] - P[i]) * totaldescours) / 100), Math.floor(((CPA[i] - (etudiantP[id_etudiant] - P[i])) * totaldescours) / 100), 0, Math.floor((CDA[i] * totaldescours) / 100), Math.floor((DNA[i] * totaldescours) / 100)]);
            }
        }
    }

    return array;
}

function hybrid(CMh, TPh, TDh, id_etudiant) {
    
    let n = pourcentage(id_etudiant, ProfesseurP, CF, Ppetab, Peetab, etudiantP, CMh, TDh, TPh);
    let CM = []; 
    CM=CMh.slice(0);
    let TD = [];
     TD=TDh.slice(0);
    let TP =[];
     TP=TPh.slice(0);
    CM = CM.map(x => x / 3);
    TD = TD.map(x => x / 3);
    TP = TP.map(x => x / 3);
    let cours = [];
    let TP_P = 0;
    let TP_CPA_P = 0;
    let TP_CPA_D = 0;
    let TP_CDA_P = 0;
    let TP_CDA_D = 0;
    let TP_DNA = 0;
    let CM_P = 0;
    let CM_CPA_P = 0;
    let CM_CPA_D = 0;
    let CM_CDA_P = 0;
    let CM_CDA_D = 0;
    let CM_DNA = 0;
    let TD_P = 0;
    let TD_CPA_P = 0;
    let TD_CPA_D = 0;
    let TD_CDA_P = 0;
    let TD_CDA_D = 0;
    let TD_DNA = 0;


    let check = 0;
    for (let i = 0; i < CM.length; i++) {
        TP_P = 0;
        TP_CPA_P = 0;
        TP_CPA_D = 0;
        TP_CDA_P = 0;
        TP_CDA_D = 0;
        TP_DNA = 0;
        CM_P = 0;
        CM_CPA_P = 0;
        CM_CPA_D = 0;
        CM_CDA_P = 0;
        CM_CDA_D = 0;
        CM_DNA = 0;
        TD_P = 0;
        TD_CPA_P = 0;
        TD_CPA_D = 0;
        TD_CDA_P = 0;
        TD_CDA_D = 0;
        TD_DNA = 0;
    
        check = 0;
        while (check != 3) {

            if (check == 0) {

                if (TP[i] == 0) {

                    check = 1;
                }
                else if (TP[i] > 0) {
                    if (n[i][1] > 0) {
                        TP[i] = TP[i] - 1;
                        n[i][1] = n[i][1] - 1;
                        TP_P++;
                    }
                    else {

                        if (n[i][2] > 0) {
                            TP[i] = TP[i] - 1;
                            n[i][2] = n[i][2] - 1;
                            TP_CPA_P++;
                        }
                        else {

                            if (n[i][4] > 0) {
                                TP[i] = TP[i] - 1;
                                n[i][4] = n[i][4] - 1;
                                TP_CDA_P++;
                            }
                            else {

                                if (n[i][3] > 0) {
                                    TP[i] = TP[i] - 1;
                                    n[i][3] = n[i][3] - 1;
                                    TP_CPA_D++;
                                }
                                else {

                                    if (n[i][5] > 0) {
                                        TP[i] = TP[i] - 1;
                                        n[i][5] = n[i][5] - 1;
                                        TP_CDA_D++;
                                    }
                                    else {

                                        if (n[i][6] > 0) {
                                            TP[i] = TP[i] - 1;
                                            n[i][6] = n[i][6] - 1;
                                            TP_DNA++;
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
            if (check == 1) {

                if (CM[i] == 0) {
                    check = 2;
                }
                else if (CM[i] > 0) {
                    if (n[i][1] > 0) {
                        CM[i] = CM[i] - 1;
                        n[i][1] = n[i][1] - 1;
                        CM_P++;
                    }
                    else {
                        if (n[i][2] > 0) {
                            CM[i] = CM[i] - 1;
                            n[i][2] = n[i][2] - 1;
                            CM_CPA_P++;
                        }
                        else {
                            if (n[i][4] > 0) {
                                CM[i] = CM[i] - 1;
                                n[i][4] = n[i][4] - 1;
                                CM_CDA_P++;
                            }
                            else {
                                if (n[i][3] > 0) {
                                    CM[i] = CM[i] - 1;
                                    n[i][3] = n[i][3] - 1;
                                    CM_CPA_D++;
                                }
                                else {
                                    if (n[i][5] > 0) {
                                        CM[i] = CM[i] - 1;
                                        n[i][5] = n[i][5] - 1;
                                        CM_CDA_D++;
                                    }
                                    else {
                                        if (n[i][6] > 0) {
                                            CM[i] = CM[i] - 1;
                                            n[i][6] = n[i][6] - 1;
                                            CM_DNA++;
                                        }
                                    }
                                }
                            }
                        }

                    }



                }
            }
            if (check == 2) {
                

                if (TD[i] == 0) {
                    check = 3;
                }
                else if (TD[i] > 0) {
                    if (n[i][1] > 0) {
                        TD[i] = TD[i] - 1;
                        n[i][1] = n[i][1] - 1;
                        TD_P++;
                    }
                    else {
                        if (n[i][2] > 0) {
                            TD[i] = TD[i] - 1;
                            n[i][2] = n[i][2] - 1;
                            TD_CPA_P++;
                        }
                        else {
                            if (n[i][4] > 0) {
                                TD[i] = TD[i] - 1;
                                n[i][4] = n[i][4] - 1;
                                TD_CDA_P++;
                            }
                            else {
                                if (n[i][3] > 0) {
                                    TD[i] = TD[i] - 1;
                                    n[i][3] = n[i][3] - 1;
                                    TD_CPA_D++;
                                }
                                else {
                                    if (n[i][5] > 0) {
                                        TD[i] = TD[i] - 1;
                                        n[i][5] = n[i][5] - 1;
                                        TD_CDA_D++;
                                    }
                                    else {
                                        if (n[i][6] > 0) {
                                            TD[i] = TD[i] - 1;
                                            n[i][6] = n[i][6] - 1;
                                            TD_DNA++;
                                        }
                                    }
                                }
                            }
                        }

                    }



                }
            }


        }
        
        
        cours.push([CM_P, CM_CPA_P, CM_CPA_D, CM_CDA_P, CM_CDA_D, CM_DNA, TP_P, TP_CPA_P, TP_CPA_D, TP_CDA_P, TP_CDA_D, TP_DNA, TD_P, TD_CPA_P, TD_CPA_D, TD_CDA_P, TD_CDA_D, TD_DNA]);


    }
    
    console.log("done"); 
    return cours;
}

function Macroplanning(CMM,TPM,TDM,EVALM,id,nbrdesemaine,randomize){

    let EVAL = []; 
    EVAL=EVALM.slice(0);
    let CM = []; 
    CM=CMM.slice(0);
    let TD = [];
     TD=TDM.slice(0);
    let TP =[];
     TP=TPM.slice(0);
let nbrTotalCM = 0;
let nbrTotalTD = 0;
let nbrTotalTP = 0;
let seance = 1;
let nbrheureparcours = 3;


for (let i = 0; i < CM.length; i++) {
    nbrTotalCM = nbrTotalCM + CM[i];
    nbrTotalTD = nbrTotalTD + TD[i];
    nbrTotalTP = nbrTotalTP + TP[i];
}
nbrTotalCM = nbrTotalCM / nbrheureparcours;
nbrTotalTP = nbrTotalTP / nbrheureparcours;
nbrTotalTD = nbrTotalTD / nbrheureparcours;


let nbrCMparsemaine = Math.floor((nbrTotalCM) / (nbrdesemaine));
let nbrTDparsemaine = Math.floor((nbrTotalTD) / (nbrdesemaine));
let nbrTPparsemaine = Math.floor((nbrTotalTP) / (nbrdesemaine));



let seanceCM = 0;
let seanceTP = 0;
let seanceTD = 0;
let semestre = Array();

    let the_array = hybrid(CM, TP, TD, id);
    
    semestre = Array();

    for (let i = 0; i < nbrdesemaine; i++) {
        seanceCM = 0;
        seanceTP = 0;
        seanceTD = 0;
        let semaine = [];//[les cours maj, les TP, les TD,les evals]
        loop1:
        while (seanceCM < nbrCMparsemaine || seanceTP < nbrTPparsemaine || seanceTD < nbrTDparsemaine) {
            
            loop2:
            for (let j = 0; j < CM.length; j++) {
                
                element=randomize[j]; 
                statement1:
                if (seanceCM < nbrCMparsemaine) {
                    if (CM[element] <= 0) {

                        break statement1;
                    }
                    else {
                        CM[element] = CM[element] - nbrheureparcours;
                        seanceCM = seanceCM + seance;

                        if (the_array[element][0] > 0) {
                            the_array[element][0] = the_array[element][0] - 1;
                            semaine.push("CM", element, "Presentiel");
                        }
                        else {
                            if (the_array[element][1] > 0) {
                                the_array[element][1] = the_array[element][1] - 1;
                                semaine.push("CM", element, "CPA_P");
                            }
                            else {
                                if (the_array[element][2] > 0) {
                                    semaine.push("CM", element, "CPA_D");
                                    the_array[element][2] = the_array[element][2] - 1;
                                }
                                else {
                                    if (the_array[element][3] > 0) {
                                        semaine.push("CM", element, "CDA_P");
                                        the_array[element][3] = the_array[element][3] - 1;
                                    }
                                    else {
                                        if (the_array[element][4] > 0) {
                                            semaine.push("CM", element, "CDA_D");
                                            the_array[element][4] = the_array[element][4] - 1;
                                        }
                                        else {
                                            if (the_array[element][5] > 0) {
                                                semaine.push("CM", element, "DNA");
                                                the_array[element][5] = the_array[element][5] - 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
                
                statemen2:
                if (seanceTP < nbrTPparsemaine) {

                    if (TP[element] <= 0) {

                        break statemen2;
                    }
                    else {
                        TP[element] = TP[element] - nbrheureparcours;
                        seanceTP = seanceTP + seance;


                        if (the_array[element][6] > 0) {
                            the_array[element][6] = the_array[element][6] - 1;
                            semaine.push("TP", element, "Presentiel");
                        }
                        else {
                            if (the_array[element][7] > 0) {
                                the_array[element][7] = the_array[element][7] - 1;
                                semaine.push("TP", element, "CPA_P");
                            }
                            else {
                                if (the_array[element][8] > 0) {
                                    semaine.push("TP", element, "CPA_D");
                                    the_array[element][8] = the_array[element][8] - 1;
                                }
                                else {
                                    if (the_array[element][9] > 0) {
                                        semaine.push("TP", element, "CDA_P");
                                        the_array[element][9] = the_array[element][9] - 1;
                                    }
                                    else {
                                        if (the_array[element][10] > 0) {
                                            semaine.push("TP", element, "CDA_D");
                                            the_array[element][10] = the_array[element][10] - 1;
                                        }
                                        else {
                                            if (the_array[element][11] > 0) {
                                                semaine.push("TP", element, "DNA");
                                                the_array[element][11] = the_array[element][11] - 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
                statement3:
                if (seanceTD < nbrTDparsemaine) {
                    if (TD[element] <= 0) {

                        break statement3;
                    }
                    else {
                        TD[element] = TD[element] - nbrheureparcours;
                        seanceTD = seanceTD + seance;


                        if (the_array[element][12] > 0) {
                            the_array[element][12] = the_array[element][12] - 1;
                            semaine.push("TD", element, "Presentiel");
                        }
                        else {
                            if (the_array[element][13] > 0) {
                                the_array[element][13] = the_array[element][13] - 1;
                                semaine.push("TD", element, "CPA_P");
                            }
                            else {
                                if (the_array[element][14] > 0) {
                                    semaine.push("TD", element, "CPA_D");
                                    the_array[element][14] = the_array[element][14] - 1;
                                }
                                else {
                                    if (the_array[element][15] > 0) {
                                        semaine.push("TD", element, "CDA_P");
                                        the_array[element][15] = the_array[element][15] - 1;
                                    }
                                    else {
                                        if (the_array[element][16] > 0) {
                                            semaine.push("TD", element, "CDA_D");
                                            the_array[element][16] = the_array[element][16] - 1;
                                        }
                                        else {
                                            if (the_array[element][17] > 0) {
                                                semaine.push("TD", element, "DNA");
                                                the_array[element][17] = the_array[element][17] - 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


            }
        }

        semestre.push(semaine);

        
    }
    let array_deval=[];
for(let i=0;i<EVAL.length;i++){
        array_deval.push("EVAL",i,"Presentiel")
}
semestre.insert(nbrdesemaine,array_deval);
let xy=[]; 
    let xe=lerest(the_array);
    let h=0;
    loop3 :
    while(h<xe.length){ 
    for(let i=0;i<semestre.length;i++){
        if(h==xe.length){
            break loop3; 

        }
        else{
        xy=semestre[i].concat([xe[h],xe[h+1],xe[h+2]]);
        semestre.splice(i,1,xy);
        h=h+3;
        }

    }
    }

    return semestre; 

}
let s=[]; 
let a=[];
let Ppetab = [50, 40, 60, 70, 50];
let Peetab = [50, 25, 30, 40, 60];
let ProfesseurP = [50, 50, 50, 50, 50];
let etudiantP = [40, 30, 70, 75,50];
let Equipement=["OUI","NON","OUI","OUI","NON"];



let startDate=new Date('2022-02-01');
let endDate=new Date('2022-03-15');
let weeks=getweeks(startDate,endDate);
    let CM = [51, 30, 30, 0, 21];
    let TP = [0, 0, 0, 36, 0];
    let TD = [0, 0, 0, 0, 0];
    let EVAL=[3,3,3,3,3];
    a_array=Array.from(Array(CM.length).keys());
    let randome=shuffle(a_array);

    let CF= [40, 60, 50, 45, 30];

for(let i=0;i<etudiantP.length;i++){
    
    if(Equipement[i]=="NON"){
        etudiantP[i]=100; 
        console.log("SHE SAIS NO");    
    }
    a=Macroplanning(CM,TP,TD,EVAL,i,weeks,randome); 
    s=matricefinale(a); 
   
    console.log(s);
    for(let i=0;i<s.length;i++){
        console.log(s[i].length); 
    }
    console.log("feaefazepfgjzaepfgjzegfpozjegpzejgpj");

}

