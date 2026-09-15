import streamlit as st
from pathlib import Path
import base64

st.set_page_config(page_title='Pawan Kumar Jha | PGDM Marketing Portfolio', page_icon='🟡', layout='wide')
BASE=Path(__file__).parent

def data_uri(path,mime):
    p=BASE/path
    return f'data:{mime};base64,'+base64.b64encode(p.read_bytes()).decode() if p.exists() else '#'
photo=data_uri('public/pawan-profile.jpg','image/jpeg')
resume=data_uri('public/Pawan_Kumar_Jha_Resume.pdf','application/pdf')
projects=[
('Brucha Coffee — CRM Retention Playbook','Academic CRM project using an RFM model to segment a 60-customer dataset, identify at-risk customers, and design retention actions.','CRM · RFM Segmentation · Retention Strategy','public/evidence/Brucha_Coffee_CRM_Retention_Playbook.pdf'),
('Digital Marketing Campaign','Campaign planning covering keyword research, Google Ads targeting, audience definition and digital campaign design.','Digital Marketing · Audience Targeting · Campaign Strategy','public/evidence/Digital_Marketing_Campaign_Project.pdf'),
('Bisleri — Strategic Sales & Distribution Architecture','Group capstone integrating channel architecture, salesforce workload modelling, CRM/POS pipeline design and circular logistics.','Sales & Distribution · CRM · Channel Strategy','public/evidence/Bisleri_Sales_Distribution_Project.pdf'),
('IncludeUs — B2B Selling & Negotiation','B2B selling and negotiation project focused on institutional customer strategy, value proposition and stakeholder handling.','B2B Selling · Negotiation · Customer Strategy','public/evidence/IncludeUs_B2B_Selling_Negotiation_Project.pdf')]

st.markdown('''<style>
#MainMenu,footer,header{visibility:hidden}.stApp{background:#0d0b08;color:#f6f0e5}.block-container{max-width:1200px;padding-top:1.5rem}.gold{color:#e6a800}.hero{padding:55px 20px 45px;border-radius:28px;background:radial-gradient(circle at 80% 30%,#4a3108 0,#151008 32%,#0d0b08 70%);border:1px solid #33240c}.tag{display:inline-block;border:1px solid #8b6510;border-radius:30px;padding:7px 14px;color:#e9b72c;letter-spacing:2px;font-size:12px}.name{font-size:66px;line-height:1.02;font-weight:800;margin:25px 0 15px}.sub{font-size:20px;color:#ddd3c5;font-weight:600}.muted{color:#aaa094;line-height:1.7}.btn{display:inline-block;margin:18px 10px 0 0;padding:12px 20px;border-radius:30px;background:linear-gradient(90deg,#f0bd3c,#c98200);color:#151008!important;text-decoration:none!important;font-weight:700}.btn2{background:transparent;border:1px solid #8b6510;color:#f0bd3c!important}.profile{width:310px;height:310px;object-fit:cover;border-radius:50%;border:4px solid #e2a500;box-shadow:0 0 35px #9a670055}.section{padding:70px 5px 15px}.eyebrow{color:#d99b00;text-transform:uppercase;letter-spacing:3px;font-size:12px}.title{font-size:38px;font-weight:800;margin:8px 0 25px}.card{height:100%;padding:24px;border:1px solid #332b20;border-radius:20px;background:#15120e;color:#f5efe5}.card h3{font-size:20px;margin:8px 0;color:#fff}.chip{display:inline-block;padding:5px 9px;margin:4px 3px;border:1px solid #564019;border-radius:18px;font-size:12px;color:#e7dfd1}.timeline{border-left:2px solid #7c5b15;padding-left:22px;margin:15px 0 30px}.link{color:#e8aa12!important;text-decoration:none!important;font-weight:700}.contact{padding:18px;border:1px solid #332b20;border-radius:16px;background:#15120e;margin-bottom:10px}@media(max-width:700px){.name{font-size:44px}.profile{width:230px;height:230px}.title{font-size:30px}}</style>''',unsafe_allow_html=True)

c1,c2=st.columns([1.25,0.75],vertical_alignment='center')
with c1:
 st.markdown(f'''<div class="hero"><span class="tag">● AVAILABLE FOR OPPORTUNITIES</span><div class="name">Pawan Kumar <span class="gold">Jha</span></div><div class="sub">PGDM Marketing · Digital Marketing · CRM & Customer Strategy · Sales & Distribution</div><p class="muted">PGDM Marketing student at FIIB, New Delhi, with practical exposure to digital marketing, CRM and customer retention, sales & distribution, market research, client engagement, and data-driven decision-making.</p><a class="btn" href="#experience">View My Experience →</a><a class="btn btn2" href="https://www.linkedin.com/in/pawanjha27/" target="_blank">Connect With Me</a><a class="btn btn2" href="{resume}" download="Pawan_Kumar_Jha_Resume.pdf">↓ Download Resume</a><p class="muted">🎓 FIIB, New Delhi &nbsp;&nbsp; 📍 New Delhi, India</p></div>''',unsafe_allow_html=True)
with c2: st.markdown(f'<div style="text-align:center"><img class="profile" src="{photo}"></div>',unsafe_allow_html=True)

