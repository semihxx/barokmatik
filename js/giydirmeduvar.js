var m2 = 0;

function hesapla(form) {
    m2 = Math.round(eval(form.metrekare.value));
    if (m2 > 0) {

        panel = Math.ceil(m2 * 1);
        form.panel.value = panel + " m2"

        artfix3600 = Math.ceil(m2 * 0.7);
        form.artfix3600.value = artfix3600 + " mt"

        artfix1200 = Math.ceil(m2 * 2);
        form.artfix1200.value = artfix1200 + " mt"

        artfix600 = Math.ceil(m2 * 1.6);
        form.artfix600.value = artfix600 + " adet"

        artfixL = Math.ceil(m2 * 14);
        form.artfixL.value = artfixL + " adet"

        askiteli = Math.ceil(m2 * 1.4);
        form.askiteli.value = askiteli + " adet"

        kelebekyay = Math.ceil(m2 * 0.7);
        form.kelebekyay.value = kelebekyay + " adet"

        celikdubel = Math.ceil(m2 * 0.8);
        form.celikdubel.value = celikdubel + " mt"

        sesyalitimbandi = Math.ceil(m2 * 0.85);
        form.sesyalitimbandi.value = sesyalitimbandi + " mt"

        derzalcisi = Math.ceil(m2 * 0.25);
        form.derzalcisi.value = derzalcisi + " kg"

        yalitimmalzemesi = Math.ceil(m2 * 1);
        form.yalitimmalzemesi.value = yalitimmalzemesi + " m2"

		$("#calc").slideDown();
    } else {
        alert("HATA: m² \"0\" dan büyük olmalıdır!");
        document.forms[0].metrekare.focus();
    }

}
