//Кнопка more
function more(){
    let more = document.getElementById("more_cont");

    if(more.style.display == "none"){
        more.style.display = "inline"
    }
    else{
        more.style.display = "none"
    }
}

let arr_histor_num = [];
let p_header=document.getElementById("header_calc_text");
let p_histor = document.getElementById("p_text_histor");
let p_result = document.getElementById("p_result");

let c_return = false;
let p_histor_plus = document.getElementById("p_text_histor_plus");



function insert(num) {

    if(c_return==true){


    }
    else{

        if (isNaN(num)) {
            p_header.innerHTML=0;
        }
        else{
            p_header.innerHTML=num;
        }
    
        arr_histor_num.push(num);
    
        if(isNaN(arr_histor_num[arr_histor_num.length-1])==true && isNaN(arr_histor_num[arr_histor_num.length-2])==true){
            delete arr_histor_num[arr_histor_num.length-2];
        }
        
        p_histor.innerHTML=arr_histor_num.join('');
    
        let in_line_res = eval(p_histor.innerHTML);
    
        if (in_line_res) {
            p_result.innerHTML= in_line_res;
        }

    
        /*if(isNaN(arr_histor_num[arr_histor_num.length-1])==true && arr_histor_num[arr_histor_num.length-3]=="="){
            arr_histor_num.splice(0,arr_histor_num.length-2);
            p_histor.innerHTML=in_line_res;
        }
    
        if(arr_histor_num[arr_histor_num.length-3]=="=" && isNaN(arr_histor_num[arr_histor_num.length-1])==false){
            arr_histor_num.splice(0,arr_histor_num.length-1);
            p_histor.innerHTML=arr_histor_num.join('');
        }*/
    }

}

function calc(){
    if (p_histor) {

        if(arr_histor_num.indexOf('%')!= -1){
            let index = arr_histor_num.indexOf('%');
            let arr_part1 = arr_histor_num.slice(0,index);
            let arr_part2 = arr_histor_num.slice(index+1);
            let part1 = arr_part1.join('');
            let part2 = arr_part2.join('');

            let result = part1/100*part2;
            arr_histor_num.push("=");
            arr_histor_num.push( result );
            p_header.innerHTML=0;
            p_histor.innerHTML=p_histor.innerHTML+"="+ result ;


        }
        else{
            let value = eval(p_histor.innerHTML);
            p_result.innerHTML= value;
            arr_histor_num.push("=");
            arr_histor_num.push(value);
            p_header.innerHTML=0;
            p_histor.innerHTML=p_histor.innerHTML+"="+value;
        }

    }
    else{
        p_result.innerHTML="Empty";
    }
}


function backspace(){
    if(arr_histor_num[arr_histor_num.length-1]!=0){
        arr_histor_num.pop()
        p_histor.innerHTML=arr_histor_num.join('');
    }

}

function c(){
    p_histor.innerHTML=arr_histor_num.join('') + "</p> <hr id='my_hr'/> <p id='p_text_histor_plus'>";
    p_header.innerHTML="0";
    p_result.innerHTML="";
    c_return=true;
}

function reset(){
    location.reload();
}

function tan(){
    let num; 
    let result;

    if (arr_histor_num.length>0) {

        num = arr_histor_num.join('');
        result = Math.tan(num);
        p_histor.innerHTML="tan("+num+") = " + result;
        p_result.innerHTML=result;

    }
    else{
        p_result.innerHTML="Empty";
    }
}

function sin(){
    let num; 
    let result;

    if (arr_histor_num.length>0) {

        num = arr_histor_num.join('');
        result = Math.sin(num);
        p_histor.innerHTML="sin("+num+") = " + result;
        p_result.innerHTML=result;
    }
    else{
        p_result.innerHTML="Empty";
    }
}

function cos(){
    let num; 
    let result;

    if (arr_histor_num.length>0) {

        num = arr_histor_num.join('');
        result = Math.cos(num);
        p_histor.innerHTML="cos("+num+") = " + result;
        p_result.innerHTML=result;
    }
    else{
        p_result.innerHTML="Empty";
    }
}

function my_sqrt(){
    let num; 
    let result;

    if (arr_histor_num.length>0) {

        num = arr_histor_num.join('');
        result = Math.sqrt(num);
        p_histor.innerHTML="&radic;("+num+") = " + result;
        p_result.innerHTML=result;
    }
    else{
        p_result.innerHTML="Empty";
    }

}
