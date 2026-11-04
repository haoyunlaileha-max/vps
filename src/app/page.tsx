"use client";

import { useState } from "react";
import {
  ArrowRight, Menu, X, ShieldCheck, Server, Cpu, HardDrive, Globe2,
  LockKeyhole, Zap, ChevronDown, Copy, Bitcoin, Network, Check,
} from "lucide-react";

const products = [
  { icon: Server, name: "Linux VPS", detail: "KVM Linux VPS in 7 jurisdictions, NVMe SSD, unlimited bandwidth and full root access.", price: "From $7.50/mo", href: "/vps" },
  { icon: HardDrive, name: "Dedicated Servers", detail: "Bare-metal hardware with IPMI/KVM, custom ISO, LUKS encryption and dual-socket options.", price: "From $48.50/mo", href: "/dedicated" },
  { icon: LockKeyhole, name: "Windows RDP", detail: "Full-administrator Windows RDP in 4 jurisdictions. Windows Server 2022/2025 or Win 11 Pro.", price: "From $11.00/mo", href: "/rdp" },
  { icon: Cpu, name: "GPU AI Hosting", detail: "NVIDIA RTX 4090 / RTX 5090 / H100 with CUDA, SSH and JupyterLab.", price: "From $122.00/mo", href: "/gpu" },
  { icon: Globe2, name: "Domain Names", detail: "Anonymous .com domains, 26 TLDs and free WHOIS privacy.", price: "From $4.99/yr", href: "/domains" },
];

const locations = [
  ["🇮🇸", "Iceland", "Free Speech Haven", "Strong privacy laws and renewable energy.", "$10.00", "$63.00"],
  ["🇵🇦", "Panama", "No Data Retention", "No mandatory data-retention obligations.", "$8.50", "$53.50"],
  ["🇲🇩", "Moldova", "Budget Offshore", "Light regulation and competitive pricing.", "$7.50", "$48.50"],
  ["🇷🇴", "Romania", "Anti-Retention", "Strong court precedent and EU connectivity.", "$8.50", "$53.50"],
  ["🇨🇭", "Switzerland", "Premium Privacy", "Strict privacy framework and political neutrality.", "$11.00", "$68.00"],
  ["🇳🇱", "Netherlands", "Best Peering", "Excellent connectivity and AMS-IX peering.", "$9.00", "$58.50"],
  ["🇷🇺", "Russia", "Western-Proof", "Infrastructure outside Western jurisdictions.", "$7.50", "$48.50"],
];

const faqs = [
  ["What is AnonPort?", "Offshore hosting across 7 jurisdictions, with VPS and dedicated servers, token-based account access and cryptocurrency payments."],
  ["Do you require personal information?", "The published signup flow uses an access token rather than a conventional name, email and password account."],
  ["Which cryptocurrencies are accepted?", "The site lists Bitcoin, Monero, Ethereum, USDT, Solana, Litecoin and TRON among its supported payment options."],
  ["How fast is delivery?", "The site advertises VPS deployment in under 5 minutes. Dedicated server delivery depends on the selected configuration."],
  ["Which location should I choose?", "Compare jurisdiction, network connectivity, availability and your own legal requirements before choosing a location."],
  ["Do you keep logs?", "Review the provider's current privacy policy and service terms for authoritative details about data handling."],
];

