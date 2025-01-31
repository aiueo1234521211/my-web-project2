// ステータスの初期値
const baseStats = {
    warrior: { HP: 70, 力: 60, 防御: 70, 魔防: 50, 魔力: 20 },
    mage: { HP: 40, 力: 20, 防御: 30, 魔防: 70, 魔力: 70 },
    rogue: { HP: 50, 力: 70, 防御: 40, 魔防: 60, 魔力: 40 }
};

// 技ごとのステータス変化
const skillEffects = {
    "火の粉": { HP: 0, 力: 10, 防御: 0, 魔防: 0, 魔力: 15 },
    "マッスル": { HP: 20, 力: 20, 防御: 5, 魔防: 0, 魔力: 0 },
    "ポーション": { HP: 30, 力: 0, 防御: 0, 魔防: 10, 魔力: 5 },
    "炎ナックル": { HP: 0, 力: 30, 防御: 10, 魔防: 0, 魔力: 10 }
};

// ステータス更新関数
function updateStats() {
    const job = document.getElementById("name").value;
    if (!job || !baseStats[job]) return;

    // 職業の基本ステータスを取得
    let newStats = { ...baseStats[job] };

    // 選択した技の影響を加算
    document.querySelectorAll("#skill1, #skill2").forEach(select => {
        const skill = select.value;
        if (skill && skillEffects[skill]) {
            Object.keys(newStats).forEach(stat => {
                newStats[stat] += skillEffects[skill][stat];
            });
        }
    });

    // HTMLのステータス欄を更新
    document.getElementById("statusA").value = newStats.HP;
    document.getElementById("statusB").value = newStats.力;
    document.getElementById("statusC").value = newStats.防御;
    document.getElementById("statusD").value = newStats.魔防;
    document.getElementById("statusE").value = newStats.魔力;

    // レーダーチャートを更新
    updateRadarChart([
        newStats.HP,
        newStats.力,
        newStats.防御,
        newStats.魔防,
        newStats.魔力
    ]);
}

// レーダーチャートの初期化
const ctx = document.getElementById('myRadarChart').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HP', '力', '防御', '魔防', '魔力'],
        datasets: [{
            label: 'ステータス',
            data: [65, 59, 90, 81, 56],  // 初期値
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

// レーダーチャートの更新関数
function updateRadarChart(data) {
    radarChart.data.datasets[0].data = data;
    radarChart.update();
}

// イベントリスナーの追加
document.getElementById("name").addEventListener("change", updateStats);
document.querySelectorAll("#skill1, #skill2").forEach(select => {
    select.addEventListener("change", updateStats);
});


























































