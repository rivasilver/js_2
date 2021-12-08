function ketSzamSzamol(elso, masodik){
    var osszeg = 0;
    elso = parseFloat(elso);
    masodik = parseFloat(masodik);
    for (var i = elso + 1; i < masodik; i++)
    osszeg = osszeg + i
    return osszeg;
}