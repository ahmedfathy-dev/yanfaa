import "./Hero.css"

function Hero() {
  return (
    <div className="hero">

      <h1>
        انضم الآن لمئات الآلاف من <br/>
        المبدعين العرب
      </h1>

      <p>- مئات الدورات التدريبية "وأكثر" باشتراك واحد -
      </p>

      <div className="hero-buttons">

        <button className="subscribe">
          اشترك الآن
        </button>
        <button className="courses">
          تصفح الكورسات
        </button>

      </div>

    </div>
  )
}

export default Hero