var m2=0;

function hesapla(form)
{
m2=Math.round(eval(form.metrekare.value));
if (m2>0)  {

    isiyalitim = Math.ceil(eval(m2 * 1));
 form.isiyalitim.value=isiyalitim+" m2"

 rm600=Math.ceil(m2*4.50/25)
 form.rm600.value=rm600+" torba"

 sm700 = Math.ceil(m2 * 4.5 / 25)
 form.sm700.value=sm700+" torba"

 sivafilesi = Math.ceil(m2 * 3 / 25)
 form.sivafilesi.value=sivafilesi+" rulo"


 izolasyondubeli = Math.ceil(m2 * 1.1 / 50)
 form.izolasyondubeli.value=izolasyondubeli+" adet"

 kosebant = Math.ceil(m2 * 6)
 form.kosebant.value=kosebant+" adet"

 starPVC = Math.ceil(m2 * 0.25 / 2.5)
 form.starPVC.value = starPVC + " boy"

		$("#calc").slideDown();
 } else { alert("HATA: m² \"0\" dan büyük olmalıdır!");
 document.forms[0].metrekare.focus();}

 }