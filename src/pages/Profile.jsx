import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
  const navigate = useNavigate()

  const skinProfile = [
    { label: '수분', value: '낮음' },
    { label: '민감도', value: '높음' },
    { label: '유분', value: '보통' },
    { label: '탄력', value: '보통' },
  ]

  const accountInfo = [
    { label: '이름', value: 'WHS님' },
    { label: '멤버십', value: 'WHS Care Member' },
    { label: '가입일', value: '2026.03.15' },
    { label: '최근 진단일', value: '2026.05.20' },
  ]

  return (
    <div className="page profile-page">
      {/* Header */}
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/my')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="sub-title">프로필</span>
        <div className="spacer"></div>
      </header>

      {/* 프로필 상단 */}
      <section className="profile-hero">
        <div className="profile-hero-avatar">👤</div>
        <h2 className="profile-hero-name">WHS님</h2>
        <span className="profile-hero-badge">WHS Care Member</span>
      </section>

      {/* 나의 피부 프로필 */}
      <section className="profile-section">
        <h3 className="profile-section-title">나의 피부 프로필</h3>
        <div className="profile-skin-grid">
          {skinProfile.map((item) => (
            <div key={item.label} className="profile-skin-item">
              <span className="profile-skin-label">{item.label}</span>
              <span className="profile-skin-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 계정 정보 */}
      <section className="profile-section">
        <h3 className="profile-section-title">계정 정보</h3>
        <div className="profile-account-list">
          {accountInfo.map((item) => (
            <div key={item.label} className="profile-account-row">
              <span className="profile-account-label">{item.label}</span>
              <span className="profile-account-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 액션 버튼 */}
      <div className="profile-actions">
        <button className="profile-btn-edit">프로필 수정</button>
        <button className="profile-btn-logout">로그아웃</button>
      </div>
    </div>
  )
}

export default Profile
