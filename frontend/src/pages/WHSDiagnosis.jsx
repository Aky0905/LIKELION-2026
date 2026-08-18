import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSDiagnosis.css'

function WHSDiagnosis() {
  const navigate = useNavigate()

  const scores = [
    { label: '수분', value: 42, max: 100 },
    { label: '민감도', value: 72, max: 100 },
    { label: '유분', value: 51, max: 100 },
    { label: '탄력', value: 58, max: 100 },
  ]

  return (
    <div className="page diagnosis-page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/whs')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">진단 결과</span>
        <div className="spacer"></div>
      </header>

      <div className="diagnosis-date-card">
        <span className="diagnosis-date-label">WHS 프로페셔널 진단 · 2회차</span>
        <span className="diagnosis-date-val">2026.05.20</span>
      </div>

      {/* 점수 바 */}
      <section className="score-bars">
        {scores.map((item) => (
          <div key={item.label} className="score-bar-item">
            <div className="score-bar-header">
              <span className="score-bar-label">{item.label}</span>
              <span className="score-bar-value">{item.value}</span>
            </div>
            <div className="score-bar-track">
              <div
                className="score-bar-fill"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* 종합 평가 */}
      <section className="diagnosis-summary">
        <div className="summary-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span className="summary-label">AI 종합 평가</span>
        </div>
        <p className="summary-text">
          수분 지수가 평균 대비 낮고 민감도가 높은 상태입니다.
          보습과 진정 중심의 관리가 필요하며, 외부 자극을 최소화하는 것이 좋습니다.
        </p>
      </section>

      <div className="diagnosis-actions">
        <button className="btn-primary" onClick={() => navigate('/care')}>맞춤 케어 보기</button>
        <button className="btn-secondary" onClick={() => navigate('/whs/booking')}>재진 예약하기</button>
      </div>
    </div>
  )
}

export default WHSDiagnosis
