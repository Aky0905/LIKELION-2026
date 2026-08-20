import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Analysis from './pages/Analysis'
import Care from './pages/Care'
import ProductDetail from './pages/ProductDetail'

import WHS from './pages/WHS'
import WHSHistory from './pages/WHSHistory'
import WHSBooking from './pages/WHSBooking'
import WHSDiagnosis from './pages/WHSDiagnosis'
import WHSProducts from './pages/WHSProducts'
import WHSRecommend from './pages/WHSRecommend'
import WHSTrend from './pages/WHSTrend'

import AIReport from './pages/AIReport'
import MyPage from './pages/MyPage'
import Profile from './pages/Profile'
import Wearable from './pages/Wearable'
import SkinRecord from './pages/SkinRecord'
import AlarmSettings from './pages/AlarmSettings'
import HealthData from './pages/HealthData'
import AppSettings from './pages/AppSettings'

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <div className="page-content">

        <Routes>

          {/* =========================
              홈
          ========================= */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              분석
          ========================= */}
          <Route
            path="/analysis"
            element={<Analysis />}
          />

          <Route
            path="/analysis/report"
            element={<AIReport />}
          />


          {/* =========================
              케어
          ========================= */}
          <Route
            path="/care"
            element={<Care />}
          />

          <Route
            path="/care/product"
            element={<ProductDetail />}
          />


          {/* =========================
              WHS
          ========================= */}
          <Route
            path="/whs"
            element={<WHS />}
          />

          <Route
            path="/whs/history"
            element={<WHSHistory />}
          />

          <Route
            path="/whs/booking"
            element={<WHSBooking />}
          />

          <Route
            path="/whs/diagnosis"
            element={<WHSDiagnosis />}
          />

          {/* 피부 변화 추이 */}
          <Route
            path="/whs/trend"
            element={<WHSTrend />}
          />

          <Route
            path="/whs/products"
            element={<WHSProducts />}
          />

          <Route
            path="/whs/recommend"
            element={<WHSRecommend />}
          />


          {/* =========================
              마이
          ========================= */}
          <Route
            path="/my"
            element={<MyPage />}
          />

          <Route
            path="/my/profile"
            element={<Profile />}
          />

          <Route
            path="/my/wearable"
            element={<Wearable />}
          />

          <Route
            path="/my/record"
            element={<SkinRecord />}
          />

          <Route
            path="/my/alarm"
            element={<AlarmSettings />}
          />

          <Route
            path="/my/health"
            element={<HealthData />}
          />

          <Route
            path="/my/settings"
            element={<AppSettings />}
          />

        </Routes>

      </div>

      {/* 하단 네비게이션 */}
      <BottomNav />

    </div>
  )
}

export default App