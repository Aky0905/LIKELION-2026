import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSBooking.css'

function WHSBooking() {
  const navigate = useNavigate()
  const [booked, setBooked] = useState(null)

  const programs = [
    { id: 1, name: '피부 정밀 진단', time: '약 60분', desc: 'AI 피부 프로필 연동' },
    { id: 2, name: '피부 기초 상담', time: '약 30분', desc: '초기 상담 및 프로그램 안내' },
    { id: 3, name: '보습 집중 프로그램', time: '약 90분', desc: '수분 부족 피부 집중 케어' },
  ]

  return (
    <div className="page booking-page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/whs')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">예약하기</span>
        <div className="spacer"></div>
      </header>

      <div className="booking-intro">
        <p>WHS 방문 맞춤 프로그램을 간편하게 예약하세요.</p>
      </div>

      <div className="program-list">
        {programs.map((prog) => (
          <div key={prog.id} className="program-card">
            <div className="program-info">
              <span className="program-name">{prog.name}</span>
              <span className="program-meta">{prog.time} · {prog.desc}</span>
            </div>
            <button
              className={`btn-book ${booked === prog.id ? 'booked' : ''}`}
              onClick={() => setBooked(prog.id)}
            >
              {booked === prog.id ? '예약 완료' : '예약하기'}
            </button>
          </div>
        ))}
      </div>

      {booked && (
        <div className="booking-confirm">
          <p>예약이 완료되었습니다. WHS에서 만나요!</p>
        </div>
      )}
    </div>
  )
}

export default WHSBooking
