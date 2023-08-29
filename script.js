const dateEl=document.getElementById("birthday");
const resultEl=document.getElementById("result_age");
const calculateBtn=document.getElementById("calculate");

function ageCount() {
    let now=new Date();                            //getting current date
    let currentY=now.getFullYear();                //extracting year from the date
    let currentM=now.getMonth();                   //extracting month from the date
    let currentD=now.getUTCDate();                   //extracting day from the date
      
    let dobget=document.getElementById("birthday").value; //getting user input
    let dob=new Date(dobget);                             //formatting input as date
    let prevY=dob.getFullYear();                          //extracting year from input date
    let prevM=dob.getMonth();                             //extracting month from input date
    let prevD=dob.getUTCDate();                             //extracting day from input date
    
    let ageY=0;
    let ageM=currentM-prevM;          //converting any negative value to positive
    let ageD=currentD-prevD;

    if(ageM>0){
        ageY=currentY-prevY;
    }
    else if(ageM<0){
        ageY =(currentY-prevY)-1;
    }
    else if(ageM==0){
        if (ageD==0 || ageD>0) {
            ageY=currentY-prevY;
        } else if(ageD<0){
            ageY=(currentY-prevY)-1;
        }
    }

    resultEl.textContent = `You are ${ageY} years old`;
}