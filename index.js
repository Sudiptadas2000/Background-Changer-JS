function changeBG(color)
{
    document.body.style.backgroundColor=color;
    let txt=document.getElementsByClassName('text');
    if(color=="#000000"){
        for(let x of txt){
            x.style.color="white";
        }
    }
    else{
            for(let x of txt){
                x.style.color="black";
            }
        }
    }