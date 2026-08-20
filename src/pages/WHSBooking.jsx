import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSBooking.css'

const programs = [
  { id: 1, name: '피부 정밀 진단', time: '약 60분', desc: 'AI 피부 프로필 연동' },
  { id: 2, name: '피부 기초 상담', time: '약 30분', desc: '초기 상담 및 프로그램 안내' },
  { id: 3, name: '보습 집중 프로그램', time: '약 90분', desc: '수분 부족 피부 집중 케어' },
]

const timeSlots = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const dayNames = ['일', '월', '화', '수', '목', '금', '토']

/* 오늘부터 7일간의 날짜 목록 생성 */
function getUpcomingDays() {
  const days = []
  const today = new Date()
  for (let i = 0; i < 7; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push({
      key: `${d.getMonth() + 1}-${d.getDate()}`,
      month: d.getMonth() + 1,
      date: d.getDate(),
      day: dayNames[d.getDay()],
      isToday: i === 0,
    })
  }
  return days
}

function WHSBooking() {
  const navigate = useNavigate()
  const days = getUpcomingDays()

  const [selectedProgram, setSelectedProgram] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [confirmed, setConfirmed] = useState(null)

  const openBooking = (program) => {
    setSelectedProgram(program)
    setSelectedDay(null)
    setSelectedTime(null)
    setConfirmed(null)
  }

  const closeBooking = () => {
    setSelectedProgram(null)
    setSelectedDay(null)
    setSelectedTime(null)
  }

  const handleConfirm = () => {
    if (!selectedDay || !selectedTime) return
    setConfirmed({
      program: selectedProgram.name,
      day: selectedDay,
      time: selectedTime,
    })
    setSelectedProgram(null)
  }

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

      {/* 예약 완료 요약 */}
      {confirmed && (
        <div className="booking-success">
          <div className="booking-success-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="booking-success-text">
            <strong>예약이 완료되었어요!</strong>
            <span>
              {confirmed.program} · {confirmed.day.month}월 {confirmed.day.date}일({confirmed.day.day}) {confirmed.time}
            </span>
          </div>
        </div>
      )}

      {/* 프로그램 목록 */}
      <div className="program-list">
        {programs.map((prog) => (
          <div key={prog.id} className="program-card">
            <div className="program-info">
              <span className="program-name">{prog.name}</span>
              <span className="program-meta">{prog.time} · {prog.desc}</span>
            </div>
            <button className="btn-book" onClick={() => openBooking(prog)}>
              예약하기
            </button>
          </div>
        ))}
      </div>

      {/* 예약 상세 (날짜/시간 선택) 바텀시트 */}
      {selectedProgram && (
        <div className="booking-sheet-overlay" onClick={closeBooking}>
          <div className="booking-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="booking-sheet-handle"></div>

            <h3 className="booking-sheet-title">{selectedProgram.name}</h3>
            <p className="booking-sheet-sub">{selectedProgram.time} · {selectedProgram.desc}</p>

            {/* 날짜 선택 */}
            <div className="booking-field-label">날짜 선택</div>
            <div className="date-scroll">
              {days.map((d) => (
                <button
                  key={d.key}
                  className={`date-chip ${selectedDay?.key === d.key ? 'active' : ''}`}
                  onClick={() => setSelectedDay(d)}
                >
                  <span className="date-chip-day">{d.isToday ? '오늘' : d.day}</span>
                  <span className="date-chip-num">{d.date}</span>
                </button>
              ))}
            </div>

            {/* 시간 선택 */}
            <div className="booking-field-label">시간 선택</div>
            <div className="time-grid">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  className={`time-chip ${selectedTime === t ? 'active' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* 확정 버튼 */}
            <button
              className="booking-confirm-btn"
              disabled={!selectedDay || !selectedTime}
              onClick={handleConfirm}
            >
              {selectedDay && selectedTime
                ? `${selectedDay.month}월 ${selectedDay.date}일 ${selectedTime} 예약 확정`
                : '날짜와 시간을 선택해주세요'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WHSBooking
