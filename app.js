const ctx = document.getElementById('myRadarChart').getContext('2d');

const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['ステータス A', 'ステータス B', 'ステータス C', 'ステータス D', 'ステータス E'],
        datasets: [{
            label: 'on/off',
            data: [
                document.getElementById('statusA').value,
                document.getElementById('statusB').value,
                document.getElementById('statusC').value,
                document.getElementById('statusD').value,
                document.getElementById('statusE').value,
            ],
            backgroundColor: 'rgba(38, 150, 255, 0.2)',
            borderColor: 'rgba(38, 150, 255, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    display: false,
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    lineWidth: 2
                },
                pointLabels: {
                    font: {
                        size: 14,
                        family: 'Arial',
                        weight: 'bold',
                        lineHeight: 1.5
                    },
                    color: 'rgba(38, 150, 255, 1)'
                }
            }
        },
        elements: {
            line: {
                tension: 0
            }
        },
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    }
});

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', () => {
        radarChart.data.datasets[0].data = [
            document.getElementById('statusA').value,
            document.getElementById('statusB').value,
            document.getElementById('statusC').value,
            document.getElementById('statusD').value,
            document.getElementById('statusE').value,
        ];
        radarChart.update();
    });
});



















