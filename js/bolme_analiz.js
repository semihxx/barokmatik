var m2=0;

function hesapla(form)
{
    m2=Math.round(eval(form.metrekare.value));
    if (m2 > 0)  {
         alcipanfx= Math.ceil(m2 * 2.05/3);
         form.alcipanfx.value=alcipanfx+" m2"

         duvarc = Math.ceil(m2 * 2 / 3)
         form.duvarc.value=duvarc+" boy"

         duvaru = Math.ceil(m2 * 0.7 / 3)
         form.duvaru.value=duvaru+" boy"

         dubelvida = Math.ceil(m2 * 1.6)
         form.dubelvida.value=dubelvida+" adet"

         borazan = Math.ceil(m2 * 29)
         form.borazan.value = borazan + " adet"

         derzband = Math.ceil(m2 * 3.4 / 90)
         form.derzband.value = derzband + " rulo"

         sesyalitim = Math.ceil(m2 * 1.2)
         form.sesyalitim.value = sesyalitim + " torba"
 
         derzalci = Math.ceil(m2 * 0.5 / 30)
         form.derzalci.value = derzalci + " boy"

         yalitimmalzeme = Math.ceil(m2 * 1)
         form.yalitimmalzeme.value = yalitimmalzeme + " boy"

    } else {
        alert("HATA: m² \"0\" dan büyük olmalıdır!");
        document.forms[0].metrekare.focus();
    }
 }