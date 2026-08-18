import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WHSHistory.css'

function WHSHistory() {
  const navigate = useNavigate()

  return (
    <div className="page whs-history-page">
      {/* Header */}
      <header className="history-header">
        <button className="back-btn" onClick={() => navigate('/whs')} aria-label="뒤로가기">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h1 className="history-title">방문 기록</h1>
        <div style={{ width: 36 }}></div>
      </header>

      {/* 방문 기록 리스트 */}
      <section className="history-list">
        <div className="history-card">
          <div className="history-date-badge">
            <span className="history-month">5월</span>
            <span className="history-day">20</span>
          </div>
          <div className="history-info">
            <span className="history-type">피부 정밀 진단</span>
            <span className="history-detail">WHS 프로페셔널 진단 · 2회차</span>
            <span className="history-result">수분 42 · 민감도 72 · 유분 51 · 탄력 58</span>
          </div>
          <div className="history-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="history-card">
          <div className="history-date-badge">
            <span className="history-month">4월</span>
            <span className="history-day">08</span>
          </div>
          <div className="history-info">
            <span className="history-type">피부 기초 진단</span>
            <span className="history-detail">WHS 프로페셔널 진단 · 1회차</span>
            <span className="history-result">수분 48 · 민감도 65 · 유분 55 · 탄력 62</span>
          </div>
          <div className="history-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        <div className="history-card">
          <div className="history-date-badge">
            <span className="history-month">3월</span>
            <span className="history-day">15</span>
          </div>
          <div className="history-info">
            <span className="history-type">피부 상담</span>
            <span className="history-detail">초기 상담 및 프로그램 안내</span>
            <span className="history-result">보습 프로그램 추천</span>
          </div>
          <div className="history-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 다음 진단 안내 */}
      <section className="next-visit">
        <div className="next-visit-card">
          <div className="next-visit-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div className="next-visit-info">
            <span className="next-visit-label">다음 진단 추천 시점</span>
            <span className="next-visit-date">2026년 8월 20일</span>
            <span className="next-visit-desc">이전 진단 이후 약 3개월이 경과했어요.</span>
          </div>
        </div>
        <button className="btn-reserve">재진 예약하기</button>
      </section>
    </div>
  )
}

export default WHSHistory
