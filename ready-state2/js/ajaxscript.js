document.getElementById("btnajax").addEventListener("click",makerequest);

function makerequest(){
    console.log("Button Clicked");
    
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.txt",true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===XMLHttpRequest.DONE){  //4=DONE,3=LOADING
            if(xhr.status===200){
                console.log(xhr);
                console.log(xhr.responseText);
            }else{
                console.log("Problem Ocured")
            }
        }
    };
    xhr.send();
}


// function makerequest(){
//     console.log("Button Clicked");
    
//     const xhr=new XMLHttpRequest();
//     xhr.open("GET","data.txt",true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState===XMLHttpRequest.DONE){
//             if(xhr.status===200){
//                 console.log(xhr);
//                 console.log(xhr.responseText);
//             }else{
//                 console.log("Problem Ocured")
//             }
//         }
//     };
//     xhr.send();
// }