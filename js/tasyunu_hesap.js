var m2=0;

function hesapla(form)
{
m2=Math.round(eval(form.metrekare.value));
if (m2>0)  {

 panel= Math.round(eval(m2 * 1));
 form.panel.value=panel+" m2"

 artfix3600=Math.round(eval(m2*0.83/3.6))
 form.artfix3600.value=artfix3600+" boy"

 artfix1200=Math.round(eval(m2*1.67/1.2))
 form.artfix1200.value=artfix1200+" boy"

 artfix600=Math.round(eval(m2*0.83/0.6))
 form.artfix600.value=artfix600+" boy"


 artfixL=Math.round(eval(m2*0.7/3.05))
 form.artfixL.value=artfixL+" boy"




 askiteli=Math.round(eval(m2*0.8*2))
 form.askiteli.value=askiteli+" adet"

 kelebekyay=Math.round(eval(m2*0.8))
 form.kelebekyay.value=kelebekyay+" adet"


 celikdubel=Math.round(eval(m2*0.8))
 form.celikdubel.value=celikdubel+" adet"

 dubelvida=Math.round(eval(artfixL*5))
 form.dubelvida.value=dubelvida+" adet"

		$("#calc").slideDown();
 } else { alert("HATA: m² \"0\" dan büyük olmalıdır!");
 document.forms[0].metrekare.focus();}

 }
