(() => {
  const c = window.JTC_CONFIG;
  const euro = value => `€${Number(value).toLocaleString("en-MT", { maximumFractionDigits: 2 })}`;
  const header = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header"><div class="wrap nav">
      <a class="brand" href="index.html" aria-label="JTC Property Services home"><img class="brand-logo" src="assets/logo/jtc-property-services-logo.webp" alt="JTC Property Services"></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="nav-links" id="site-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a><a href="index.html#plans">Property Care Plans</a><a href="services.html">Services</a><a href="index.html#how-it-works">How It Works</a><a href="pricing.html">Plans</a><a href="about.html">About</a><a href="contact.html">Contact</a><a class="button button--gold" href="contact.html">Request a Proposal</a>
        <a class="mobile-call" href="tel:${c.business.phoneHref}">Call ${c.business.phone}</a>
      </nav>
    </div></header>`;
  const footer = `
    <footer class="site-footer"><div class="wrap"><div class="footer-grid">
      <div><a class="brand" href="index.html"><img class="brand-logo" src="assets/logo/jtc-property-services-logo.webp" alt="JTC Property Services"></a><p style="margin-top:1rem">A trusted local point of contact for owners who cannot always be at their property in Malta.</p></div>
      <div><h3>Explore</h3><p><a href="services.html">Services</a><br><a href="pricing.html">Property care plans</a><br><a href="contact.html">Request a proposal</a><br><a href="privacy.html">Privacy</a><br><a href="terms.html">Terms & service information</a></p></div>
      <div><h3>Contact</h3><p><a href="tel:${c.business.phoneHref}">${c.business.phone}</a><br><a href="mailto:${c.business.email}">${c.business.email}</a><br>${c.business.address}<br>VAT: ${c.business.vatNumber}</p><p><a href="${c.business.facebook}" target="_blank" rel="noopener">Facebook ↗</a></p></div>
    </div><div class="footer-bottom"><span>© <span data-year></span> JTC Property Services. ${c.business.tagline}</span><span>Core plan prices include VAT. Additional services require a tailored proposal.</span></div></div></footer>`;
  document.querySelectorAll("[data-site-header]").forEach(el => el.outerHTML = header);
  document.querySelectorAll("[data-site-footer]").forEach(el => el.outerHTML = footer);
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav-links");
  menuButton?.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menuButton?.setAttribute("aria-expanded", "false"); }));

  document.querySelectorAll("[data-plans]").forEach(root => {
    root.innerHTML = Object.entries(c.plans).map(([key, p]) => `<article class="price-card ${p.featured ? "featured" : ""}">${p.featured ? '<span class="tag">Most Popular</span>' : ""}<p class="eyebrow">${p.visitsMonthly} visit${p.visitsMonthly > 1 ? "s" : ""} / month</p><h3>${p.name}</h3><p class="price">${euro(p.priceMonthly)} <small>/ month</small></p><ul class="check-list"><li>${p.inspection}</li><li>${p.reporting}</li><li>Yearly care agreement</li><li>Best for: ${p.bestFor}</li></ul><a class="button ${p.featured ? "button--gold" : "button--navy"}" href="contact.html?plan=${key}">Choose ${p.name.split(" ")[0]}</a></article>`).join("");
  });

  const reportData = {
    entrance:["Entrance","Door secured. No visible damage.","Secure"], living:["Living room","Windows closed and room visually checked. No visible concerns.","Clear"], kitchen:["Kitchen","No visible water leaks. Agreed appliances visually checked.","Clear"], bathroom:["Bathroom","Minor silicone deterioration noted near shower edge. Owner action recommended.","Action noted"], bedroom:["Bedroom","Window and shutter secured. No visible damp signs.","Clear"], balcony:["Balcony","Drain clear. Shutters secured.","Clear"], meters:["Utility meters","Electricity and water readings recorded for the owner's update.","Recorded"]
  };
  const report = document.querySelector("[data-report-demo]");
  if (report) {
    const title = report.querySelector("[data-report-title]"), note = report.querySelector("[data-report-note]"), status = report.querySelector("[data-report-status]"), photo = report.querySelector("[data-report-photo]");
    const show = key => { photo.classList.add("loading"); report.querySelectorAll(".report-tab").forEach(b => b.setAttribute("aria-selected", String(b.dataset.area === key))); setTimeout(() => { [title.textContent,note.textContent,status.textContent] = reportData[key]; photo.dataset.area = key; photo.classList.remove("loading"); }, 280); };
    report.querySelectorAll(".report-tab").forEach(btn => { btn.addEventListener("click", () => show(btn.dataset.area)); btn.addEventListener("keydown", e => { const tabs=[...report.querySelectorAll(".report-tab")], i=tabs.indexOf(btn); if(e.key==="ArrowDown"||e.key==="ArrowRight"){e.preventDefault();tabs[(i+1)%tabs.length].focus()} if(e.key==="ArrowUp"||e.key==="ArrowLeft"){e.preventDefault();tabs[(i-1+tabs.length)%tabs.length].focus()} }); });
    report.querySelector("[data-report-reset]")?.addEventListener("click", () => show("entrance"));
  }

  const motionTargets = document.querySelectorAll(".card,.benefit,.rate,.step,.service-band,.price-card,.table-wrap");
  motionTargets.forEach((el,index) => { el.classList.add("reveal"); el.style.setProperty("--delay",`${(index % 4) * 70}ms`); });
  const observer = "IntersectionObserver" in window ? new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); observer.unobserve(e.target); } }), {threshold:.12}) : null;
  document.querySelectorAll(".reveal").forEach(el => observer ? observer.observe(el) : el.classList.add("in"));

  document.querySelectorAll("[data-property-slider]").forEach(slider => {
    const slides=[...slider.querySelectorAll("[data-slide]")], dots=[...slider.querySelectorAll("[data-slider-dot]")];
    const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current=0, timer;
    const show=index => {
      current=(index+slides.length)%slides.length;
      slides.forEach((slide,i) => { slide.classList.toggle("is-active",i===current); slide.setAttribute("aria-hidden",String(i!==current)); });
      dots.forEach((dot,i) => dot.setAttribute("aria-current",String(i===current)));
      slider.classList.remove("is-playing");
      requestAnimationFrame(() => { if(!reduceMotion && timer) slider.classList.add("is-playing"); });
    };
    const stop=() => { clearInterval(timer); timer=null; slider.classList.remove("is-playing"); };
    const start=() => { if(reduceMotion || timer) return; timer=setInterval(() => show(current+1),6000); slider.classList.add("is-playing"); };
    slider.querySelector("[data-slider-prev]")?.addEventListener("click",() => { stop(); show(current-1); start(); });
    slider.querySelector("[data-slider-next]")?.addEventListener("click",() => { stop(); show(current+1); start(); });
    dots.forEach(dot => dot.addEventListener("click",() => { stop(); show(Number(dot.dataset.sliderDot)); start(); }));
    slider.addEventListener("keydown",e => { if(e.key==="ArrowLeft"){e.preventDefault();stop();show(current-1);start()} if(e.key==="ArrowRight"){e.preventDefault();stop();show(current+1);start()} });
    slider.addEventListener("mouseenter",stop); slider.addEventListener("mouseleave",start);
    slider.addEventListener("focusin",stop); slider.addEventListener("focusout",start);
    document.addEventListener("visibilitychange",() => document.hidden ? stop() : start());
    show(0); start();
  });

  const form = document.querySelector("[data-quote-form]");
  if (form) {
    const queryPlan = new URLSearchParams(location.search).get("plan"); if(queryPlan && form.plan?.querySelector(`option[value="${queryPlan}"]`)) form.plan.value=queryPlan;
    // WhatsApp-first enquiry flow: no backend endpoint exists, so the form
    // never transmits anywhere on its own. Instead it builds a pre-filled
    // wa.me message from the fields the visitor entered and opens WhatsApp
    // directly (synchronously, inside the click handler, so browsers don't
    // treat it as a blocked popup). Nothing here is sent to, or stored on,
    // any server - the message text only ever exists in the visitor's own
    // browser and WhatsApp app.
    const waDigits = c.business.phoneHref.replace(/\D/g, "");
    const buildWhatsAppMessage = data => {
      const get = key => (data.get(key) || "").toString().trim();
      const services = data.getAll("services").filter(Boolean).join(", ") || "Not specified";
      const planLabel = form.plan?.selectedOptions?.[0]?.textContent?.trim() || "Please recommend";
      return [
        "Hello JTC Property Services, I would like to request information.",
        "",
        `Name: ${get("fullName")}`,
        `Phone: ${get("telephone")}`,
        `Email: ${get("email")}`,
        `Preferred contact method: ${get("contactMethod")}`,
        `Property address/location: ${get("propertyAddress")}`,
        `Property type: ${get("propertyType")}`,
        `Bedrooms: ${get("bedrooms")}`,
        `Property status: ${get("propertyStatus")}`,
        `Owner location: ${get("ownerLocation")}`,
        `Preferred inspection frequency: ${get("frequency")}`,
        `Preferred care plan: ${planLabel}`,
        `Additional services requested: ${services}`,
        `Key holding required: ${get("keyHolding")}`,
        `Preferred start date: ${get("startDate") || "Not specified"}`,
        `Message: ${get("concerns") || "None provided"}`,
      ].join("\n");
    };
    form.addEventListener("submit", e => {
      e.preventDefault(); const status=form.querySelector("[data-form-status]"); status.className="form-status";
      if(!form.checkValidity()){ form.reportValidity(); status.textContent="Please complete the required fields and check your contact details."; status.classList.add("show","error"); return; }
      if(form.website.value){ return; }
      const data = new FormData(form);
      const waUrl = `https://wa.me/${waDigits}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
      window.open(waUrl, "_blank", "noopener");
      status.innerHTML = `Opening WhatsApp with your enquiry pre-filled for JTC Property Services. If it did not open, <a href="${waUrl}" target="_blank" rel="noopener">tap here to continue on WhatsApp</a>, or email <a href="mailto:${c.business.email}">${c.business.email}</a>.`;
      status.classList.add("show","success");
      form.reset();
    });
  }
})();
