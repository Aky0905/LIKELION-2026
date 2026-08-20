import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSTrend.css'

function WHSTrend() {
  const navigate = useNavigate()
  const [period, setPeriod] = useState('4주')

  // 기간별 피부 변화 데이터
  const chartData = {
    '4주': {
      labels: ['07.23', '07.30', '08.06', '08.13', '08.20'],
      moisture: [38, 40, 43, 45, 48],
      oil: [52, 50, 53, 51, 54],
      sensitivity: [78, 75, 73, 72, 70],
      elasticity: [54, 56, 57, 59, 61],
    },

    '3개월': {
      labels: ['06.01', '06.15', '07.01', '07.15', '08.01', '08.20'],
      moisture: [34, 36, 38, 41, 44, 48],
      oil: [55, 53, 51, 54, 52, 54],
      sensitivity: [82, 80, 78, 75, 72, 70],
      elasticity: [50, 51, 53, 55, 58, 61],
    },

    '6개월': {
      labels: ['03월', '04월', '05월', '06월', '07월', '08월'],
      moisture: [30, 32, 35, 38, 43, 48],
      oil: [58, 56, 54, 52, 51, 54],
      sensitivity: [88, 85, 82, 78, 74, 70],
      elasticity: [46, 48, 50, 53, 57, 61],
    },

    '1년': {
      labels: ['09월', '11월', '01월', '03월', '05월', '08월'],
      moisture: [28, 30, 31, 35, 42, 48],
      oil: [60, 58, 57, 55, 52, 54],
      sensitivity: [90, 88, 86, 82, 76, 70],
      elasticity: [42, 44, 46, 49, 55, 61],
    },
  }

  const data = chartData[period]

  /*
    그래프 크기
    viewBox 기준 320 x 170
  */
  const chartWidth = 320
  const chartHeight = 170

  const paddingLeft = 28
  const paddingRight = 8
  const paddingTop = 10
  const paddingBottom = 28

  const graphWidth = chartWidth - paddingLeft - paddingRight
  const graphHeight = chartHeight - paddingTop - paddingBottom

  const getX = (index) => {
    if (data.labels.length === 1) {
      return paddingLeft + graphWidth / 2
    }

    return (
      paddingLeft +
      (index / (data.labels.length - 1)) * graphWidth
    )
  }

  const getY = (value) => {
    return (
      paddingTop +
      graphHeight -
      (value / 100) * graphHeight
    )
  }

  const makePoints = (values) => {
    return values
      .map((value, index) => `${getX(index)},${getY(value)}`)
      .join(' ')
  }

  const series = [
    {
      key: 'moisture',
      label: '수분',
      color: '#5AA9FF',
      values: data.moisture,
    },
    {
      key: 'oil',
      label: '유분',
      color: '#B18CFF',
      values: data.oil,
    },
    {
      key: 'sensitivity',
      label: '민감도',
      color: '#F3A35B',
      values: data.sensitivity,
    },
    {
      key: 'elasticity',
      label: '탄력',
      color: '#F27777',
      values: data.elasticity,
    },
  ]

  return (
    <div className="page whs-trend-page">

      {/* =========================
          Header
      ========================= */}
      <header className="trend-header">

        <button
          className="trend-back-btn"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1>피부 변화 추이</h1>

        <div className="trend-header-space"></div>

      </header>


      {/* =========================
          기간 선택
      ========================= */}
      <section className="trend-period-section">

        <div className="trend-period-tabs">

          {['4주', '3개월', '6개월', '1년'].map((item) => (
            <button
              key={item}
              className={`trend-period-btn ${
                period === item ? 'active' : ''
              }`}
              onClick={() => setPeriod(item)}
            >
              {item}
            </button>
          ))}

        </div>

      </section>


      {/* =========================
          그래프
      ========================= */}
      <section className="trend-chart-card">

        {/* 범례 */}
        <div className="trend-legend">

          {series.map((item) => (
            <div
              key={item.key}
              className="trend-legend-item"
            >
              <span
                className="trend-legend-dot"
                style={{ backgroundColor: item.color }}
              ></span>

              <span>{item.label}</span>
            </div>
          ))}

        </div>


        {/* SVG 그래프 */}
        <div className="trend-chart-wrap">

          <svg
            className="trend-chart"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="none"
          >

            {/* 가로 기준선 */}
            {[0, 25, 50, 75, 100].map((value) => (
              <line
                key={value}
                x1={paddingLeft}
                x2={chartWidth - paddingRight}
                y1={getY(value)}
                y2={getY(value)}
                className="trend-grid-line"
              />
            ))}


            {/* 그래프 선 */}
            {series.map((item) => (
              <polyline
                key={item.key}
                points={makePoints(item.values)}
                fill="none"
                stroke={item.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}


            {/* 데이터 점 */}
            {series.map((item) =>
              item.values.map((value, index) => (
                <circle
                  key={`${item.key}-${index}`}
                  cx={getX(index)}
                  cy={getY(value)}
                  r="2.5"
                  fill="#ffffff"
                  stroke={item.color}
                  strokeWidth="1.8"
                />
              ))
            )}


            {/* X축 날짜 */}
            {data.labels.map((label, index) => (
              <text
                key={label}
                x={getX(index)}
                y={chartHeight - 7}
                textAnchor="middle"
                className="trend-axis-label"
              >
                {label}
              </text>
            ))}

          </svg>

        </div>

      </section>


      {/* =========================
          현재 상태
      ========================= */}
      <section className="trend-current-section">

        <h2>현재 피부 상태</h2>

        <div className="trend-current-grid">

          <div className="trend-current-item">
            <span>수분</span>
            <strong className="blue-text">낮음</strong>
          </div>

          <div className="trend-current-item">
            <span>민감도</span>
            <strong className="red-text">높음</strong>
          </div>

          <div className="trend-current-item">
            <span>유분</span>
            <strong className="green-text">보통</strong>
          </div>

          <div className="trend-current-item">
            <span>탄력</span>
            <strong className="green-text">보통</strong>
          </div>

        </div>

      </section>


      {/* =========================
          AI 분석 리포트
      ========================= */}
      <section className="trend-ai-card">

        <div className="trend-ai-header">

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

          <span>AI 분석 리포트</span>

        </div>

        <p>
          최근 수분 지수는 조금씩 상승하고 있어요.
          민감도 역시 이전보다 안정되는 모습을 보이고 있어요.
          지금처럼 보습과 진정 중심의 관리를 꾸준히 이어가면 좋아요.
        </p>

      </section>

    </div>
  )
}

export default WHSTrend