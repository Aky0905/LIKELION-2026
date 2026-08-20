import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { getHome } from '../api/api'

import orbitFace from '../assets/orbit-face.png'

/* 요인 key별 아이콘 (JSON으로 못 담는 SVG는 프론트에서 매핑) */
const factorIcons = {
  sleep: {
    className: 'sleep-icon',
    svg: (
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    ),
  },
  activity: {
    className: 'activity-icon',
    svg: (
      <>
        <circle cx="13" cy="4" r="1" />
        <path d="M4 17l5 1l.75 -1.5" />
        <path d="M15 21l0 -4l-4 -3l1 -6" />
        <path d="M7 12l0 -3l5 -1l3 3l3 1" />
      </>
    ),
  },
  humidity: {
    className: 'humidity-icon',
    svg: (
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    ),
  },
  uv: {
    className: 'uv-icon',
    svg: (
      <>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </>
    ),
  },
}

/* 백엔드 연결 실패 시 사용할 기본(더미) 데이터 */
const DEFAULT_HOME = {
  greeting: 'WHS님, 좋은 하루 보내세요!',
  prediction: {
    label: '오늘의 피부 상태',
    status: '건조 · 민감 가능성 높음',
    time: '14:00 기준 예측',
    badge: '주의',
  },
  factors: [
    { key: 'sleep', name: '수면', value: '5시간 40분', sub: '(-1시간 20분)' },
    { key: 'activity', name: '활동량', value: '+45%', sub: '(높음)' },
    { key: 'humidity', name: '습도', value: '35%', sub: '(낮음)' },
    { key: 'uv', name: 'UV 지수', value: '3', sub: '(보통)' },
  ],
  aiComment: {
    body: '수면이 부족하고 습도가 낮아, 평소보다 피부가 민감해질 수 있어요.',
    care: '진정 · 보습 케어',
  },
}

