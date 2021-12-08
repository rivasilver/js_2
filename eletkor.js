function eletkorSzamol(kor){
    kor = parseFloat(kor);
    if (kor > 65)
    {
    return "idős";
    }
    else if (kor > 18)
    {
    return "felnőtt";
    }
    else if (kor > 1)
    {
    return "gyerek";
    }
    else if (kor == 0 | kor == 1)
    {
    return "csecsemő";
    }
}