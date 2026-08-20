import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductDetail.css'
import lotionImage from '../assets/lotion.png'

function ProductDetail() {
  const navigate = useNavigate()

  return (
    <div className="page product-detail-page">

      {/* =========================
          Header
      ========================= */}
      <header className="detail-header">

        <button
          className="back-btn"
          onClick={() => navigate('/care')}
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

        <h1 className="detail-title">
          제품 상세
        </h1>

        <div style={{ width: 36 }}></div>

      </header>


      {/* =========================
          제품 이미지
      ========================= */}
      <section className="product-image-section">

        <div className="product-image-circle">

          <img
            src={lotionImage}
            alt="WHS 수분 진정 보습 제품"
            className="product-lotion-image"
          />

        </div>

      </section>


      {/* =========================
          제품 정보
      ========================= */}
      <section className="product-info-section">

        <span className="product-brand">
          WHS Skincare
        </span>

        <h2 className="product-name">
          수분 진정 영양 · 보습 크림
        </h2>

        <p className="product-desc">
          민감하고 건조한 피부를 위한 고보습 진정 크림입니다.<br></br>
          피부 장벽을 강화하고 수분을 오래 유지시켜줍니다.
        </p>

      </section>


      {/* =========================
          AI 추천 이유
      ========================= */}
      <section className="recommend-reason">

        <div className="reason-header">

          <div className="reason-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#69b5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <span className="reason-label">
            AI 추천 이유
          </span>

        </div>

        <p className="reason-text">
          현재 수분 부족 + 민감도 상승 상태에서
          보습과 진정을 동시에 케어할 수 있는 제품이에요.
        </p>

      </section>


      {/* =========================
          제품 상세 정보
      ========================= */}
      <section className="product-details">

        <h3 className="details-label">
          제품 정보
        </h3>

        <div className="details-list">

          <div className="details-item">
            <span className="details-key">
              용량
            </span>

            <span className="details-val">
              50ml
            </span>
          </div>


          <div className="details-item">
            <span className="details-key">
              주요 성분
            </span>

            <span className="details-val">
              세라마이드, 히알루론산, 판테놀
            </span>
          </div>


          <div className="details-item">
            <span className="details-key">
              피부 타입
            </span>

            <span className="details-val">
              건성 · 민감성
            </span>
          </div>


          <div className="details-item">
            <span className="details-key">
              사용 시기
            </span>

            <span className="details-val">
              아침 · 저녁 스킨케어 마지막 단계
            </span>
          </div>

        </div>

      </section>


      {/* =========================
          구매 버튼
      ========================= */}
      <div className="product-action">

        <button className="btn-purchase">
          WHS 제품 구매하기
        </button>

      </div>

    </div>
  )
}

export default ProductDetail