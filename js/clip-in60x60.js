var m2 = 0;

function hesapla(form) {
    m2 = Math.round(eval(form.metrekare.value));
    if (m2 > 0) {

        isiyalitim = Math.ceil(m2 * 0.70 / 3);
        form.isiyalitim.value = isiyalitim + " mt."

        rm600 = Math.ceil(m2 * 2.5 / 4);
        form.rm600.value = rm600 + " boy"

        sm700 = Math.ceil(m2 * 0.5);
        form.sm700.value = sm700 + " ad."

        sivafilesi = Math.ceil(m2 * 2);
        form.sivafilesi.value = sivafilesi + " ad."

        izolasyondubeli = Math.ceil(m2 * 1.4);
        form.izolasyondubeli.value = izolasyondubeli + " ad."

        kosebant = Math.ceil(m2 * 1.74);
        form.kosebant.value = kosebant + " ad."

        ciftyay = Math.ceil(m2 * 0.87);
        form.ciftyay.value = ciftyay + " ad."

        celikdubel = Math.ceil(m2 * 0.87);
        form.celikdubel.value = celikdubel + " ad."

        yhbvida = Math.ceil(m2 * 0.4);
        form.yhbvida.value = yhbvida + " ad."

        clipinalu = Math.ceil(m2 * 1);
        form.clipinalu.value = clipinalu + " m2"


		$("#calc").slideDown();
    } else {
        alert("HATA: m² \"0\" dan büyük olmalıdır!");
        document.forms[0].metrekare.focus();
    }

}