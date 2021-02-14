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
let all_history=[];

let p_header=document.getElementById("header_calc_text");
let p_histor = document.getElementById("p_text_histor");
let p_result = document.getElementById("p_result");

let c_return = false;
let p_histor_plus = document.getElementById("p_text_histor_plus");



function insert(num) {

    if (arr_histor_num.indexOf('=')== -1) {
        
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
        
        p_histor.innerHTML=all_history.join('')+arr_histor_num.join('');
    
        let in_line_res = eval(arr_histor_num.join(''));
    
        if (in_line_res) {
            p_result.innerHTML= in_line_res;
        }
        
    }
    else{
        let index = arr_histor_num.indexOf('=');
        arr_histor_num = arr_histor_num.slice(index+1);
        p_histor.innerHTML=arr_histor_num.join('');

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
        
        p_histor.innerHTML=all_history.join('')+arr_histor_num.join('');
    
        let in_line_res = eval(arr_histor_num.join(''));
    
        if (in_line_res) {
            p_result.innerHTML= in_line_res;
        }

    }
}

function calc(){
    if (p_histor.innerHTML!="") {

        if(arr_histor_num.indexOf('%')!= -1){

            let index = arr_histor_num.indexOf('%');

            let part1 = arr_histor_num.slice(0,index).join('');
            let part2 = arr_histor_num.slice(index+1).join('');

            let result = part1/100*part2;

            arr_histor_num.push("=");
            arr_histor_num.push( result );

            p_header.innerHTML=result;
            p_histor.innerHTML=p_histor.innerHTML+"="+ result ;
            p_result.innerHTML= result;
        }
        else{

            let value = eval(arr_histor_num.join(''));
            p_result.innerHTML= value;

            arr_histor_num.push("=");
            arr_histor_num.push(value);
            
            p_header.innerHTML=value;
            p_histor.innerHTML=p_histor.innerHTML+"="+value;
        }

    }
    else{
        p_result.innerHTML="Empty";
    }
}


function backspace(){
    if(arr_histor_num[arr_histor_num.length-1]!=0 && arr_histor_num.indexOf('=')== -1){
        arr_histor_num.pop()
        p_histor.innerHTML=all_history.join('') + arr_histor_num.join('');
        p_header.innerHTML="0";
        p_result.innerHTML="";
    }

}

function c(){
    all_history.push(arr_histor_num.join(''));
    all_history.push("<hr id='my_hr'/>")
    arr_histor_num=[];

    p_histor.innerHTML=all_history.join('');
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
        p_histor.innerHTML=all_history.join('')+"tan("+num+") = " + result;
        all_history.push("tan("+num+") = " + result);
        p_result.innerHTML=result;
        arr_histor_num=[];
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
        p_histor.innerHTML=all_history.join('')+"sin("+num+") = " + result;
        all_history.push("sin("+num+") = " + result);
        p_result.innerHTML=result;
        arr_histor_num=[];
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
        p_histor.innerHTML=all_history.join('')+"cos("+num+") = " + result;
        all_history.push("cos("+num+") = " + result);
        p_result.innerHTML=result;
        arr_histor_num=[];
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
        p_histor.innerHTML=all_history.join('')+"&radic;("+num+") = " + result;
        all_history.push("&radic;("+num+") = " + result);
        p_result.innerHTML=result;
        arr_histor_num=[];
    }
    else{
        p_result.innerHTML="Empty";
    }

}