function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState(DEFAULT_HOME)

  useEffect(() => {
    // 백엔드가 켜져 있으면 실제 데이터로 교체, 실패하면 기본값 유지
    getHome()
      .then((res) => setData({ ...DEFAULT_HOME, ...res }))
      .catch(() => {})
  }, [])

  const { greeting, prediction, factors, aiComment } = data

  return (
    <div className="page home-page">

      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <h1 className="home-title">
            AI 피부 비서 , <span className="orbit-title"> 오르빗</span>
          </h1>

          <p className="home-greeting">
            {greeting}
            <span className="greeting-icon">☀️</span>
          </p>
        </div>

        <button className="notification-btn" aria-label="알림">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </header>


      {/* 오늘의 피부 예측 */}
      <section className="prediction-card">

        <div className="prediction-top">

          <div className="prediction-text-area">
            <span className="prediction-label">
              {prediction.label}
            </span>

            <h2 className="prediction-status">
              {prediction.status}
            </h2>

            <div className="prediction-meta">
              <span className="prediction-time">
                {prediction.time}
              </span>

              <span className="prediction-badge">
                {prediction.badge}
              </span>
            </div>
          </div>


          {/* 얼굴 */}
          <div className="prediction-face">
            <img
              src={orbitFace}
              alt="피부 상태 분석 얼굴"
            />
          </div>

        </div>


        {/* 그래프 */}
        <div className="prediction-graph">

          <div className="graph-title">
            시간대별 민감도 예측
          </div>

          <svg
            viewBox="0 0 320 100"
            className="graph-svg"
            preserveAspectRatio="none"
          >

            <defs>

              <linearGradient
                id="blueArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#69B5FF"
                  stopOpacity="0.14"
                />

                <stop
                  offset="100%"
                  stopColor="#69B5FF"
                  stopOpacity="0"
                />
              </linearGradient>


              <linearGradient
                id="redArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#FF8585"
                  stopOpacity="0.20"
                />

                <stop
                  offset="100%"
                  stopColor="#FF8585"
                  stopOpacity="0"
                />
              </linearGradient>

            </defs>


            {/* 파란 영역 (00~12) */}
            <path
              d="
                M0 66
                C20 63 30 62 40 62
                C55 62 70 66 80 66
                C95 66 100 71 110 70
                C125 69 135 66 150 60
                L150 92
                L0 92
                Z
              "
              fill="url(#blueArea)"
            />


            {/* 빨간 영역 (12~18 봉우리) */}
            <path
              d="
                M150 60
                C165 54 178 44 195 36
                C205 31 213 29 220 30
                C232 31 240 42 250 50
                C258 56 264 60 270 62
                L270 92
                L150 92
                Z
              "
              fill="url(#redArea)"
            />


            {/* 파란 영역 (18~24) */}
            <path
              d="
                M270 62
                C288 65 305 66 320 66
                L320 92
                L270 92
                Z
              "
              fill="url(#blueArea)"
            />


            {/* 파란 그래프 라인 (00~12) */}
            <path
              d="
                M0 66
                C20 63 30 62 40 62
                C55 62 70 66 80 66
                C95 66 100 71 110 70
                C125 69 135 66 150 60
              "
              fill="none"
              stroke="#69B5FF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />


            {/* 빨간 그래프 라인 (봉우리) */}
            <path
              d="
                M150 60
                C165 54 178 44 195 36
                C205 31 213 29 220 30
                C232 31 240 42 250 50
                C258 56 264 60 270 62
              "
              fill="none"
              stroke="#FF7474"
              strokeWidth="2.2"
              strokeLinecap="round"
            />


            {/* 파란 그래프 라인 (18~24) */}
            <path
              d="
                M270 62
                C288 65 305 66 320 66
              "
              fill="none"
              stroke="#69B5FF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />


            {/* 최고점 세로 점선 */}
            <line
              x1="220"
              y1="30"
              x2="220"
              y2="92"
              stroke="#FF9999"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.6"
            />


            {/* 파란 구간 점 */}
            <circle cx="0" cy="66" r="2.8" fill="#69B5FF" />
            <circle cx="40" cy="62" r="2.8" fill="#69B5FF" />
            <circle cx="80" cy="66" r="2.8" fill="#69B5FF" />
            <circle cx="110" cy="70" r="2.8" fill="#69B5FF" />
            <circle cx="150" cy="60" r="2.8" fill="#69B5FF" />


            {/* 빨간 구간 점 */}
            <circle cx="195" cy="36" r="2.8" fill="#FF7474" />

            {/* 최고점 */}
            <circle
              cx="220"
              cy="30"
              r="3.4"
              fill="#ffffff"
              stroke="#FF7474"
              strokeWidth="2"
            />

            <circle cx="250" cy="50" r="2.8" fill="#FF7474" />


            {/* 파란 구간 (18~24) */}
            <circle cx="270" cy="62" r="2.8" fill="#69B5FF" />
            <circle cx="296" cy="65" r="2.8" fill="#69B5FF" />
            <circle cx="320" cy="66" r="2.8" fill="#69B5FF" />

          </svg>


          <div className="graph-time-labels">
            <span>00</span>
            <span>06</span>
            <span>12</span>
            <span>18</span>
            <span>24</span>
          </div>

        </div>

      </section>


      {/* 주요 요인 */}
      <section className="factors-section">

        <h3 className="section-label">
          주요 요인
        </h3>

        <div className="factors-row">

          {factors.map((factor) => {
            const iconInfo = factorIcons[factor.key] || {}
            return (
              <div className="factor-item" key={factor.key}>
                <div className={`factor-icon-wrap ${iconInfo.className || ''}`}>
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
                    {iconInfo.svg}
                  </svg>
                </div>

                <span className="factor-name">{factor.name}</span>
                <span className="factor-val">{factor.value}</span>
                <span className="factor-sub">{factor.sub}</span>
              </div>
            )
          })}

        </div>

      </section>


      {/* AI 코멘트 */}
      <section className="ai-comment-section">

        <div className="ai-comment-header">

          <div className="ai-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#69B5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <span className="ai-comment-title">
            AI 코멘트
          </span>

        </div>

        <p className="ai-comment-body">
          {aiComment.body}
        </p>

        <p className="ai-comment-care">
          오늘은 <strong>{aiComment.care}</strong>를 우선해 주세요.
        </p>

        <button
          className="btn-today-care"
          onClick={() => navigate('/care')}
        >
          오늘의 케어 보기

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>

        </button>

      </section>

    </div>
  )
}

export default Home
