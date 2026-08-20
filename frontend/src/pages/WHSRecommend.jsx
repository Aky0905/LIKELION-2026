import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SubPage.css'

function WHSRecommend() {
  const navigate = useNavigate()

  const products = [
    { name: '수분 진정 영양 보습 크림', match: '75%', reason: '수분 부족 + 민감도 상승 대응' },
    { name: '히알루론산 세럼', match: '68%', reason: '즉각적인 수분 공급' },
    { name: '진정 마스크팩', match: '62%', reason: '주 2-3회 집중 진정 케어' },
  ]

  return (
    <div className="page">
      <header className="sub-header">
        <button className="back-btn" onClick={() => navigate('/whs')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="sub-title">제품 추천</span>
        <div className="spacer"></div>
      </header>

      <div className="info-card">
        <p>AI가 분석한 피부 데이터를 바탕으로 제품을 추천해요.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {products.map((item, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '18px',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/care/product')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>{item.name}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)' }}>{item.match}</span>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{item.reason}</span>
            <div style={{ marginTop: '10px', height: '4px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: item.match, background: 'var(--primary)', borderRadius: '2px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WHSRecommend