st.markdown('<div class="section"><div class="eyebrow">About Me</div><div class="title">A future-focused <span class="gold">professional</span></div></div>',unsafe_allow_html=True)
a,b=st.columns([1.1,.9])
with a: st.markdown('<div class="card"><p>I am a PGDM student at <b class="gold">Fortune Institute of International Business, New Delhi</b>, specializing in Marketing.</p><p class="muted">I combine marketing strategy, consumer insights, client relationship management and data analysis. My experience includes client-facing internships, social media outreach, market research and evidence-led academic projects.</p><span class="chip">Marketing Strategy</span><span class="chip">Consumer Insights</span><span class="chip">CRM</span><span class="chip">Digital Marketing</span><span class="chip">Client Engagement</span><span class="chip">Data Analysis</span></div>',unsafe_allow_html=True)
with b: st.markdown('<div class="card"><div class="gold" style="font-size:36px;font-weight:800">50+</div>Prospective Clients Engaged<hr><div class="gold" style="font-size:36px;font-weight:800">15+</div>Client Portfolios Managed<hr><div class="gold" style="font-size:36px;font-weight:800">3</div>Professional Certifications</div>',unsafe_allow_html=True)

st.markdown('<div id="experience" class="section"><div class="eyebrow">Experience</div><div class="title">Professional <span class="gold">Journey</span></div></div>',unsafe_allow_html=True)
for role,co,period,txt in [
('Wealth Management Intern','Prognosis Financial Pvt. Ltd. · New Delhi','Apr 2026 – Jun 2026','Lead generation and follow-up with 50+ prospects; supported client conversations on mutual funds, SIPs, insurance and investment products; analysed client profiles and maintained account records.'),
('Social Media & Teaching Volunteer','Pehchaan: The Street School · New Delhi','Jan 2026','Created social media outreach content and supported teaching/mentoring activities for underprivileged children.'),
('Client Handling Intern','NJ Wealth Group · Muzaffarpur, Bihar','May 2025 – Jun 2025','Managed and analysed 15+ client portfolios, supported mutual fund decisions and prepared research briefs on financial products and market trends.')]:
 st.markdown(f'<div class="timeline"><div class="gold">{period}</div><h3>{role}</h3><b>{co}</b><p class="muted">{txt}</p></div>',unsafe_allow_html=True)

st.markdown('<div class="section"><div class="eyebrow">Capabilities</div><div class="title">Skills & <span class="gold">Expertise</span></div></div>',unsafe_allow_html=True)
cols=st.columns(4)
for col,(title,items) in zip(cols,[('Marketing & Customer Strategy',['Brand Management','Marketing Strategy','Consumer Insights','Digital Marketing','CRM & Retention']),('Sales & Client Engagement',['Client Handling','Lead Generation','Sales & Distribution','Relationship Management','Market Research']),('Analytics & Tools',['Data Analysis','Power BI (Beginner)','SPSS (Beginner)','MS Office 365','Excel']),('Professional Skills',['Communication','Team Leadership','Presentation','Problem Solving','Collaboration'])]):
 with col: st.markdown('<div class="card"><h3>'+title+'</h3>'+''.join(f'<span class="chip">{x}</span>' for x in items)+'</div>',unsafe_allow_html=True)

st.markdown('<div class="section"><div class="eyebrow">Portfolio</div><div class="title">Featured Projects & <span class="gold">Business Work</span></div></div>',unsafe_allow_html=True)
for i in range(0,len(projects),2):
 cols=st.columns(2)
 for col,(title,desc,skills,path) in zip(cols,projects[i:i+2]):
  uri=data_uri(path,'application/pdf')
  with col: st.markdown(f'<div class="card"><div class="gold">EVIDENCE-LED PROJECT</div><h3>{title}</h3><p class="muted">{desc}</p><div>{"".join(f"<span class=\"chip\">{x.strip()}</span>" for x in skills.split("·"))}</div><p><a class="link" href="{uri}" target="_blank">View Evidence →</a></p></div>',unsafe_allow_html=True)

st.markdown('<div class="section"><div class="eyebrow">Credentials</div><div class="title">Professional <span class="gold">Certifications</span></div></div>',unsafe_allow_html=True)
cols=st.columns(3)
for col,(t,issuer) in zip(cols,[('HubSpot Email Marketing','HubSpot Academy'),('Brand Strategy','PMI'),('Advanced Diploma in Digital Marketing','Professional Certification')]):
 with col: st.markdown(f'<div class="card"><div class="gold">CERTIFIED</div><h3>{t}</h3><p class="muted">{issuer}</p><a class="link" href="https://www.linkedin.com/in/pawanjha27/" target="_blank">View on LinkedIn →</a></div>',unsafe_allow_html=True)

st.markdown('<div class="section"><div class="eyebrow">Leadership</div><div class="title">Roles & <span class="gold">Responsibility</span></div></div>',unsafe_allow_html=True)
cols=st.columns(3)
for col,(t,o) in zip(cols,[('Internship Coordinator','NJ Wealth Group'),('Client Engagement','Prognosis Financial'),('Project Team Contributor','FIIB, New Delhi')]):
 with col: st.markdown(f'<div class="card"><h3>{t}</h3><p class="muted">{o}</p></div>',unsafe_allow_html=True)

st.markdown('<div class="section"><div class="eyebrow">Get in touch</div><div class="title">Let’s build <span class="gold">something meaningful</span></div></div>',unsafe_allow_html=True)
st.markdown('''<div class="contact">✉️ <a class="link" href="mailto:27-pawan.jha@fiib.edu.in">27-pawan.jha@fiib.edu.in</a></div><div class="contact">📞 <a class="link" href="tel:+916299188309">+91 6299188309</a></div><div class="contact">💼 <a class="link" href="https://www.linkedin.com/in/pawanjha27/" target="_blank">LinkedIn — Pawan Kumar Jha</a></div><div class="contact">💻 <a class="link" href="https://github.com/27-pawanjha-lang" target="_blank">GitHub — 27-pawanjha-lang</a></div><p class="muted" style="text-align:center;padding:35px">© 2026 Pawan Kumar Jha · PGDM Marketing · FIIB New Delhi</p>''',unsafe_allow_html=True)
