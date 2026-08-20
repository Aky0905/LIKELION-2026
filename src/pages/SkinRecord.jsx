import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SkinRecord.css'

const STORAGE_KEY = 'orbit_skin_records'

const moods = [
  {
    id: 'dry',
    label: '건조',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M12 5s-5 6-5 10a5 5 0 0 0 10 0c0-4-5-10-5-10z" fill="#8CC5FF" />
        <path d="M22 9s-3 4-3 6.5a3 3 0 0 0 6 0C25 13 22 9 22 9z" fill="#B3D9FF" />
        <path d="M6 24c3-2 5-2 8 0s5 2 8 0" stroke="#CFE6FF" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'sensitive',
    label: '민감',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l9 3v7c0 6-4 9-9 11-5-2-9-5-9-11V7l9-3z" fill="#F4A0B0" />
        <path d="M12 15.5l3 3 5-5.5" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'oily',
    label: '번들',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M16 4s-5 6-5 10a5 5 0 0 0 10 0c0-4-5-10-5-10z" fill="#7CC0FF" />
        <path d="M7 23c3-2 5-2 8 0s5 2 9 0" stroke="#9CCBFF" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="9" cy="27" r="1" fill="#9CCBFF" />
        <circle cx="14" cy="27.5" r="1" fill="#9CCBFF" />
        <circle cx="19" cy="27.5" r="1" fill="#9CCBFF" />
        <circle cx="24" cy="27" r="1" fill="#9CCBFF" />
      </svg>
    ),
  },
  {
    id: 'good',
    label: '좋음',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <g stroke="#F6BC5B" strokeWidth="1.7" strokeLinecap="round">
          <line x1="16" y1="2" x2="16" y2="4.5" />
          <line x1="6" y1="12" x2="8.5" y2="12" />
          <line x1="23.5" y1="12" x2="26" y2="12" />
          <line x1="8.9" y1="4.9" x2="10.7" y2="6.7" />
          <line x1="21.3" y1="6.7" x2="23.1" y2="4.9" />
        </g>
        <circle cx="16" cy="12" r="5" fill="#FBBF48" />
        <path d="M7 24c3-2 5-2 9 0s5 2 9 0" stroke="#FBD9A0" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'trouble',
    label: '트러블',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" fill="#F8C0C0" opacity="0.5" />
        <circle cx="16" cy="16" r="7.5" fill="#F49090" opacity="0.75" />
        <circle cx="16" cy="16" r="4.5" fill="#EF5B5B" />
      </svg>
    ),
  },
]

// 최초 실행 시 보여줄 기본 기록 (더미)
const seedRecords = [
  { id: 1, date: '8월 18일', mood: '건조', memo: '오후부터 피부가 당기는 느낌이 있었어요.' },
  { id: 2, date: '8월 16일', mood: '민감', memo: '야외 활동 후 피부가 평소보다 불편했어요.' },
  { id: 3, date: '8월 14일', mood: '좋음', memo: '수면 충분히 하니 피부가 편안한 느낌.' },
]

function loadRecords() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch (e) {
    // 파싱 실패 시 시드로 대체
  }
  return seedRecords
}

function formatToday() {
  const now = new Date()
  return `${now.getMonth() + 1}월 ${now.getDate()}일`
}

function SkinRecord() {
  const navigate = useNavigate()
  const [selectedMood, setSelectedMood] = useState(null)
  const [memo, setMemo] = useState('')
  const [records, setRecords] = useState(loadRecords)
  const [saved, setSaved] = useState(false)

  // records 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  }, [records])

  const handleSave = () => {
    if (!selectedMood && !memo.trim()) {
      return
    }

    const moodLabel = moods.find((m) => m.id === selectedMood)?.label || '기록'

    const newRecord = {
      id: Date.now(),
      date: formatToday(),
      mood: moodLabel,
      memo: memo.trim() || '오늘의 피부 상태를 기록했어요.',
    }

    setRecords((prev) => [newRecord, ...prev])
    setSelectedMood(null)
    setMemo('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleDelete = (id) => {
    setRecords((prev) => prev.filter((r) => r.id !== id))
  }

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
              <span className="mood-emoji">{mood.icon}</span>
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

        <button className="btn-save-record" onClick={handleSave}>
          {saved ? '저장되었어요 ✓' : '기록 저장'}
        </button>
      </section>

      {/* 지난 기록 */}
      <section className="past-records">
        <h3 className="past-title">지난 기록</h3>
        <div className="record-list">
          {records.length === 0 && (
            <p className="record-empty">아직 기록이 없어요. 첫 기록을 남겨보세요!</p>
          )}
          {records.map((record) => (
            <div key={record.id} className="record-card">
              <button
                className="record-delete"
                onClick={() => handleDelete(record.id)}
                aria-label="기록 삭제"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="record-date">{record.date}</div>
              <div className="record-mood-tag">{record.mood}</div>
              <p className="record-memo">{record.memo}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SkinRecord
