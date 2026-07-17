import BeforeAfterSlider from './BeforeAfterSlider'
import './BeforeAfterSlider.css'

function BeforeAfterSection() {
  return (
    <section className="before-after-section">
      {/* Background Effects */}
      <div className="before-after-bg-effects">
        <div className="before-after-orb before-after-orb-1" />
        <div className="before-after-orb before-after-orb-2" />
      </div>

      <div className="before-after-container-wrapper">
        {/* Section Header */}
        <div className="before-after-header">
          <span className="before-after-badge">Transformation</span>
          <h2 className="before-after-title">Before & After</h2>
          <p className="before-after-subtitle">See the incredible difference our detailing makes</p>
        </div>

        {/* Before/After Slider */}
        <BeforeAfterSlider
          beforeImage="/Before.png"
          afterImage="/After.jpg"
          beforeLabel="Before"
          afterLabel="After"
        />
      </div>
    </section>
  )
}

export default BeforeAfterSection
