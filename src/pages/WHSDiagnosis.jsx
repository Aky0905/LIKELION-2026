import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSDiagnosis.css'
import diagnosisFace from '../assets/diagnosis-face.png'

function WHSDiagnosis() {
  const navigate = useNavigate()

  const scores = [
    {
      label: '수분',
      level: '낮음',
      color: 'blue',
    },
    {
      label: '민감도',
      level: '높음',
      color: 'red',
    },
    {
      label: '유분',
      level: '보통',
      color: 'green',
    },
    {
      label: '탄력',
      level: '보통',
      color: 'green',
    },
  ]

  return (
    <div className="page whs-diagnosis-page">

      {/* =========================
          Header
      ========================= */}
      <header className="diagnosis-header">

        <button
          className="diagnosis-back-btn"
          onClick={() => navigate('/whs')}
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

        <h1>진단 결과</h1>

        <div className="diagnosis-header-space"></div>

      </header>


      {/* =========================
          진단 정보
      ========================= */}
      <section className="diagnosis-info">

        <h2>WHS 진단 기반 맞춤 정보</h2>

        <div className="diagnosis-info-date">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 14" />
          </svg>

          <span>2026.8.20 진단 기준</span>
        </div>

      </section>


      {/* =========================
          얼굴 + 피부 상태
      ========================= */}
      <section className="diagnosis-profile">

        {/* 얼굴 */}
        <div className="diagnosis-face-wrap">
          <img
            src={diagnosisFace}
            alt="피부 진단 얼굴"
            className="diagnosis-face"
          />
        </div>


        {/* 피부 상태 */}
        <div className="diagnosis-score-list">

          {scores.map((item) => (
            <div
              key={item.label}
              className="diagnosis-score-item"
            >

              <span className="diagnosis-score-name">
                {item.label}
              </span>

              <div className="diagnosis-score-result">

                <span
                  className={`diagnosis-score-level ${item.color}`}
                >
                  {item.level}
                </span>

                <div
                  className={`diagnosis-mini-bar ${item.color}`}
                ></div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          주요 특징
      ========================= */}
      <section className="main-features">

        <h2 className="diagnosis-section-title">
          주요 특징
        </h2>


        {/* 수분 부족 */}
        <div className="feature-card">

          <div className="feature-icon feature-blue">

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3.5s-6 6.5-6 10.5a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5z" />
            </svg>

          </div>

          <div className="feature-content">

            <strong>수분 부족</strong>

            <span>
              피부 수분도가 낮은 편이에요.
            </span>

          </div>

        </div>


        {/* 피부장벽 민감 */}
        <div className="feature-card">

          <div className="feature-icon feature-red">

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
            </svg>

          </div>

          <div className="feature-content">

            <strong>피부장벽 민감</strong>

            <span>
              외부 자극에 민감할 수 있어요.
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          AI 종합 평가
      ========================= */}
      <section className="ai-summary-card">

        <div className="ai-summary-header">

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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

          <span>AI 종합 평가</span>

        </div>

        <p>
          수분 지수가 평균 대비 낮고 민감도가 높은 상태입니다.<br></br>
          보습과 진정 중심의 관리가 필요하며,
          외부 자극을 최소화하는 것이 좋습니다.
        </p>

      </section>


      {/* =========================
          피부 변화 추이
      ========================= */}
      <div className="diagnosis-actions">
  <button
    className="skin-trend-btn"
    onClick={() => navigate('/whs/trend')}
  >
    피부 변화 추이 보기
  </button>
</div>

    </div>
  )
}

export default WHSDiagnosis