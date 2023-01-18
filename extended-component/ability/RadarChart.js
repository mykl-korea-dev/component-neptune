export default function RadarChart($element, $data={}) {
    const canvas = $element;
    const ctx = canvas.getContext("2d");
    // $data.store.getState()["hierarchy"][$data.abilityId].map(v => v["ability_name"])
    const config = {
        type: 'radar',
        data: {
            labels: $data.datalabels,
            datasets: [{
                data: $data.store.getState()["hierarchy"][$data.abilityId].map(v => (+v["ability_ref_score"]).toFixed(1)),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                data: $data.store.getState()["hierarchy"][$data.abilityId].map(v => (+v["ability_my_score"]).toFixed(1)),
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }],
        },
        plugins: [ChartDataLabels],
        options: {
            responsive: false,
            scales: {
                r: {
                    max: 5,
                    min: 0,
                    ticks: {
                        stepSize: 0.5
                    }
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end'
                }
            },
        }
    }

    function generateData(key) {
        return $data.store.getState()["hierarchy"][$data.abilityId].map(v => (+v[key]).toFixed(1));
    }

    function setDataLabel(chart) {
        chart.data.datasets.forEach((dataset, i) => {
            dataset.label = $data.labels[i]
        })
    }

    function handler(chart) {
        const name = ["ability_ref_score", "ability_my_score"];
        chart.data.datasets.forEach((dataset, i) => {
            dataset.data = generateData(name[i]);
        });
        chart.update();
    }


    const myChart = new Chart(ctx, config);
    setDataLabel(myChart);
    handler(myChart);
    $data.store.subscribe(() => handler(myChart));
}