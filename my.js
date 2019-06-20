function Caculator() {
    let NumOne = parseInt(document.getElementById("En_one").value);
    let NumTwo = parseInt(document.getElementById("En_two").value);
    Sumcacu = NumOne + NumTwo;
    document.getElementById("Result").innerHTML = Sumcacu;
    Minuscacu = NumOne - NumTwo;
    document.getElementById("Result").innerHTML = Minuscacu;
    MultiCacu = NumOne * NumTwo;
    document.getElementById("Result").innerHTML = MultiCacu;
    DividCacu = NumOne / NumTwo;
    document.getElementById("Result").innerHTML = DividCacu;
}
