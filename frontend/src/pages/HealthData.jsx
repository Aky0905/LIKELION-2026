import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubPage.css'

function HealthData() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    sleep: true,
    heart: true,
    activity: true,
    stress: false,
  })

  const toggle = (key) => {
    setData(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/my')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">건강 데이터 연동</span>
        <div className="spacer"></div>
      </header>

      <div className="info-card">
        <p>수면, 활동량 등 건강 데이터를 연동해요.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">수면 데이터</div>
            <div className="toggle-row-desc">수면 시간, 수면 단계, 수면 품질</div>
          </div>
          <div className={`toggle-switch ${data.sleep ? 'active' : ''}`} onClick={() => toggle('sleep')}>
            <div className="toggle-knob"></div>
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">심박 / HRV</div>
            <div className="toggle-row-desc">심박 변이도, 안정 시 심박수</div>
          </div>
          <div className={`toggle-switch ${data.heart ? 'active' : ''}`} onClick={() => toggle('heart')}>
            <div className="toggle-knob"></div>
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">활동량</div>
            <div className="toggle-row-desc">걸음 수, 운동 시간, 소모 칼로리</div>
          </div>
          <div className={`toggle-switch ${data.activity ? 'active' : ''}`} onClick={() => toggle('activity')}>
            <div className="toggle-knob"></div>
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <div className="toggle-row-label">스트레스 지수</div>
            <div className="toggle-row-desc">일일 스트레스 레벨 측정</div>
          </div>
          <div className={`toggle-switch ${data.stress ? 'active' : ''}`} onClick={() => toggle('stress')}>
            <div className="toggle-knob"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthData
