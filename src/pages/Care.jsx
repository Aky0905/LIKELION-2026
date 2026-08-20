import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Care.css'
import lotionImage from '../assets/lotion.png'
import { getCare } from '../api/api'

const DEFAULT_CARE = {
  priority: {
    name: '진정 · 보습 케어',
    description: '피부가 민감해지기 쉬운 상태예요.',
  },
  tips: [
    { title: '미지근한 물로 세안하기', desc: '피부 자극을 줄여주세요.' },
    { title: '자외선과 보습에 신경 쓰기', desc: '외출 전 보습을 챙겨주세요.' },
    { title: '충분한 수분 섭취하기', desc: '건조하지 않도록 물을 자주 마셔주세요.' },
  ],
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 12 10 17 19 7" />
    </svg>
  )
}

function Care() {
  const navigate = useNavigate()
  const [data, setData] = useState(DEFAULT_CARE)

  useEffect(() => {
    getCare()
      .then((res) => setData({ ...DEFAULT_CARE, ...res }))
      .catch(() => {})
  }, [])

  const { priority, tips } = data

  return (
    <div className="care-page">

      {/* =========================
          Header
      ========================= */}
      <header className="care-header">

        <div>
          <h1 className="care-title">
            오늘의 케어 제안
          </h1>

          <p className="care-description">
            AI가 내 피부에 맞는 케어를 추천해요.
          </p>
        </div>

        <button
          className="care-notification-btn"
          aria-label="알림"
        >
          <svg
            width="22"
            height="22"
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
          우선 케어 카드
      ========================= */}
      <section className="priority-care-card">

        {/* 우선 케어 이름표 */}
        <div className="priority-label">
          우선 케어
        </div>


        <div className="priority-care-content">

          {/* 제품 이미지 */}
          <div className="care-product-image">
            <img
              src={lotionImage}
              alt="진정 보습 케어 제품"
              className="care-lotion-image"
            />
          </div>


          {/* 제품 정보 */}
          <div className="care-product-info">

            <h2 className="care-product-name">
              {priority.name}
            </h2>

            <p className="care-product-description">
              {priority.description}
            </p>

          </div>


          {/* 제품 자세히 보기 */}
          <button
            className="care-product-button"
            onClick={() => navigate('/care/product')}
          >
            제품 자세히 보기
          </button>

        </div>

      </section>


      {/* =========================
          추가 팁
      ========================= */}
      <section className="additional-tips">

        <h2 className="section-title">
          추가 팁
        </h2>


        <div className="tips-card">

          {tips.map((tip, i) => (
            <div className="tip-item" key={i}>
              <div className="tip-icon tip-blue">
                <CheckIcon />
              </div>
              <div className="tip-content">
                <strong>{tip.title}</strong>
                <span>{tip.desc}</span>
              </div>
            </div>
          ))}

        </div>

      </section>


    </div>
  )
}

export default Care