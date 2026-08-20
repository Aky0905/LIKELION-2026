import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyPage.css'

function MyPage() {
  const navigate = useNavigate()

  return (
    <div className="page mypage">
      <header className="mypage-header">
        <h1 className="mypage-title">마이</h1>
      </header>

      <section className="profile-card">
        <div className="profile-avatar">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="#e8f4ff"/>
            <ellipse cx="28" cy="24" rx="10" ry="11" fill="#fef2e8"/>
            <path d="M18 22 Q18 14 28 12 Q38 14 38 22" fill="#d4a574" opacity="0.4"/>
            <circle cx="24" cy="24" r="1.5" fill="#4a3728"/>
            <circle cx="32" cy="24" r="1.5" fill="#4a3728"/>
            <path d="M25 29 Q28 31 31 29" stroke="#e8a090" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M14 44 Q14 36 28 34 Q42 36 42 44" fill="#4a9eff" opacity="0.2"/>
          </svg>
        </div>
        <div className="profile-info">
          <h2 className="profile-name">김채영님</h2>
          <span className="profile-membership">WHS Care Member</span>
        </div>
        <button className="btn-profile-view">프로필 보기</button>
      </section>

      <div className="mypage-menu-list">
        <div className="mypage-menu-item" onClick={() => navigate('/my/record')}>
          <div className="mypage-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </div>
          <div className="mypage-menu-info">
            <span className="mypage-menu-name">피부 상태 기록</span>
            <span className="mypage-menu-desc">내 피부 상태를 생활 기록을 한눈에 관리해요.</span>
          </div>
          <div className="mypage-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="mypage-menu-item" onClick={() => navigate('/my/alarm')}>
          <div className="mypage-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
          <div className="mypage-menu-info">
            <span className="mypage-menu-name">알림 설정</span>
            <span className="mypage-menu-desc">피부 · 예약 알림을 설정해요.</span>
          </div>
          <div className="mypage-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="mypage-menu-item" onClick={() => navigate('/my/wearable')}>
          <div className="mypage-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="2" width="12" height="20" rx="6"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
            </svg>
          </div>
          <div className="mypage-menu-info">
            <span className="mypage-menu-name">웨어러블 연결</span>
            <span className="mypage-menu-desc">Apple Watch 데이터를 연결해요.</span>
          </div>
          <div className="mypage-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="mypage-menu-item" onClick={() => navigate('/my/health')}>
          <div className="mypage-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div className="mypage-menu-info">
            <span className="mypage-menu-name">건강 데이터 연동</span>
            <span className="mypage-menu-desc">수면, 활동량 등 건강 데이터를 연동해요.</span>
          </div>
          <div className="mypage-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="mypage-menu-item" onClick={() => navigate('/my/settings')}>
          <div className="mypage-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
          <div className="mypage-menu-info">
            <span className="mypage-menu-name">앱 설정</span>
            <span className="mypage-menu-desc"></span>
          </div>
          <div className="mypage-menu-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage
