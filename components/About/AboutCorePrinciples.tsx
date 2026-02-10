export default function CorePrinciples() {
  return (
    <section className="bg-coffee-cream dark:bg-[#2d241b] py-20">
      <div className="px-4 lg:px-40 max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Core Principles</h2>
        <h3 className="text-[#181411] dark:text-white text-3xl font-black">Mission &amp; Values</h3>
      </div>

      <div className="px-4 lg:px-40 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: "eco",
            title: "Sustainability",
            text: "We design machinery that minimizes energy consumption and water waste, ensuring the coffee industry thrives for generations.",
          },
          {
            icon: "precision_manufacturing",
            title: "Innovation",
            text: "Constant R&D allows us to integrate smart sensors and AI-driven roasting profiles into every machine we build.",
            border: true,
          },
          {
            icon: "verified_user",
            title: "Quality",
            text: "Using only premium materials like food-grade stainless steel and heavy-duty motors, our machines are built for life.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-[#382d22] p-10 rounded-2xl shadow-sm text-center flex flex-col items-center gap-4 ${
              item.border ? "border-b-4 border-primary" : ""
            }`}
          >
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">{item.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-[#181411] dark:text-white">{item.title}</h4>
            <p className="text-sm text-[#635548] dark:text-[#a8998a] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
