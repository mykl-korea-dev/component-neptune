export default function BarChart($element, $data) {
    const canvas = $element;
    const ctx = canvas.getContext('2d');
    console.log($data.ability_id);
    const config = {
        type: 'bar',
        data: {
            labels: $data.store.getState()["hierarchy"][$data.ability_id].map(v => v["ability_name"]),
            datasets: [{
                label: 'My First Dataset',
                data: $data.store.getState()["hierarchy"][$data.ability_id].map(v => (+v["ability_ref_score"]).toFixed(1)),
                fill: true,
                backgroundColor:  'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
            }, {
                label: 'My Second Dataset',
                data: $data.store.getState()["hierarchy"][$data.ability_id].map(v => (+v["ability_my_score"]).toFixed(1)),
                fill: true,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgb(255, 159, 64)',
            }],
        },
        plugins: [ChartDataLabels],
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        offset: true
                    }
                },
                y: {
                    beginAtZero: true,
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
        return $data.store.getState()["hierarchy"][$data.ability_id].map(v => (+v[key]).toFixed(1));
    }

    function handler(chart) {
        const name = ["ability_ref_score", "ability_my_score"];
        chart.data.datasets.forEach((dataset, i) => {
            dataset.data = generateData(name[i]);
        });
        chart.update();
    }


    const myChart = new Chart(ctx, config);
    handler(myChart);
    $data.store.subscribe(() => handler(myChart));
}