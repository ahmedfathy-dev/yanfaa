
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">

      <div className="left">

        <button className="signup">
          إنشاء حساب
        </button>

        <a href="#">تسجيل دخول</a>

        <a href="#">مسارات التعلم</a>

      </div>

      <div className="search">

        <button className="search-btn">
          ابحث
        </button>

        <input
        type="text"
        placeholder="...ابحث عن"
        />

      </div>

      <div className="logo">
        ينفع
      </div>

    </div>
  )
}

export default Navbar