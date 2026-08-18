import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Care.css'

function Care() {
  const navigate = useNavigate()

  return (
    <div className="page care-page">
      {/* Header */}
      <header className="care-header">
        <h1 className="care-title">오늘의 케어 제안</h1>
        <button className="notification-btn" aria-label="알림">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </header>
      <p className="care-subtitle">AI가 내 피부에 맞는 케어를 추천해요.</p>

      {/* 우선 케어 */}
      <section className="priority-care">
        <span className="priority-badge">우선 케어</span>
        <h2 className="priority-title">진정 · 보습 케어</h2>
        <p className="priority-desc">피부가 민감해지기 쉬운 상태예요.</p>
        <div className="priority-product-img">
          <div className="product-circle">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <rect x="18" y="10" width="24" height="55" rx="4" fill="#f0f6ff" stroke="#4a9eff" strokeWidth="1"/>
              <rect x="22" y="4" width="16" height="10" rx="3" fill="#e8f4ff" stroke="#4a9eff" strokeWidth="1"/>
              <circle cx="30" cy="38" r="8" fill="#e8f4ff" stroke="#4a9eff" strokeWidth="0.8"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 추천 제품 */}
      <section className="recommended-section">
        <h3 className="section-label">추천 제품</h3>
        <p className="recommended-desc">수분 진정 영양 · 보습 크림</p>
        <button className="btn-product-detail" onClick={() => navigate('/care/product')}>
          제품 자세히 보기
        </button>
      </section>

      {/* 추가 팁 */}
      <section className="tips-section">
        <h3 className="section-label">추가 팁</h3>
        <div className="tips-list">
          <div className="tip-item">
            <span className="tip-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className="tip-text">미지근한 물로 세안하기</span>
          </div>
          <div className="tip-item">
            <span className="tip-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className="tip-text">자극적인 스크럽 제품 피하기</span>
          </div>
          <div className="tip-item">
            <span className="tip-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className="tip-text">충분한 수분 섭취하기</span>
          </div>
          <div className="tip-item">
            <span className="tip-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className="tip-text">너무 높은 시간대 운동은 피하기</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Care
