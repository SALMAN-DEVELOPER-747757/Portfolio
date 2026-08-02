const text = document.getElementById("text");
const generate = document.getElementById("generate");
const qrBox = document.getElementById("qrcode");
const download = document.getElementById("download");

generate.addEventListener("click", createQR);

text.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        createQR();
    }
});

function createQR(){

    if(text.value.trim()===""){
        alert("Please enter text or a URL.");
        return;
    }

    qrBox.innerHTML="";

    new QRCode(qrBox,{
        text:text.value,
        width:220,
        height:220
    });

}

download.addEventListener("click",()=>{

    const img=qrBox.querySelector("img");

    const canvas=qrBox.querySelector("canvas");

    let source;

    if(img){
        source=img.src;
    }else if(canvas){
        source=canvas.toDataURL("image/png");
    }else{
        alert("Generate a QR Code first.");
        return;
    }

    const a=document.createElement("a");
    a.href=source;
    a.download="QRCode.png";
    a.click();

});