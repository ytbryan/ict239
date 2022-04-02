$("#myButton").click(function(){
    //document.getElementById('myInput')
    alert($('#myInput').val())
    alert($('#myInput2').val())
    alert($('#myInput3').val())
    var json = {value1: $('#myInput').val(), value2: $('#myInput2').val(), value3: $('#myInput3').val()}
    

    // #1 - THIS IS STEP 1 of 2 APRIL
    $.ajax({
        url: "/test", 
        data: json,
        success: function(result){
            //result is the number of records 
            console.log(result)
            alert(result)
            
            // alert("success!")
            //receive your array of records
            //display on frontend
        }});
    });

$('.hellotogether').hide('slow')

var ctx = document.getElementById('myChart').getContext('2d');
console.log(ctx)
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '# of Votes',
            data: [0, 80, 65, 40, 35, 125,170,140,65],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
