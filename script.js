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
let p_histor = document.getElementById("p_text_histor");
let p_header=document.getElementById("header_calc_text");
let p_result = document.getElementById("p_result");

function insert(num) {

    if (isNaN(num)) {
        p_header.innerHTML=0;
    }
    else{
        p_header.innerHTML=num;
    }

    do {
        arr_histor_num.push(num);

        if(isNaN(arr_histor_num[arr_histor_num.length-1])==true /*&& isNaN(arr_histor_num[arr_histor_num.length-2])==true*/){
            alert("1 if");
            /*delete arr_histor_num[arr_histor_num.length-2];*/
        }
        
        p_histor.innerHTML=arr_histor_num.join('');

        let in_line_res = eval(p_histor.innerHTML);

        if (in_line_res) {
            p_result.innerHTML= in_line_res;
        }

        if(isNaN(arr_histor_num[arr_histor_num.length-1])==true /*&& arr_histor_num[arr_histor_num.length-3]=="="*/){
            alert("2 if");
            /*arr_histor_num=[];
            p_histor.innerHTML=in_line_res;*/
        }

        if(/*arr_histor_num[arr_histor_num.length-3]=="="&&*/ isNaN(arr_histor_num[arr_histor_num.length-1])==false){
            alert("3 if");
           /* arr_histor_num.splice(0,length-2);
            p_histor.innerHTML=arr_histor_num.join('');*/
        }

    } while (false);
    
}

function calc(){
    if (p_histor) {

        let value = eval(p_histor.innerHTML);
        p_result.innerHTML= value;

        arr_histor_num.push("=");
        arr_histor_num.push(value);

        p_histor.innerHTML=p_histor.innerHTML+"="+value;

    }
}