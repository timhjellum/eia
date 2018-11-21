    window.onbeforeprint = BeforePrint;
    console.log("print function found");

	function BeforePrint() {
        alert("You are about to print this document!");
        $('.highcharts-container').css({
            width: '370',
            border: '3px solid red'
        });
        location.reload();
    }


