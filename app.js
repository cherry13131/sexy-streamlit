// app.js
// 차트를 그릴 캔버스 요소 가져오기
const ctxElec = document.getElementById('electricityChart').getContext('2d');
const ctxWater = document.getElementById('waterChart').getContext('2d');

// 샘플 시간 데이터 생성 (실제 가동 시 실시간 데이터 배열로 교체 가능)
const labels = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

// 1. 전기 사용량 차트 설정
const electricityChart = new Chart(ctxElec, {
    type: 'line', // 선형 차트
    data: {
        labels: labels,
        datasets: [{
            label: '전기 (kWh)',
            data: [45, 52, 49, 63, 58, 70, 66],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            borderWidth: 2,
            tension: 0.3 // 곡선 부드러움 정도
        }]
    },
    options: { responsive: true }
});

// 2. 수도 사용량 차트 설정
const waterChart = new Chart(ctxWater, {
    type: 'bar', // 막대형 차트
    data: {
        labels: labels,
        datasets: [{
            label: '수도 (L)',
            data: [120, 150, 180, 310, 260, 190, 140],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.7)',
            borderWidth: 1
        }]
    },
    options: { responsive: true }
});

// 실시간 텍스트 데이터 갱신 (예시 데이터 바인딩)
document.getElementById('electricity-val').innerText = '66 kWh';
document.getElementById('water-val').innerText = '140 L';