const solutions = ["No KYC Hosting", "DMCA Ignored", "Bitcoin Hosting", "Offshore Hosting", "Anonymous Hosting", "Find Best Jurisdiction"];

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [tokenNotice, setTokenNotice] = useState(false);

  return (
    <main>
      <div className="announcement"><span className="status-dot" /> All systems operational <span className="announce-sep">·</span> Privacy-first infrastructure, worldwide <a href="#locations">Explore locations <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a className="brand" href="#"><span className="brand-mark"><ShieldCheck size={22} /></span><span>anon<span className="brand-accent">port</span><small>OFFSHORE INFRASTRUCTURE</small></span></a>
        <nav className={mobileOpen ? "main-nav is-open" : "main-nav"}>
          <a className="active" href="#">Home</a><a href="/vps">VPS</a><a href="/dedicated">Dedicated</a><a href="/rdp">RDP</a><a href="/gpu">GPU</a><a href="/domains">Domains <span className="nav-offer">$4.99</span></a>
          <a className="nav-mobile-login" href="#login" onClick={(e) => { e.preventDefault(); setLoginOpen(true); setMobileOpen(false); }}>Login</a>
        </nav>
        <div className="header-actions"><span className="language">EN <ChevronDown size={13} /></span><button className="button button-outline button-small" onClick={() => setLoginOpen(true)}>Login <ArrowRight size={14} /></button><button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></div>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PRIVATE BY ARCHITECTURE <span className="eyebrow-pill">NO KYC</span></div>
          <h1>Anonymous offshore<br /><span>server hosting.</span></h1>
          <p className="hero-lead">VPS and dedicated servers in 7 privacy-focused jurisdictions. Token-based access, cryptocurrency payments and automated deployment.</p>
          <div className="hero-buttons"><a className="button button-primary" href="/vps">Explore VPS plans <ArrowRight size={17} /></a><a className="button button-ghost" href="/dedicated">Dedicated servers <ArrowRight size={16} /></a></div>
          <div className="payment-row"><span>PAY WITH CRYPTO</span><b>₿ BTC</b><b>ɱ XMR</b><b>Ξ ETH</b><b>₮ USDT</b><b>Ł LTC</b><i>+ more</i></div>
        </div>
        <div className="terminal-card">
          <div className="terminal-top"><div className="terminal-dots"><i /><i /><i /></div><span>secure-shell — root@anonport</span><span className="terminal-live"><i /> ONLINE</span></div>
          <div className="terminal-body"><div className="terminal-command"><span>$</span> ssh root@185.xxx.xxx.xx</div><div className="terminal-welcome">Welcome to AnonPort<span className="cursor">_</span></div><div className="terminal-rule" /><div className="server-name">SERVER OVERVIEW <span>INSTANCE ACTIVE</span></div><div className="server-plan"><b>CH-M</b><span>Zurich, Switzerland 🇨🇭</span></div><div className="spec-grid"><div><small>CPU</small><b>4 vCPU</b></div><div><small>PROCESSOR</small><b>AMD EPYC 75F3</b></div><div><small>MEMORY</small><b>8 GB DDR4</b></div><div><small>STORAGE</small><b>120 GB NVMe</b></div><div><small>NETWORK</small><b>1 Gbps · Unmetered</b></div><div><small>ACCESS</small><b>Full root</b></div></div><div className="terminal-bottom"><span><i /> no-logs</span><span><i /> encrypted</span><span><i /> crypto-only</span></div><div className="terminal-prompt">root@vps:~# <span className="cursor">▋</span></div></div>
        </div>
        <div className="hero-footnote"><span><ShieldCheck size={15} /> Privacy-first infrastructure</span><span><Zap size={15} /> Automated provisioning</span><span><Network size={15} /> 7 global jurisdictions</span></div>
      </section>

      <section className="trust-strip"><div><LockKeyhole /><span><b>Token-based access</b><small>No conventional account profile</small></span></div><div><Bitcoin /><span><b>Crypto payments</b><small>Multiple supported currencies</small></span></div><div><Zap /><span><b>Fast deployment</b><small>Automated provisioning</small></span></div><div><Globe2 /><span><b>7 locations</b><small>Choose your jurisdiction</small></span></div></section>

      <section className="content-section section-wrap" id="services"><div className="section-heading"><div><div className="eyebrow">THE ANONPORT PLATFORM</div><h2>Infrastructure for<br /><span>your own rules.</span></h2></div><p>Five product lines on the same offshore hosting platform. Choose the infrastructure that fits your workload.</p></div><div className="product-grid">{products.map((p) => { const Icon = p.icon; return <a className="product-card" href={p.href} key={p.name}><div className="product-icon"><Icon size={22} /></div><div className="product-card-top"><span>0{products.indexOf(p) + 1} / SERVICE</span><ArrowRight size={17} /></div><h3>{p.name}</h3><p>{p.detail}</p><div className="product-price">{p.price}<ArrowRight size={15} /></div></a>; })}</div></section>

      <section className="locations-section" id="locations"><div className="section-wrap"><div className="section-heading"><div><div className="eyebrow">GLOBAL FOOTPRINT / 07</div><h2>Choose your <span>jurisdiction.</span></h2></div><p>Every location has a different legal and network profile. Compare the options and choose based on your needs.</p></div><div className="location-grid">{locations.map((l) => <article className="location-card" key={l[1]}><div className="location-top"><span className="flag">{l[0]}</span><span className="location-code">DC / {l[1].slice(0,2).toUpperCase()}</span></div><h3>{l[1]}</h3><div className="location-tag">{l[2]}</div><p>{l[3]}</p><div className="location-prices"><div><small>VPS FROM</small><b>{l[4]}<small>/mo</small></b></div><div><small>DEDICATED FROM</small><b>{l[5]}<small>/mo</small></b></div></div><a href="/vps">Explore location <ArrowRight size={14} /></a></article>)}</div></div></section>

      <section className="solutions-section section-wrap"><div className="section-heading"><div><div className="eyebrow">BUILT AROUND YOUR PRIORITIES</div><h2>Pick your <span>privacy angle.</span></h2></div><p>Find the service and location that best match your operational and privacy requirements.</p></div><div className="solution-grid">{solutions.map((s, i) => <a href="/use-cases" className="solution-item" key={s}><span>0{i+1}</span><b>{s}</b><ArrowRight size={16} /></a>)}</div></section>

      <section className="pricing-section"><div className="section-wrap"><div className="section-heading"><div><div className="eyebrow">TRANSPARENT STARTING PRICES</div><h2>One glance. <span>Seven locations.</span></h2></div><p>Published starting prices. Final plan availability and pricing should be confirmed on the relevant product page.</p></div><div className="price-table-wrap"><table className="price-table"><thead><tr><th>LOCATION</th><th>VPS FROM</th><th>DEDICATED FROM</th><th>RDP FROM</th><th>GPU FROM</th><th /></tr></thead><tbody>{[["🇮🇸 Iceland","$10.00","$63.00","—","$146.50"],["🇵🇦 Panama","$8.50","$53.50","—","—"],["🇲🇩 Moldova","$7.50","$48.50","$11.00","$122.00"],["🇷🇴 Romania","$8.50","$53.50","$12.00","$132.00"],["🇨🇭 Switzerland","$11.00","$68.00","—","—"],["🇳🇱 Netherlands","$9.00","$58.50","$12.00","$136.50"],["🇷🇺 Russia","$7.50","$48.50","$11.00","—"]].map((r) => <tr key={r[0]}>{r.map((v, i) => <td key={i}>{v}</td>)}<td><a href="/vps">View plans <ArrowRight size={13} /></a></td></tr>)}</tbody></table></div><div className="pricing-note"><ShieldCheck size={15} /> Plan specifications and availability may vary by location.</div></div></section>

      <section className="faq-section section-wrap" id="faq"><div className="section-heading"><div><div className="eyebrow">NEED TO KNOW</div><h2>Common <span>questions.</span></h2></div><p>Quick answers about the platform, account access and infrastructure.</p></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={openFaq === i ? "faq-item expanded" : "faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span><small>0{i+1}</small>{q}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{a}</p>}</div>)}</div><a className="text-link" href="/faq">Visit the full FAQ <ArrowRight size={15} /></a></section>

      <section className="cta-section section-wrap"><div className="cta-panel"><div className="eyebrow">YOUR INFRASTRUCTURE. YOUR CHOICE.</div><h2>Deploy beyond<br /><span>the ordinary.</span></h2><p>Explore offshore infrastructure across seven jurisdictions.</p><a href="/vps" className="button button-primary">Get started <ArrowRight size={16} /></a><div className="cta-decoration"><Globe2 size={150} strokeWidth={0.5} /></div></div></section>

      <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#"><span className="brand-mark"><ShieldCheck size={22} /></span><span>anon<span className="brand-accent">port</span><small>OFFSHORE INFRASTRUCTURE</small></span></a><p>Offshore VPS and dedicated servers across 7 jurisdictions. Explore privacy-focused infrastructure and cryptocurrency payment options.</p><div className="footer-coins">₿ BTC　ɱ XMR　Ξ ETH　₮ USDT　+5</div></div><div className="footer-col"><b>Services</b><a href="/vps">Linux VPS</a><a href="/dedicated">Dedicated</a><a href="/rdp">Windows RDP</a><a href="/gpu">GPU AI Hosting</a><a href="/domains">Domain Names</a></div><div className="footer-col"><b>Solutions</b><a href="/no-kyc-hosting">No KYC Hosting</a><a href="/offshore-hosting">Offshore Hosting</a><a href="/bitcoin-hosting">Bitcoin Hosting</a><a href="/locations">All Locations</a><a href="/alternatives">Alternatives</a></div><div className="footer-col"><b>Company</b><a href="/about">About</a><a href="/faq">FAQ</a><a href="/contact">Contact</a><a href="/status">Server Status</a><a href="/terms">Terms of Service</a></div></div><div className="footer-bottom"><span>© 2026 AnonPort. All rights reserved.</span><span>Privacy-first infrastructure <i /> Built for global reach</span></div></footer>

      {loginOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setLoginOpen(false); }}><section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title"><button className="modal-close" onClick={() => setLoginOpen(false)} aria-label="Close"><X size={20} /></button><div className="modal-brand"><span className="brand-mark"><ShieldCheck size={22} /></span></div><div className="eyebrow">ACCOUNT ACCESS</div><h2 id="login-title">{register ? "Create your access token" : "Welcome back."}</h2><p>{register ? "Create an account token to access your server dashboard." : "Access your server dashboard with your token."}</p><div className="modal-tabs"><button className={!register ? "selected" : ""} onClick={() => { setRegister(false); setTokenNotice(false); }}>Login</button><button className={register ? "selected" : ""} onClick={() => { setRegister(true); setTokenNotice(false); }}>Register</button></div>{!register ? <form onSubmit={(e) => { e.preventDefault(); setTokenNotice(true); }}><label>ACCESS TOKEN<input required placeholder="XXXX-XXXX-XXXX-XXXX" autoComplete="off" /></label><label>2FA CODE <span className="optional">OPTIONAL</span><input inputMode="numeric" maxLength={6} placeholder="123456" /></label><button className="button button-primary modal-submit" type="submit">Login <ArrowRight size={16} /></button></form> : <div className="register-info"><div className="register-step"><span>01</span><p>Generate your access token through the official account service.</p></div><div className="register-step"><span>02</span><p>Save it securely. The full token cannot be recovered later.</p></div><div className="register-step"><span>03</span><p>Add credit to your account before deploying a service.</p></div><button className="button button-primary modal-submit" onClick={() => setTokenNotice(true)}>Create my token <ArrowRight size={16} /></button></div>}{tokenNotice && <div className="form-notice"><Check size={16} /> This frontend preview is not connected to the live authentication service. No credentials were sent.</div>}<div className="modal-foot">Your access token replaces a traditional email and password account.</div></section></div>}
    </main>
  );
}
