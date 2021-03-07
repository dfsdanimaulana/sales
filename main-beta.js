var 
p1 = document.getElementById('p1'),
p2 = document.getElementById('p2'),
p3 = document.getElementById('p3'),
c1 = document.getElementById('c1'),
c2 = document.getElementById('c2'),
c3 = document.getElementById('c3');

var rupiah = (ribuan)=>{
  var	reverse = ribuan.toString().split('').reverse().join(''),
  ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return ribuan;
}
function getValue() {
  var totalPos = eval(p1.value+'+'+p2.value+'+'+p3.value);
  var totalCust = eval(c1.value+'+'+c2.value+'+'+c3.value);
  var average = parseInt(eval(totalPos/totalCust));
  var textArea=document.getElementById('hasil');
  textArea.innerHTML='Rp.'+rupiah(totalPos)+'<br/>'+'CC : '+totalCust+'<br/>'+'Avg : Rp.'+rupiah(average);
let pbaru=document.createElement('p');
let pisi=document.createTextNode('Tekan untuk mengcopy');
let p=pbaru.appendChild(pisi);
let parent=document.getElementById('parent');
let hasil=document.getElementById('hasil');
parent.insertBefore(p,hasil);
}

const hapus =()=>{
  var textArea=document.getElementById('hasil');
  textArea.innerHTML='';
}
var span = document.getElementById("hasil");
function copyText(){
    document.execCommand("copy");
  if(span.innerHTML==' '){
  }else{
    alert('Berhasil di Copy');
   }
}


span.addEventListener("copy", function(event){
  event.preventDefault()
  
if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
  }
});
function getCash(){
var cash1=document.getElementById('cash1');
var cash2=document.getElementById('cash2');
var cash3=document.getElementById('cash3');
var cashTotal=parseInt(eval(cash1.value+'+'+cash2.value+'+'+cash3.value));

  var cashHasil=document.getElementById('hasil2');
  cashHasil.innerHTML='Rp.'+rupiah(cashTotal);
}
const hapus2 =()=>{
  var textArea=document.getElementById('hasil2');
  textArea.innerHTML='';
}
function totalSales(){
  var ts=document.getElementById('ts1').value;
  var tc=document.getElementById('ts2').value;
  var av=parseInt(eval(ts/tc));
  var hs=document.getElementById('hasil3');
  hs.innerHTML='Rp.'+rupiah(ts)+'<br/>CC : '+rupiah(tc)+'<br/>Avg : Rp.'+rupiah(av);
}
const hapus3 = () => {
  var textArea = document.getElementById('hasil3');
  textArea.innerHTML = '';
}