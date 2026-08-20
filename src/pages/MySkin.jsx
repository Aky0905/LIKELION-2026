import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MySkin.css'

function MySkin() {
  const navigate = useNavigate()

  return (
    <div className="page myskin-page">
      {/* Header */}
      <header className="myskin-header">
        <div className="header-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </div>
        <h1 className="myskin-title">피부 분석</h1>
        <button className="notification-btn" aria-label="알림">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </header>

      {/* WHS 오프라인 진단 기준 데이터 */}
      <section className="diagnosis-section">
        <h3 className="section-label">WHS 오프라인 진단 기준 데이터</h3>
        <div className="diagnosis-list">
          <div className="diagnosis-item">
            <div className="diagnosis-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
            <div className="diagnosis-info">
              <span className="diagnosis-name">수분 부족 방향</span>
              <span className="diagnosis-detail">진단 결과: 보통</span>
            </div>
          </div>

          <div className="diagnosis-item">
          <div className="diagnosis-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              </svg>
            </div>
            <div className="diagnosis-info">
              <span className="diagnosis-name">탄력도</span>
              <span className="diagnosis-detail">진단 결과: 높음</span>
            </div>
          </div>

          <div className="diagnosis-item">
          <div className="diagnosis-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="diagnosis-info">
              <span className="diagnosis-name">장벽 민감도</span>
              <span className="diagnosis-detail">진단 결과: 높음</span>
            </div>
          </div>

          <div className="diagnosis-item">
          <div className="diagnosis-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
              </svg>
            </div>
            <div className="diagnosis-info">
              <span className="diagnosis-name">균형 민감도</span>
              <span className="diagnosis-detail">진단 결과: 보통</span>
            </div>
          </div>

          <div className="diagnosis-item">
          <div className="diagnosis-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              </svg>
            </div>
            <div className="diagnosis-info">
              <span className="diagnosis-name">톤 균형도</span>
              <span className="diagnosis-detail">진단 결과: 보통</span>
            </div>
          </div>
        </div>
      </section>

      {/* 오늘의 데이터 */}
      <section className="today-section">
        <div className="today-header">
          <h3 className="section-label">오늘의 데이터</h3>
          <span className="today-time">14:00 기준</span>
        </div>
        <div className="today-list">
          <div className="today-item">
            <span className="today-label">🌙 수면</span>
            <span className="today-value">6시간 40분</span>
            <span className="today-change">(-1시간 20분)</span>
          </div>
          <div className="today-item">
            <span className="today-label">💓 HRV</span>
            <span className="today-value">-18%</span>
            <span className="today-change">(평소 -72%)</span>
          </div>
          <div className="today-item">
            <span className="today-label">⚡ 활동량</span>
            <span className="today-value">+45%</span>
            <span className="today-change">(평소 +37%)</span>
          </div>
          <div className="today-item">
            <span className="today-label">💧 습도</span>
            <span className="today-value">35%</span>
            <span className="today-change">(낮음)</span>
          </div>
          <div className="today-item">
            <span className="today-label">☀️ UV 지수</span>
            <span className="today-value">6</span>
            <span className="today-change">(높음)</span>
          </div>
        </div>
      </section>

      {/* AI 분석 리포트 */}
      <section className="ai-report-section">
        <h3 className="section-label">AI 분석 리포트</h3>
        <div className="ai-report-card">
          <p className="ai-report-text">
            수분 부족과 낮은 습도, 높은 UV 지수로 인해<br/>
            피부가 건조하고 민감해질 가능성이 높아요.
          </p>
          <p className="ai-report-sub">
            진정 · 보습 위주로 케어를 추천해요.
          </p>
          <button className="btn-report-full" onClick={() => navigate('/skin/report')}>
            리포트 전체 보기
          </button>
        </div>
      </section>
    </div>
  )
}

export default MySkin
