import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 라우트(경로)가 바뀔 때마다 화면을 최상단으로 스크롤한다.
 * 버튼/탭으로 페이지 이동 시 이전 스크롤 위치가 아니라 항상 맨 위부터 보이게 함.
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

export default ScrollToTop
