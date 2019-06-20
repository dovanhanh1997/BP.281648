function Caculator() {
    let NumOne = parseInt(document.getElementById("En_one").value);
    let NumTwo = parseInt(document.getElementById("En_two").value);
    Sumcacu = NumOne + NumTwo;
    document.getElementById("Result").innerHTML = Sumcacu;
}
function MinusCaculator() {
    let NumOne = parseInt(document.getElementById("En_one").value);
    let NumTwo = parseInt(document.getElementById("En_two").value);
    Minuscacu = NumOne - NumTwo;
    document.getElementById("Result").innerHTML = Minuscacu;
}
function MultiCaculator() {
    let NumOne = parseInt(document.getElementById("En_one").value);
    let NumTwo = parseInt(document.getElementById("En_two").value);
    MultiCacu = NumOne * NumTwo;
    document.getElementById("Result").innerHTML = MultiCacu;
}
function DividCaculator() {
    let NumOne = parseInt(document.getElementById("En_one").value);
    let NumTwo = parseInt(document.getElementById("En_two").value);
    DividCacu = NumOne / NumTwo;
    document.getElementById("Result").innerHTML = DividCacu;
}