import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSHistory.css'

function WHSHistory() {
  const navigate = useNavigate()

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

          <div className="history-record">
            <strong>2026.08.20</strong>
            <span>WHS 정기 진단</span>
          </div>

          <div className="history-record">
            <strong>2026.02.15</strong>
            <span>WHS 정기 진단</span>
          </div>

          <div className="history-record">
            <strong>2025.11.10</strong>
            <span>WHS 정기 진단</span>
          </div>

          <div className="history-record">
            <strong>2025.08.05</strong>
            <span>WHS 정기 진단</span>
          </div>

          <div className="history-record">
            <strong>2025.05.20</strong>
            <span>WHS 정기 진단</span>
          </div>

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

    </div>
  )
}

export default WHSHistory