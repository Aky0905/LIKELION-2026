import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SkinRecord.css'

function SkinRecord() {
  const navigate = useNavigate()
  const [selectedMood, setSelectedMood] = useState(null)
  const [memo, setMemo] = useState('')

  const moods = [
    { id: 'dry', label: '건조', emoji: '🏜️' },
    { id: 'sensitive', label: '민감', emoji: '⚡' },
    { id: 'oily', label: '번들', emoji: '💧' },
    { id: 'good', label: '좋음', emoji: '✨' },
    { id: 'trouble', label: '트러블', emoji: '🔴' },
  ]

  return (
    <div className="page skin-record-page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/my')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">피부 상태 기록</span>
        <div className="spacer"></div>
      </header>

      {/* 오늘 기록 */}
      <section className="record-input-section">
        <h3 className="record-question">오늘은 어떠세요?</h3>
        <div className="mood-selector">
          {moods.map((mood) => (
            <button
              key={mood.id}
              className={`mood-btn ${selectedMood === mood.id ? 'active' : ''}`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <span className="mood-emoji">{mood.emoji}</span>
              <span className="mood-label">{mood.label}</span>
            </button>
          ))}
        </div>

        <textarea
          className="record-textarea"
          placeholder="오늘 피부가 어떻게 느껴지나요? 자유롭게 기록해보세요."
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          rows={4}
        />

        <button className="btn-save-record">기록 저장</button>
      </section>

      {/* 지난 기록 */}
      <section className="past-records">
        <h3 className="past-title">지난 기록</h3>
        <div className="record-list">
          <div className="record-card">
            <div className="record-date">8월 18일</div>
            <div className="record-mood-tag">건조</div>
            <p className="record-memo">오후부터 피부가 당기는 느낌이 있었어요.</p>
          </div>
          <div className="record-card">
            <div className="record-date">8월 16일</div>
            <div className="record-mood-tag">민감</div>
            <p className="record-memo">야외 활동 후 피부가 평소보다 불편했어요.</p>
          </div>
          <div className="record-card">
            <div className="record-date">8월 14일</div>
            <div className="record-mood-tag">좋음</div>
            <p className="record-memo">수면 충분히 하니 피부가 편안한 느낌.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkinRecord
