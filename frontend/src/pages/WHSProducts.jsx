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
    <div className="page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/whs')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">구매 제품</span>
        <div className="spacer"></div>
      </header>

      <div className="info-card">
        <p>WHS에서 구매한 제품 이력을 내 피부와 연결해요.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {products.map((product, i) => (
          <div
            key={i}
            className="toggle-row"
            style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}
            onClick={() => navigate('/care/product')}
          >
            <div className="toggle-row-label">{product.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <span className="toggle-row-desc">구매일: {product.date}</span>
              <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary)' }}>{product.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WHSProducts
