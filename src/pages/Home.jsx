import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

import orbitFace from '../assets/orbit-face.png'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page home-page">

      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <h1 className="home-title">
            AI 피부 비서 , <span className="orbit-title"> 오르빗</span>
          </h1>

          <p className="home-greeting">
            WHS님, 좋은 하루 보내세요!
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
              오늘의 피부 상태
            </span>

            <h2 className="prediction-status">
              건조 · 민감 가능성 높음
            </h2>

            <div className="prediction-meta">
              <span className="prediction-time">
                14:00 기준 예측
              </span>

              <span className="prediction-badge">
                주의
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
                  stopOpacity="0.12"
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
                  stopOpacity="0.18"
                />

                <stop
                  offset="100%"
                  stopColor="#FF8585"
                  stopOpacity="0"
                />
              </linearGradient>

            </defs>


            {/* 파란 영역 */}
            <path
              d="
                M0 70
                C18 69 30 68 45 69
                C62 70 76 69 92 69
                C108 69 120 68 135 69
                C143 69 148 69 154 68
                L154 92
                L0 92
                Z
              "
              fill="url(#blueArea)"
            />


            {/* 빨간 영역 */}
            <path
              d="
                M154 68
                C166 66 174 58 184 51
                C195 43 204 34 216 31
                C228 28 238 34 247 42
                C255 50 263 61 274 66
                L274 92
                L154 92
                Z
              "
              fill="url(#redArea)"
            />


            {/* 파란 그래프 - 00~14 */}
            <path
              d="
                M0 70
                C18 69 30 68 45 69
                C62 70 76 69 92 69
                C108 69 120 68 135 69
                C143 69 148 69 154 68
              "
              fill="none"
              stroke="#69B5FF"
              strokeWidth="2"
              strokeLinecap="round"
            />


            {/* 빨간 그래프 */}
            <path
              d="
                M154 68
                C166 66 174 58 184 51
                C195 43 204 34 216 31
                C228 28 238 34 247 42
                C255 50 263 61 274 66
              "
              fill="none"
              stroke="#FF7474"
              strokeWidth="2"
              strokeLinecap="round"
            />


            {/* 다시 파란 그래프 */}
            <path
              d="
                M274 66
                C287 69 302 69 320 69
              "
              fill="none"
              stroke="#69B5FF"
              strokeWidth="2"
              strokeLinecap="round"
            />


            {/* 14:00 기준 세로 점선 */}
            <line
              x1="154"
              y1="68"
              x2="154"
              y2="92"
              stroke="#FF9999"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.6"
            />


            {/* 파란 구간 점 */}
            <circle cx="0" cy="70" r="2.8" fill="#69B5FF" />
            <circle cx="45" cy="69" r="2.8" fill="#69B5FF" />
            <circle cx="92" cy="69" r="2.8" fill="#69B5FF" />
            <circle cx="135" cy="69" r="2.8" fill="#69B5FF" />


            {/* 빨간 구간 점 */}
            <circle cx="154" cy="68" r="2.8" fill="#FF7474" />
            <circle cx="184" cy="51" r="2.8" fill="#FF7474" />

            {/* 최고점 */}
            <circle
              cx="216"
              cy="31"
              r="3.2"
              fill="#ffffff"
              stroke="#FF7474"
              strokeWidth="2"
            />

            <circle
              cx="247"
              cy="42"
              r="2.8"
              fill="#FF7474"
            />

            <circle
              cx="274"
              cy="66"
              r="2.8"
              fill="#69B5FF"
            />

            {/* 파란 구간 */}
            <circle cx="296" cy="69" r="2.8" fill="#69B5FF" />
            <circle cx="320" cy="69" r="2.8" fill="#69B5FF" />

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

          {/* 수면 */}
          <div className="factor-item">

            <div className="factor-icon-wrap sleep-icon">
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>

            <span className="factor-name">수면</span>
            <span className="factor-val">5시간 40분</span>
            <span className="factor-sub">(-1시간 20분)</span>

          </div>


          {/* 활동량 */}
          <div className="factor-item">

            <div className="factor-icon-wrap activity-icon">
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
                <circle cx="13" cy="4" r="2" />
                <path d="M11 8l3 2 2-2" />
                <path d="M14 10l-1 4 4 3" />
                <path d="M13 14l-4 4" />
                <path d="M13 14l-1 6" />
              </svg>
            </div>

            <span className="factor-name">활동량</span>
            <span className="factor-val">+45%</span>
            <span className="factor-sub">(높음)</span>

          </div>


          {/* 습도 */}
          <div className="factor-item">

            <div className="factor-icon-wrap humidity-icon">
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
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>

            <span className="factor-name">습도</span>
            <span className="factor-val">35%</span>
            <span className="factor-sub">(낮음)</span>

          </div>


          {/* UV */}
          <div className="factor-item">

            <div className="factor-icon-wrap uv-icon">
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
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>

            <span className="factor-name">UV 지수</span>
            <span className="factor-val">3</span>
            <span className="factor-sub">(보통)</span>

          </div>

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
          수면이 부족하고 습도가 낮아,
          <br />
          평소보다 피부가 민감해질 수 있어요.
        </p>

        <p className="ai-comment-care">
          오늘은 <strong>진정 · 보습 케어</strong>를 우선해 주세요.
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