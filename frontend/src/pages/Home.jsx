import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page home-page">
      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <h1 className="home-title">AI 피부 비서, 오르빗</h1>
          <p className="home-greeting">
            멋사n님, 좋은 하루 보내세요! <span className="greeting-icon">☀️</span>
          </p>
        </div>
        <button className="notification-btn" aria-label="알림">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </header>

      {/* 오늘의 피부 예측 카드 */}
      <section className="prediction-card">
        <div className="prediction-top">
          <div className="prediction-text-area">
            <span className="prediction-label">오늘의 피부 예측</span>
            <h2 className="prediction-status">건조 · 민감 가능성 높음</h2>
            <div className="prediction-meta">
              <span className="prediction-time">14:00 기준 예측</span>
              <span className="prediction-badge">주의</span>
            </div>
          </div>
          <div className="prediction-illustration">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              {/* 머리카락 */}
              <path d="M35 55 Q35 20 60 15 Q85 20 85 55" fill="#c9a06c" opacity="0.25"/>
              <path d="M38 50 Q40 22 60 18 Q80 22 82 50" fill="none" stroke="#b8956a" strokeWidth="1.2"/>
              {/* 얼굴 */}
              <ellipse cx="60" cy="62" rx="28" ry="32" fill="#fef2e8"/>
              {/* 목 */}
              <rect x="52" y="90" width="16" height="18" rx="6" fill="#fef2e8"/>
              {/* 눈 (감은 눈) */}
              <path d="M48 58 Q51 61 54 58" stroke="#7a6050" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M66 58 Q69 61 72 58" stroke="#7a6050" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* 입 */}
              <path d="M54 72 Q60 76 66 72" stroke="#e0a090" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* 볼터치 */}
              <circle cx="44" cy="67" r="4" fill="#fcd5cc" opacity="0.5"/>
              <circle cx="76" cy="67" r="4" fill="#fcd5cc" opacity="0.5"/>
              {/* 빨간 표시 (민감) */}
              <circle cx="38" cy="52" r="2.5" fill="#ef7b7b" opacity="0.6"/>
              <circle cx="82" cy="48" r="2" fill="#ef7b7b" opacity="0.5"/>
              <circle cx="75" cy="78" r="1.8" fill="#ef7b7b" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* 그래프 */}
        <div className="prediction-graph">
          <svg viewBox="0 0 300 60" className="graph-svg">
            <defs>
              <linearGradient id="graphFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#4a9eff" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path
              d="M0 45 Q30 42 60 38 Q90 32 120 28 Q150 22 180 24 Q210 27 240 22 Q270 18 300 20"
              stroke="#4a9eff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 45 Q30 42 60 38 Q90 32 120 28 Q150 22 180 24 Q210 27 240 22 Q270 18 300 20 L300 60 L0 60 Z"
              fill="url(#graphFill)"
            />
            <circle cx="180" cy="24" r="3.5" fill="#fff" stroke="#4a9eff" strokeWidth="2"/>
          </svg>
          <div className="graph-time-labels">
            <span>D0</span>
            <span>6</span>
            <span>12</span>
            <span>18</span>
            <span>24</span>
          </div>
        </div>
      </section>

      {/* 주요 요인 */}
      <section className="factors-section">
        <h3 className="section-label">주요 요인</h3>
        <div className="factors-row">
          <div className="factor-item">
            <div className="factor-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </div>
            <span className="factor-name">수면</span>
            <span className="factor-val">5시간 40분</span>
            <span className="factor-sub">(-1시간 20분)</span>
          </div>

          <div className="factor-item">
            <div className="factor-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="factor-name">활동량</span>
            <span className="factor-val">+45%</span>
            <span className="factor-sub">(높음)</span>
          </div>

          <div className="factor-item">
            <div className="factor-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
            <span className="factor-name">습도</span>
            <span className="factor-val">35%</span>
            <span className="factor-sub">(낮음)</span>
          </div>

          <div className="factor-item">
            <div className="factor-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <span className="ai-comment-title">AI 코멘트</span>
        </div>
        <p className="ai-comment-body">
          수면이 부족하고 습도가 낮아,<br/>
          평소보다 피부가 민감해질 수 있어요.
        </p>
        <p className="ai-comment-care">
          오늘은 <strong>진정 · 보습 케어</strong>를 우선해 주세요.
        </p>
        <button className="btn-today-care" onClick={() => navigate('/care')}>
          오늘의 케어 보기
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </section>
    </div>
  )
}

export default Home
