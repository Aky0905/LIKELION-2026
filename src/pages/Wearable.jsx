import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Wearable.css'

const syncData = [
  {
    name: '수면',
    desc: '수면 시간, 수면 단계',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
  },
  {
    name: '심박수 / HRV',
    desc: '심박 변이도, 안정 시 심박',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: '활동량',
    desc: '걸음 수, 운동 시간, 칼로리',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="4" r="1" />
        <path d="M4 17l5 1l.75 -1.5" />
        <path d="M15 21l0 -4l-4 -3l1 -6" />
        <path d="M7 12l0 -3l5 -1l3 3l3 1" />
      </svg>
    ),
  },
  {
    name: '스트레스 지수',
    desc: '일일 스트레스 레벨',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
  },
]

function currentTime() {
  const now = new Date()
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  return `오늘 ${hh}:${mm}`
}

function Wearable() {
  const navigate = useNavigate()
  const [connected, setConnected] = useState(true)
  const [lastSync, setLastSync] = useState('오늘 13:42')

  const handleSync = () => {
    if (!connected) return
    setLastSync(currentTime())
  }

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
          <span className={`device-status ${connected ? 'connected' : 'disconnected'}`}>
            {connected ? '연결됨' : '연결 안 됨'}
          </span>
        </div>
        <div className="device-toggle">
          <div
            className={`toggle-switch ${connected ? 'active' : ''}`}
            onClick={() => setConnected((v) => !v)}
            role="switch"
            aria-checked={connected}
          >
            <div className="toggle-knob"></div>
          </div>
        </div>
      </section>

      {/* 연동 데이터 */}
      <section className="sync-data-section">
        <h3 className="sync-label">연동 중인 데이터</h3>
        <div className={`sync-list ${connected ? '' : 'disabled'}`}>
          {syncData.map((item) => (
            <div className="sync-item" key={item.name}>
              <div className="sync-icon">{item.icon}</div>
              <div className="sync-info">
                <span className="sync-name">{item.name}</span>
                <span className="sync-desc">{item.desc}</span>
              </div>
              <span className="sync-status">
                {connected ? '동기화됨' : '대기 중'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 마지막 동기화 */}
      <section className="last-sync">
        <span className="last-sync-text">
          {connected ? `마지막 동기화: ${lastSync}` : '연결이 해제되었어요'}
        </span>
        <button
          className="btn-sync"
          onClick={handleSync}
          disabled={!connected}
        >
          수동 동기화
        </button>
      </section>
    </div>
  )
}

export default Wearable
