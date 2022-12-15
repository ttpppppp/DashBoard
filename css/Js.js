const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart,{
    type: 'line',
    data: {
        labels: ['Jan','Jan','Jan','Jan','Jan','Jan','Jan','Jan','Jan','Jan','Jan'],
        datasets: [
            {
                label: 'BTC',
                data: [29347,33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31550,41000,88800,26000,46000,32698,5000,3000,18656,24832,36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options:{
        responsive :true
    }
})

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('i:last-child').classList.toggle('active');
    themeBtn.querySelector('i:first-child').classList.toggle('active');
    
})