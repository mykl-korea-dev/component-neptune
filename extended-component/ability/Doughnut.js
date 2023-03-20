// import {Chart} from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

export default function Doughnut($element, $data) {
    const canvas = $element.querySelector('canvas');
    const ctx = canvas.getContext("2d");

    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = $element;

        // 차트내부에 정보 그리기
        let titleContainer = document.createElement("div");

        if($data.title) {
            let title = document.createElement("span");
            title.style.display = "block";
            title.textContent =  $data.title;
            title.style.fontSize = "1.2rem";
            titleContainer.appendChild(title);
        }

        let subTitle = document.createElement("span");
        subTitle.style.display = "block";
        subTitle.style.fontWeight = "800";
        subTitle.style.fontSize = "1.5rem";
        subTitle.style.marginTop = "0.3125rem";
        subTitle.textContent = $data.titlePrefix + $data.totalCount.toString() + $data.titleSuffix;

        titleContainer.appendChild(subTitle);

        titleContainer.style.textAlign = "center";
        titleContainer.style.transform = "translateY(-50%)";
        titleContainer.style.marginTop = (-legendContainer.getBoundingClientRect().height / 2) + 'px';

        // 범례 그리기
        let listContainer = legendContainer.querySelector('ul');

        if (!listContainer) {
            listContainer = document.createElement('ul');
            listContainer.style.display = 'flex';
            listContainer.style.flexDirection = 'row';
            listContainer.style.justifyContent = 'space-between';
            listContainer.style.margin = "0";
            listContainer.style.padding = "0";

            legendContainer.appendChild(titleContainer);
            legendContainer.appendChild(listContainer);
        }

        listContainer.style.marginTop = (legendContainer.getBoundingClientRect().height / 2) + 'px';
        listContainer.style.transform = "translateY(-50%)";
        listContainer.id = $element.id + "_listContainer";

        return listContainer;
    };

    const htmlLegendPlugin = {
        id: 'htmlLegend',
        afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList(chart, options.containerID);

            // Remove old legend items
            while (ul.firstChild) {
                ul.firstChild.remove();
            }

            // Reuse the built-in legendItems generator
            const items = chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach((item, i) => {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.flexDirection = 'column';
                li.style.alignItems = 'center';
                (items.length === 2 && i === 0) && (li.style.alignItems = "flex-start");
                (items.length === 2 && i === 1) && (li.style.alignItems = "flex-end");
                li.style.marginLeft = '10px';
                (i === 0) && (li.style.alignItems = 'flex-start');

                // Color box
                const boxSpan = document.createElement('span');
                boxSpan.style.display = 'inline-block';
                boxSpan.style.fontSize = "1rem";
                boxSpan.style.color = item.fillStyle;
                (items.length === 2 && i === 1) && (boxSpan.style.color = "#707070");
                const legendText = document.createTextNode(item.text);

                boxSpan.appendChild(legendText);


                // Text
                const textContainer = document.createElement('p');
                textContainer.style.display = "block";
                textContainer.style.color = item.fillStyle;
                textContainer.style.margin = "0.3125rem 0 0";
                textContainer.style.padding = "0";
                textContainer.style.fontSize = "1rem";
                textContainer.style.fontWeight = "800";
                textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
                (items.length === 2 && i === 1) && (textContainer.style.color = "#707070");

                const text = document.createTextNode($data.labelPrefix + chart.data.datasets[0].data[i] + $data.labelSuffix);
                textContainer.appendChild(text);

                li.appendChild(boxSpan);
                li.appendChild(textContainer);
                ul.appendChild(li);
            });
        },
    };

    const config = {
        type: 'doughnut',
        data: {
            labels: $data.labels,
            datasets: [{
                backgroundColor: [
                    'rgb(0, 76, 255)',
                    'rgb(223, 223, 223)'
                ],
                borderColor: [
                    'rgb(0, 76, 255)',
                    'rgb(223, 223, 223)'
                ],
                borderWidth: 1,
                datalabels: {
                    borderWidth: 0
                }
            }],
        },
        plugins: [ChartDataLabels, htmlLegendPlugin],
        options: {
            htmlLegend: {
                containerID: $element.id,
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                },
                datalabels: {
                    font: {
                        size: '0'
                    },
                }
            }
        }
    }

    function generateData() {
        const total = $data.totalCount;
        return [$data.inputs, total - $data.inputs];
    }

    function handler(chart) {
        chart.data.datasets.forEach((dataset) => {
            dataset.data = generateData();
        });
        chart.update();
    }


    const myChart = new Chart(ctx, config);
    handler(myChart);

    this.setData = (data) => {
        $data = {...$data, ...data};
        handler(myChart);
    }
    // $data.store?.subscribe(() => handler(myChart));
}