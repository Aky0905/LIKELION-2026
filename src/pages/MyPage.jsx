import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyPage.css'

function MyPage() {
  const navigate = useNavigate()

  const menuItems = [
    {
      label: '피부 상태 기록',
      description: '내 피부 상태와 생활 기록을 남겨요.',
      path: '/my/record',
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
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
    },

    {
      label: '알림 설정',
      description: '피부 · 예약 알림을 설정해요.',
      path: '/my/alarm',
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
      path: '/my/wearable',
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
      path: '/my/health',
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
      path: '/my/settings',
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
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
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
        {/* /my/profile 라우트는 App.jsx에 등록됨 */}

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