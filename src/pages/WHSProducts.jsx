import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SubPage.css'

function WHSProducts() {
  const navigate = useNavigate()

  const products = [
    { name: '수분 진정 영양 보습 크림', date: '2026.05.20', status: '사용 중' },
    { name: '저자극 클렌징 폼', date: '2026.05.20', status: '사용 중' },
    { name: '세라마이드 토너', date: '2026.04.08', status: '사용 완료' },
  ]

  return (
    <div className="page products-page">

      {/* =========================
          Header
      ========================= */}
      <header className="sub-header">

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

        <span className="sub-title">
          구매 제품
        </span>

        <div className="spacer"></div>

      </header>


      {/* =========================
          안내 카드
      ========================= */}
      <div className="info-card">
        <p>
          WHS에서 구매한 제품 이력을 내 피부와 연결해요.
        </p>
      </div>


      {/* =========================
          구매 제품 목록
      ========================= */}
      <div className="products-list">

  {products.map((product, i) => (

    <div
  key={i}
  className="toggle-row product-item"
>

      <div className="toggle-row-label">
        {product.name}
      </div>

      <div className="product-meta-row">

        {/* 구매일 */}
        <span className="toggle-row-desc">
          구매일: {product.date}
        </span>

        {/* 사용 상태 */}
        <span
          className={`product-status ${
            product.status === '사용 중'
              ? 'in-use'
              : 'completed'
          }`}
        >
          {product.status}
        </span>
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default WHSProducts