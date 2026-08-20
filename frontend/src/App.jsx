import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import MySkin from './pages/MySkin'
import Care from './pages/Care'
import ProductDetail from './pages/ProductDetail'
import WHS from './pages/WHS'
import WHSHistory from './pages/WHSHistory'
import WHSBooking from './pages/WHSBooking'
import WHSDiagnosis from './pages/WHSDiagnosis'
import WHSProducts from './pages/WHSProducts'
import WHSRecommend from './pages/WHSRecommend'
import AIReport from './pages/AIReport'
import MyPage from './pages/MyPage'
import Wearable from './pages/Wearable'
import SkinRecord from './pages/SkinRecord'
import AlarmSettings from './pages/AlarmSettings'
import HealthData from './pages/HealthData'
import AppSettings from './pages/AppSettings'

function App() {
  return (
    <div className="app-container">
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skin" element={<MySkin />} />
          <Route path="/skin/report" element={<AIReport />} />
          <Route path="/care" element={<Care />} />
          <Route path="/care/product" element={<ProductDetail />} />
          <Route path="/whs" element={<WHS />} />
          <Route path="/whs/history" element={<WHSHistory />} />
          <Route path="/whs/booking" element={<WHSBooking />} />
          <Route path="/whs/diagnosis" element={<WHSDiagnosis />} />
          <Route path="/whs/products" element={<WHSProducts />} />
          <Route path="/whs/recommend" element={<WHSRecommend />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/my/wearable" element={<Wearable />} />
          <Route path="/my/record" element={<SkinRecord />} />
          <Route path="/my/alarm" element={<AlarmSettings />} />
          <Route path="/my/health" element={<HealthData />} />
          <Route path="/my/settings" element={<AppSettings />} />
        </Routes>
      </div>
      <BottomNav />
    </div>
  )
}

export default App
