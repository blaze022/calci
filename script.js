function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return (a*b);
}

function div(a,b){
    return ((a/b))
}


function operate(a,op,b){
    
    let res=0
    switch (op){
        case'+':res=add(a,b)
                break
        
        case'-':res=sub(a,b)
                break

        case'*':res=mul(a,b)
                break
        
        case'/':res=div(a,b)
                if(b===0){
                    res="You shall not pass!!"
                    return res
                }
                break

        default:
                return "ERROR"

    }
    return res.toPrecision(4)
}
let fres="("
let res=""
let prevs=""
const ael=document.querySelectorAll('button')
ael.forEach((button)=>{
    button.addEventListener('click',ssd)
})
let resu="result";
function ssd(e){
    
    if((res=="") && ( e.target.innerText=="*"|| e.target.innerText=="/" ||e.target.innerText=="=") ){
        
        alert("Cannot begin with multiplication or division or equalto operators!!!")
        //document.getElementById('plus').removeEventListener('click',ssd)
        //document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)
        return

    }
    if(e.target.innerText=='C'){
        res=""
        document.getElementById('display').innerHTML=""
        var screen=document.createElement('p')
        screen.innerText='0'
        document.getElementById('display').appendChild(screen)
        //document.getElementById('plus').removeEventListener('click',ssd)
        //document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)
        document.getElementById('plus').addEventListener('click',ssd)
        document.getElementById('minus').addEventListener('click',ssd)

        return
    }
    
    if(e.target.innerText=='='){
        let fn="";
        let flag=1;
        let sn="";
        let op1="";
        let op2="";
        let i=0;
        
        
        while(i<res.length){

            if((res.charAt(0)=="+"||res.charAt(0)=="-") && (flag==1)){
                fn+=res.charAt(0);
                flag=0;

            }

            else if(parseInt(res.charAt(i))>=0 && parseInt(res.charAt(i))<=9){
                if(op1==""){
                    fn+=res.charAt(i)
                }
                else{
                    sn+=res.charAt(i)
                }    
            }
            else{
                if(op1==""){
                    op1=res.charAt(i)
                    if(res.charAt(i+1)=="+"||res.charAt(i+1)=="-"||res.charAt(i+1)=="*"||res.charAt(i+1)=="/"){
                        sn+=res.charAt(i+1)
                        i=i+1
                    }
                }
                else{
                    op2=res.charAt(i)
                }
            }
            if(op2!=""){
                resu=operate(parseInt(fn),op1,parseInt(sn)).toString()
                fres+=`((${fn}) ${op1} (${sn}))->`
                sn=""
                if(res.charAt(i+1)=="+"||res.charAt(i+1)=="-"||res.charAt(i+1)=="*"||res.charAt(i+1)=="/"){
                    sn+=res.charAt(i+1)
                    i=i+1
                }

                fn=resu
                op1=op2
                op2=""
            }
            
            i++
        }  
        resu=operate(parseInt(fn),op1,parseInt(sn)).toString()
        fres+=`((${fn}) ${op1} (${sn}))`
      
        document.getElementById('equ').removeEventListener('click',ssd)
        //document.getElementById('plus').removeEventListener('click',ssd)
        //document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('display').innerHTML=""
        var screen=document.createElement('p')
        screen.innerText=" Result = "+resu
        console.log(fres)
        document.getElementById('display').appendChild(screen) 
        res=""
        fres=""
        return
        /*
        if(resu.charAt(0)=="-" ||res.charAt(0=="+")){
            res=""
            
        }*/

        if(resu=="ERROR"){
            document.getElementById('plus').removeEventListener('click',ssd)
            document.getElementById('minus').removeEventListener('click',ssd)
            document.getElementById('div').removeEventListener('click',ssd)
            document.getElementById('mul').removeEventListener('click',ssd)
            document.getElementById('equ').removeEventListener('click',ssd)
    
        }      
            
    }
    
    if(e.target.innerText!='='){
        document.getElementById('display').innerHTML=""
        var screen=document.createElement('p')
        screen.innerText=res+e.target.innerText
        res+=e.target.innerText
        document.getElementById('display').appendChild(screen)

    }
    
   /*
    if(e.target.innerText=="+" || e.target.innerText=="*" || e.target.innerText=="-"|| e.target.innerText=="/" ){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)
    }*/

    if( res.length==1 && (res.charAt(0)=="+"|| res.charAt(0)=="-")){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if(e.target.innerText=="+" && prevs=="+"){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)
    }

    if(e.target.innerText=="+" && prevs=="-"){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if(e.target.innerText=="-" && prevs=="+"){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if(e.target.innerText=="-" && prevs=="-"){
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)
    }
    
    if((e.target.innerText=="+" || e.target.innerText=="-")&&prevs=="*"){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if((e.target.innerText=="+" || e.target.innerText=="-")&&prevs=="/"){
        document.getElementById('plus').removeEventListener('click',ssd)
        document.getElementById('minus').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if(e.target.innerText=="*") {
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)
    
    }

    if(e.target.innerText=="/"){
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }
    if(e.target.innerText=="+"){
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if(e.target.innerText=="-"){
        document.getElementById('mul').removeEventListener('click',ssd)
        document.getElementById('div').removeEventListener('click',ssd)
        document.getElementById('equ').removeEventListener('click',ssd)

    }

    if(parseInt(e.target.innerText)>=0 && parseInt(e.target.innerText)<=9){
        document.getElementById('plus').addEventListener('click',ssd)
        document.getElementById('minus').addEventListener('click',ssd)
        document.getElementById('div').addEventListener('click',ssd)
        document.getElementById('mul').addEventListener('click',ssd)
        document.getElementById('equ').addEventListener('click',ssd)

    }

    prevs=e.target.innerText
    
    console.log(res)

}



