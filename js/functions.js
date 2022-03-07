$(".voting-results").hide();
$(".moon").click(function(){
    $(".vote-box").hide();
    $(".voting-results").show();
});
        
const amountCrypto = document.getElementById('valueCrypto');
const amountFiat = document.getElementById('valueFiat');
const swap = document.getElementById('swap')