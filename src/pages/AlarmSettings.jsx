import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubPage.css'

function AlarmSettings() {
  const navigate = useNavigate()
  const [alarms, setAlarms] = useState({
    prediction: true,
    care: true,
    booking: false,
  })

  const toggle = (key) => {
    setAlarms(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/my')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">알림 설정</span>
        <div className="spacer"></div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">피부 예측 알림</div>
            <div className="toggle-row-desc">매일 아침 오늘의 피부 예측을 알려드려요</div>
          </div>
          <div className={`toggle-switch ${alarms.prediction ? 'active' : ''}`} onClick={() => toggle('prediction')}>
            <div className="toggle-knob"></div>
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">케어 알림</div>
            <div className="toggle-row-desc">오늘의 케어를 잊지 않도록 알려드려요</div>
          </div>
          <div className={`toggle-switch ${alarms.care ? 'active' : ''}`} onClick={() => toggle('care')}>
            <div className="toggle-knob"></div>
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">예약 알림</div>
            <div className="toggle-row-desc">WHS 예약 일정을 미리 알려드려요</div>
          </div>
          <div className={`toggle-switch ${alarms.booking ? 'active' : ''}`} onClick={() => toggle('booking')}>
            <div className="toggle-knob"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlarmSettings
