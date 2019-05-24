//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību

//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem

//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts
//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības
//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības
//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību


const ienak = document.getElementsByClassName("total_income").innerHTML;
const izde = document.getElementsByClassName("total_expenses").innerHTML;
const budz = document.getElementsByid("budget__value").innerHTML;

const income = document.querySelector("total__income").innerHTML;
const texpenses = document.querySelector("total__expenses").innerHTML;
var incorexp = document.getElementById("add__type").innerHTML;
var budgetleft;
var totalhtml;
var budzethtml;

function totalbudget (tbudg){
    budzethtml = parseInt(atlik.innerHTML,0) + parseInt(budzetKopa,0)
    atlik.innerHTML = budzethtml;
}
function function_2(){
    var item = document.createElement("DIV");
item.className += "list_item";

var valdiv = document.createElement("DIV")


}

function function_3(){

}

