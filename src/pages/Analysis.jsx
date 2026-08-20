import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Analysis.css'


function AnalysisIcon({ type }) {

  if (type === 'sleep') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    )
  }

  if (type === 'water') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    )
  }

  if (type === 'activity') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13" cy="4" r="1" />
        <path d="M4 17l5 1l.75 -1.5" />
        <path d="M15 21l0 -4l-4 -3l1 -6" />
        <path d="M7 12l0 -3l5 -1l3 3l3 1" />
      </svg>
    )
  }

  if (type === 'redness') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 12h7" />
        <path d="M10 9.5c.5.7 1.2 1 2 1s1.5-.3 2-1" />
        <path d="M10 15c.5-.7 1.2-1 2-1s1.5.3 2 1" />
      </svg>
    )
  }

  if (type === 'barrier') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7 3v5c0 4.7-2.9 8-7 10-4.1-2-7-5.3-7-10V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  }

  return null
}


function TrendArrow({ type }) {

  if (type === 'down') {
    return <span className="trend-arrow down">↓</span>
  }

  if (type === 'up') {
    return <span className="trend-arrow up">↑</span>
  }

  return <span className="trend-arrow normal">—</span>
}


function Analysis() {

  const navigate = useNavigate()

  const offlineDiagnosis = [
    {
      icon: 'sleep',
      label: '수면',
      result: '진단 결과: 보통',
      level: '보통',
      color: 'purple',
      width: '58%',
    },
    {
      icon: 'water',
      label: '수분',
      result: '진단 결과: 낮음',
      level: '낮음',
      color: 'blue',
      width: '28%',
    },
    {
      icon: 'activity',
      label: '활동량',
      result: '진단 결과: 보통',
      level: '보통',
      color: 'red',
      width: '50%',
    },
    {
      icon: 'redness',
      label: '홍조 경향',
      result: '진단 결과: 높음',
      level: '높음',
      color: 'pink',
      width: '82%',
    },
    {
      icon: 'barrier',
      label: '장벽 민감도',
      result: '진단 결과: 높음',
      level: '높음',
      color: 'yellow',
      width: '82%',
    },
  ]


  const currentState = [
    {
      icon: 'sleep',
      label: '수면 부족',
      value: '평소 대비 -1시간 20분',
      color: 'purple',
      trend: 'down',
    },
    {
      icon: 'activity',
      label: '활동량 증가',
      value: '평소 대비 +45%',
      color: 'red',
      trend: 'up',
    },
    {
      icon: 'water',
      label: '습도 낮음',
      value: '현재 35%',
      color: 'blue',
      trend: 'down',
    },
    {
      icon: 'uv',
      label: 'UV 지수 보통',
      value: '현재 3 (보통)',
      color: 'yellow',
      trend: 'normal',
    },
  ]


  return (
    <div className="page analysis-page">

      {/* =========================
          Header
      ========================= */}

      <header className="analysis-header">

        <div className="analysis-header-title">

          <div className="analysis-label">
            TRIGGER 분석
          </div>

          <h1>
           
          </h1>

          <p>
            
          </p>

        </div>


        <button
          className="analysis-notification-btn"
          aria-label="알림"
          type="button"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
        </button>

      </header>


      {/* =========================
          오프라인 진단 기준
      ========================= */}

      <section className="offline-diagnosis-section">

        <div className="section-heading">

          <h2>
            오프라인 진단 기준
          </h2>

          <span className="diagnosis-date">
            2026.05.20
          </span>

        </div>


        <div className="offline-card">

          <div className="offline-card-header">

            <div className="offline-card-title">

              <strong>
                WHS 프로페셔널 진단
              </strong>

              <span>
                최근 오프라인 피부 진단 결과
              </span>

            </div>

            <span className="offline-badge">
              기준
            </span>

          </div>


          <div className="offline-result-list">

            {offlineDiagnosis.map((item) => (

              <div
                className="offline-result-item"
                key={item.label}
              >

                <div
                  className={`offline-icon ${item.color}`}
                >
                  <AnalysisIcon type={item.icon} />
                </div>


                <div className="offline-result-info">

                  <div className="offline-result-title">

                    <strong>
                      {item.label}
                    </strong>

                    <span>
                      {item.result}
                    </span>

                  </div>


                  <div className="offline-result-bar-wrap">

                    <div className="offline-result-bar">

                      <div
                        className={`offline-result-fill ${item.color}`}
                        style={{
                          width: item.width,
                        }}
                      />

                    </div>

                    <span
                      className={`offline-level ${item.color}`}
                    >
                      {item.level}
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          현재 나의 상태
      ========================= */}

      <section className="current-state-section">

        <div className="current-heading">

          <h2>
            현재 나의 상태
          </h2>

          <span>
            2026.08.20 기준
          </span>

        </div>


        <div className="current-state-card">

          {currentState.map((item) => (

            <div
              className="current-state-item"
              key={item.label}
            >

              <div
                className={`state-icon ${item.color}`}
              >

                {item.icon === 'sleep' && (
                  <AnalysisIcon type="sleep" />
                )}

                {item.icon === 'activity' && (
                  <AnalysisIcon type="activity" />
                )}

                {item.icon === 'water' && (
                  <AnalysisIcon type="water" />
                )}

                {item.icon === 'uv' && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}

              </div>


              <div className="state-info">

                <strong>
                  {item.label}
                </strong>

                <span>
                  {item.value}
                </span>

              </div>


              <TrendArrow type={item.trend} />

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          AI 분석 결과
      ========================= */}
<section className="analysis-ai-section">
  <div className="analysis-ai-card">

    <div className="analysis-ai-header">
      <span className="analysis-ai-star">✦</span>
      <strong>AI 분석 결과</strong>
    </div>

    <h3 className="analysis-ai-title">
      건조 · 민감 가능성 높음
    </h3>

    <p className="analysis-ai-description">
      수면 부족과 낮은 습도가 함께 나타나 피부 수분 부족과 민감도 증가에 영향을 준 것으로 분석됩니다. 오늘은 보습과 진정 중심의 관리가 필요하며, 외부 자극을 최소화하는 것이 좋아요.
    </p>

    <button
      className="analysis-report-btn"
      onClick={() => navigate('/analysis/report')}
    >
      AI 리포트 전체 보기
    </button>

  </div>
</section>


      <div style={{ height: 24 }} />

    </div>
  )
}


export default Analysis