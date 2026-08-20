import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Wearable.css'

function Wearable() {
  const navigate = useNavigate()

  return (
    <div className="page wearable-page">
      {/* Header */}
      <header className="wearable-header">
        <button className="back-btn" onClick={() => navigate('/my')} aria-label="뒤로가기">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h1 className="wearable-title">웨어러블 연결</h1>
        <div style={{ width: 36 }}></div>
      </header>

      {/* 연결 상태 카드 */}
      <section className="device-card">
        <div className="device-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="2" width="12" height="20" rx="6"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="15" r="1"/>
          </svg>
        </div>
        <div className="device-info">
          <h2 className="device-name">Apple Watch Series 9</h2>
          <span className="device-status connected">연결됨</span>
        </div>
        <div className="device-toggle">
          <div className="toggle-switch active">
            <div className="toggle-knob"></div>
          </div>
        </div>
      </section>

      {/* 연동 데이터 */}
      <section className="sync-data-section">
        <h3 className="sync-label">연동 중인 데이터</h3>
        <div className="sync-list">
          <div className="sync-item">
            <div className="sync-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </div>
            <div className="sync-info">
              <span className="sync-name">수면</span>
              <span className="sync-desc">수면 시간, 수면 단계</span>
            </div>
            <span className="sync-status">동기화됨</span>
          </div>

          <div className="sync-item">
            <div className="sync-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="sync-info">
              <span className="sync-name">심박수 / HRV</span>
              <span className="sync-desc">심박 변이도, 안정 시 심박</span>
            </div>
            <span className="sync-status">동기화됨</span>
          </div>

          <div className="sync-item">
            <div className="sync-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div className="sync-info">
              <span className="sync-name">활동량</span>
              <span className="sync-desc">걸음 수, 운동 시간, 칼로리</span>
            </div>
            <span className="sync-status">동기화됨</span>
          </div>

          <div className="sync-item">
            <div className="sync-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V10M12 20V4M6 20v-6"/>
              </svg>
            </div>
            <div className="sync-info">
              <span className="sync-name">스트레스 지수</span>
              <span className="sync-desc">일일 스트레스 레벨</span>
            </div>
            <span className="sync-status">동기화됨</span>
          </div>
        </div>
      </section>

      {/* 마지막 동기화 */}
      <section className="last-sync">
        <span className="last-sync-text">마지막 동기화: 오늘 13:42</span>
        <button className="btn-sync">수동 동기화</button>
      </section>
    </div>
  )
}

export default Wearable
