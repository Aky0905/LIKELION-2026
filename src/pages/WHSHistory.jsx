import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSHistory.css'

const visitRecords = [
  {
    date: '2026.08.20',
    type: 'WHS 정기 진단',
    scores: [
      { label: '수분', value: 42 },
      { label: '민감도', value: 72 },
      { label: '유분', value: 51 },
      { label: '탄력', value: 58 },
    ],
    comment: '수분 지수가 낮고 민감도가 높은 상태입니다. 보습과 진정 중심 관리가 필요합니다.',
  },
  {
    date: '2026.02.15',
    type: 'WHS 정기 진단',
    scores: [
      { label: '수분', value: 48 },
      { label: '민감도', value: 65 },
      { label: '유분', value: 55 },
      { label: '탄력', value: 60 },
    ],
    comment: '전반적으로 안정적인 상태이나 수분 관리가 지속적으로 필요합니다.',
  },
  {
    date: '2025.11.10',
    type: 'WHS 정기 진단',
    scores: [
      { label: '수분', value: 52 },
      { label: '민감도', value: 60 },
      { label: '유분', value: 58 },
      { label: '탄력', value: 63 },
    ],
    comment: '수분·탄력 지표가 양호합니다. 현재 루틴을 유지하세요.',
  },
  {
    date: '2025.08.05',
    type: 'WHS 정기 진단',
    scores: [
      { label: '수분', value: 55 },
      { label: '민감도', value: 58 },
      { label: '유분', value: 60 },
      { label: '탄력', value: 65 },
    ],
    comment: '여름철 유분 증가 경향이 관찰됩니다. 가벼운 보습을 권장합니다.',
  },
  {
    date: '2025.05.20',
    type: 'WHS 정기 진단',
    scores: [
      { label: '수분', value: 50 },
      { label: '민감도', value: 62 },
      { label: '유분', value: 54 },
      { label: '탄력', value: 61 },
    ],
    comment: '첫 정기 진단 결과입니다. 기준 프로필로 저장되었습니다.',
  },
]

function WHSHistory() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  return (
    <div className="page whs-history-page">

      {/* =========================
          Header
      ========================= */}
      <header className="history-header">
        <button
          className="back-btn"
          onClick={() => navigate('/whs')}
          aria-label="뒤로가기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1 className="history-title">방문 기록</h1>

        <div style={{ width: 36 }}></div>
      </header>


      {/* =========================
          안내 카드
      ========================= */}
      <section className="history-guide">
        <div className="guide-calendar">

          {/* 달력 */}
          <svg
            width="76"
            height="68"
            viewBox="0 0 76 68"
            fill="none"
          >
            {/* 달력 본체 */}
            <rect
              x="10"
              y="12"
              width="48"
              height="43"
              rx="7"
              fill="#ffffff"
              stroke="#69b5ff"
              strokeWidth="2"
            />

            {/* 달력 위 고리 */}
            <line
              x1="21"
              y1="7"
              x2="21"
              y2="18"
              stroke="#69b5ff"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <line
              x1="47"
              y1="7"
              x2="47"
              y2="18"
              stroke="#69b5ff"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* 달력 상단 구분선 */}
            <line
              x1="10"
              y1="24"
              x2="58"
              y2="24"
              stroke="#69b5ff"
              strokeWidth="2"
            />

            {/* 달력 내부 */}
            <rect
              x="18"
              y="30"
              width="10"
              height="7"
              rx="2"
              fill="#eaf4ff"
            />

            <rect
              x="33"
              y="30"
              width="10"
              height="7"
              rx="2"
              fill="#eaf4ff"
            />

            <rect
              x="18"
              y="41"
              width="10"
              height="7"
              rx="2"
              fill="#eaf4ff"
            />

            <rect
              x="33"
              y="41"
              width="10"
              height="7"
              rx="2"
              fill="#eaf4ff"
            />

            {/* 체크 원 */}
            <circle
              cx="56"
              cy="49"
              r="12"
              fill="#ffffff"
              stroke="#69b5ff"
              strokeWidth="2"
            />

            {/* 체크 모양 */}
            <polyline
              points="50 49 54 53 62 44"
              fill="none"
              stroke="#69b5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>

        <div className="guide-text">
          <strong>정기적인 진단이 더 건강한 피부를 만듭니다.</strong>
          <span>지금까지 받은 진단 기록을 확인해 보세요.</span>
        </div>
      </section>


      {/* =========================
          방문 기록
      ========================= */}
      <section className="history-section">

        <h2 className="history-section-title">방문 기록</h2>

        <div className="history-record-list">

          {visitRecords.map((record) => (
            <button
              key={record.date}
              className="history-record"
              onClick={() => setSelected(record)}
            >
              <div className="history-record-info">
                <strong>{record.date}</strong>
                <span>{record.type}</span>
              </div>
              <svg
                className="history-record-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}

        </div>

      </section>


      {/* =========================
          진단 주기 추천
      ========================= */}
      <section className="diagnosis-cycle">

        <div className="cycle-icon">
          {/* 시계 아이콘 */}
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
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15.5 14" />
          </svg>
        </div>

        <div className="cycle-info">
          <strong>진단 주기 추천</strong>

          <span>
            최근 3회 진단 주기를 분석한 결과,
          </span>

          <span>
            다음 진단은 <b>2026.11.20</b>가 적절해요.
          </span>
        </div>

      </section>


      {/* =========================
          방문 상세 바텀시트
      ========================= */}
      {selected && (
        <div className="visit-sheet-overlay" onClick={() => setSelected(null)}>
          <div className="visit-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="visit-sheet-handle"></div>

            <div className="visit-sheet-head">
              <div>
                <h3 className="visit-sheet-date">{selected.date}</h3>
                <span className="visit-sheet-type">{selected.type}</span>
              </div>
              <button
                className="visit-sheet-close"
                onClick={() => setSelected(null)}
                aria-label="닫기"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* 진단 점수 */}
            <div className="visit-scores">
              {selected.scores.map((s) => (
                <div className="visit-score-item" key={s.label}>
                  <div className="visit-score-head">
                    <span className="visit-score-label">{s.label}</span>
                    <span className="visit-score-value">{s.value}</span>
                  </div>
                  <div className="visit-score-track">
                    <div
                      className="visit-score-fill"
                      style={{ width: `${s.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* 코멘트 */}
            <div className="visit-comment">
              <div className="visit-comment-head">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#69B5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>진단 코멘트</span>
              </div>
              <p>{selected.comment}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default WHSHistory