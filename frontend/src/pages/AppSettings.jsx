import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SubPage.css'

function AppSettings() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/my')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">앱 설정</span>
        <div className="spacer"></div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">버전 정보</div>
            <div className="toggle-row-desc">ORBIT v1.0.0</div>
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">이용약관</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">개인정보처리방침</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">고객센터</div>
            <div className="toggle-row-desc">문의 및 도움</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>

        <div className="toggle-row" style={{ marginTop: '20px' }}>
          <div>
            <div className="toggle-row-label" style={{ color: '#9ca3af' }}>로그아웃</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppSettings
