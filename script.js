let para = document.getElementById("para");


 let words = para.innerHTML.trim().split(/\s+/);
 
 for( let i of words){
        if(i.length>8){
           let span = document.createElement("span");
           span.textContent = i;

           span.style.backgroundColor = "yellow";

           para.innerHTML = para.innerHTML.replace(i, span.outerHTML);  //i word ko span se replace kar diya






        }





 }