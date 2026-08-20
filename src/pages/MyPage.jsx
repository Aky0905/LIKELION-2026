import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyPage.css'

function MyPage() {
  const navigate = useNavigate()

  const menuItems = [
    {
      label: '알림 설정',
      description: '피부 · 예약 알림을 설정해요.',
      path: '/settings/alarm',
      icon: (
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
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>
      ),
    },

    {
      label: '웨어러블 연동',
      description: 'Apple Watch 데이터를 연결해요.',
      path: '/wearable',
      icon: (
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
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <path d="M9 1h6" />
          <path d="M9 23h6" />
        </svg>
      ),
    },

    {
      label: '건강 데이터 연동',
      description: '수면, 활동량 등 건강 데이터를 연동해요.',
      path: '/health-data',
      icon: (
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
          <polyline points="3 12 7 12 9 5 13 19 15 12 21 12" />
        </svg>
      ),
    },

    {
      label: '앱 설정',
      description: '앱 환경을 설정해요.',
      path: '/settings/app',
      icon: (
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
          {/* 톱니바퀴 */}
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />

          <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.05.05-1.8 1.8-.05-.05a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.08 1.65v.07h-2.55v-.07a1.8 1.8 0 0 0-1.08-1.65 1.8 1.8 0 0 0-1.98.36l-.05.05-1.8-1.8.05-.05A1.8 1.8 0 0 0 7.86 15a1.8 1.8 0 0 0-1.65-1.08h-.07v-2.55h.07a1.8 1.8 0 0 0 1.65-1.08 1.8 1.8 0 0 0-.36-1.98l-.05-.05 1.8-1.8.05.05a1.8 1.8 0 0 0 1.98.36 1.8 1.8 0 0 0 1.08-1.65v-.07h2.55v.07a1.8 1.8 0 0 0 1.08 1.65 1.8 1.8 0 0 0 1.98-.36l.05-.05 1.8 1.8-.05.05A1.8 1.8 0 0 0 19.4 10.3a1.8 1.8 0 0 0 1.65 1.08h.07v2.55h-.07A1.8 1.8 0 0 0 19.4 15Z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="page mypage">

      {/* =========================
          Header
      ========================= */}
      <header className="mypage-header">

        <h1 className="mypage-title">
          마이페이지
        </h1>

      </header>


      {/* =========================
          Profile Card
      ========================= */}
      <section className="profile-card">

        <div className="profile-avatar">
          <div className="profile-avatar-circle">
            👤
          </div>
        </div>

        <div className="profile-info">
          <span className="profile-name">
            WHS님
          </span>

          <span className="profile-membership">
            WHS Care Member
          </span>
        </div>

        <button
          className="btn-profile-view"
          onClick={() => navigate('/my/profile')}
        >
          프로필 보기
        </button>

      </section>


      {/* =========================
          Menu List
      ========================= */}
      <div className="mypage-menu-list">

        {menuItems.map((item) => (

          <div
            key={item.label}
            className="mypage-menu-item"
            onClick={() => navigate(item.path)}
          >

            <div className="mypage-menu-icon">
              {item.icon}
            </div>

            <div className="mypage-menu-info">

              <span className="mypage-menu-name">
                {item.label}
              </span>

              <span className="mypage-menu-desc">
                {item.description}
              </span>

            </div>

            <div className="mypage-menu-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default MyPage