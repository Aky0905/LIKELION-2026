import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AIReport.css'

function AIReport() {
  const navigate = useNavigate()

  return (
    <div className="page ai-report-page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/skin')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">AI 분석 리포트</span>
        <div className="spacer"></div>
      </header>

      {/* 종합 점수 */}
      <section className="report-score-section">
        <div className="report-score-circle">
          <svg viewBox="0 0 100 100" width="120" height="120">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#e8f4ff" strokeWidth="8"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#4a9eff" strokeWidth="8"
              strokeDasharray={`${75 * 2.64} 264`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"/>
          </svg>
          <div className="report-score-value">
            <span className="score-num">75</span>
            <span className="score-unit">%</span>
          </div>
        </div>
        <p className="report-score-label">피부 컨디션 종합</p>
      </section>

      {/* 항목별 분석 */}
      <section className="report-detail-section">
        <h3 className="report-section-title">항목별 분석</h3>

        <div className="report-item">
          <div className="report-item-header">
            <span className="report-item-label">수분</span>
            <span className="report-item-value">42 / 100</span>
          </div>
          <div className="report-bar-track">
            <div className="report-bar-fill" style={{ width: '42%' }}></div>
          </div>
          <p className="report-item-comment">진단 시점 대비 소폭 하락. 보습 관리 필요.</p>
        </div>

        <div className="report-item">
          <div className="report-item-header">
            <span className="report-item-label">민감도</span>
            <span className="report-item-value">72 / 100</span>
          </div>
          <div className="report-bar-track">
            <div className="report-bar-fill" style={{ width: '72%' }}></div>
          </div>
          <p className="report-item-comment">높은 민감도 상태. 외부 자극 최소화 권장.</p>
        </div>

        <div className="report-item">
          <div className="report-item-header">
            <span className="report-item-label">유분</span>
            <span className="report-item-value">51 / 100</span>
          </div>
          <div className="report-bar-track">
            <div className="report-bar-fill" style={{ width: '51%' }}></div>
          </div>
          <p className="report-item-comment">균형 유지 중. 현재 상태 유지.</p>
        </div>

        <div className="report-item">
          <div className="report-item-header">
            <span className="report-item-label">탄력</span>
            <span className="report-item-value">58 / 100</span>
          </div>
          <div className="report-bar-track">
            <div className="report-bar-fill" style={{ width: '58%' }}></div>
          </div>
          <p className="report-item-comment">보통 수준. 꾸준한 관리로 개선 가능.</p>
        </div>
      </section>

      {/* AI 코멘트 */}
      <section className="report-ai-comment">
        <div className="report-comment-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span className="report-comment-label">AI 종합 코멘트</span>
        </div>
        <p className="report-comment-text">
          수분 부족과 높은 민감도가 주요 관리 포인트입니다.
          최근 2주간 수면 시간 감소와 낮은 습도가 영향을 주고 있어요.
          진정 · 보습 위주의 케어를 추천하며, 3개월 후 재진단을 권장합니다.
        </p>
      </section>

      <button className="btn-care-go" onClick={() => navigate('/care')}>
        맞춤 케어 보러가기
      </button>
    </div>
  )
}

export default AIReport
