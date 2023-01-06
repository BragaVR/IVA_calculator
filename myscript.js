function calcola () {
    
    var imponibile = $('#imponibile').val();
    var iva = $('#iva').val();
    var imposte = imponibile * (iva / 100);
    var totale = Number(imponibile) + imposte;

    $('#imposte').val( imposte.toFixed(2) );
      $('#totale').val( totale.toFixed(2) ); 

      return false; 
    }

    $('#calculator').submit( calcola );




