$(document).ready(function() {
    $("#submit").click(function() {
        var loanAmount = $("loan-amount").val();
        var apr = $("#apr").val();
        loanAmount = parseInt(loanAmount);
        apr = parseInt(apr);
        var interestPrice = loanAmount * ((apr */ 100) / 12);

        var resultsText = "You will owe an extra" + interestPrice + "after 1 month";

        $("#result-value").html(resultsText);
      
        console.log(interestPrice);
    });
});