import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WHS.css'

function WHS() {
  const navigate = useNavigate()

  return (
    <div className="page whs-page">
      <header className="whs-header">
        <h1 className="whs-title">WHS</h1>
        <button className="notification-btn" aria-label="알림">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </header>

      <div className="whs-menu-list">
        <div className="whs-menu-item" onClick={() => navigate('/whs/booking')}>
          <div className="whs-menu-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div className="whs-menu-info">
            <span className="whs-menu-name">예약하기</span>
            <span className="whs-menu-desc">WHS 방문 맞춤 프로그램을 간편하게 예약해요.</span>
          </div>
          <div className="whs-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="whs-menu-item" onClick={() => navigate('/whs/diagnosis')}>
          <div className="whs-menu-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div className="whs-menu-info">
            <span className="whs-menu-name">진단 결과</span>
            <span className="whs-menu-desc">WHS에서 받은 오프라인 진단 결과를 확인해요.</span>
          </div>
          <div className="whs-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="whs-menu-item" onClick={() => navigate('/whs/history')}>
          <div className="whs-menu-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="whs-menu-info">
            <span className="whs-menu-name">방문 기록</span>
            <span className="whs-menu-desc">WHS 방문 및 상담 기록을 볼 수 있어요.</span>
          </div>
          <div className="whs-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="whs-menu-item" onClick={() => navigate('/whs/products')}>
          <div className="whs-menu-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
          <div className="whs-menu-info">
            <span className="whs-menu-name">구매 제품</span>
            <span className="whs-menu-desc">WHS에서 구매한 제품 이력을 내 피부와 연결해요.</span>
          </div>
          <div className="whs-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="whs-menu-item" onClick={() => navigate('/whs/recommend')}>
          <div className="whs-menu-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <div className="whs-menu-info">
            <span className="whs-menu-name">제품 추천</span>
            <span className="whs-menu-desc">AI가 분석한 피부 데이터를 바탕으로 제품을 추천해요.</span>
          </div>
          <div className="whs-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WHS
