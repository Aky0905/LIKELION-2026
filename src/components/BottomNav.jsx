import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './BottomNav.css'

const navItems = [
  {
    path: '/',
    label: '홈',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },

  {
    path: '/analysis',
    label: '분석',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 수첩 외곽 */}
        <rect x="5" y="3" width="15" height="18" rx="2" />

        {/* 수첩 왼쪽 제본 부분 */}
        <line x1="8" y1="3" x2="8" y2="21" />

        {/* 기록 줄 */}
        <line x1="11" y1="8" x2="17" y2="8" />
        <line x1="11" y1="12" x2="17" y2="12" />
        <line x1="11" y1="16" x2="15" y2="16" />
      </svg>
    ),
  },

  {
    path: '/care',
    label: '케어',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.5s-6 6.5-6 10.5a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5z" />
      </svg>
    ),
  },

  {
    path: '/whs',
    label: 'WHS',
    icon: (
      <div className="whs-nav-icon">
        W
      </div>
    ),
  },

  {
    path: '/my',
    label: '마이',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive =
          item.path === '/'
            ? location.pathname === '/'
            : location.pathname === item.path ||
              location.pathname.startsWith(item.path + '/')

        return (
          <button
            key={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="nav-icon">
              {item.icon}
            </span>

            <span className="nav-label">
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav