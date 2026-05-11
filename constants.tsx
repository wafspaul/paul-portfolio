
import { CaseStudy, Partnership, TrainingSession, Metric, IdentityCard, Expertise } from './types';

export const IDENTITY_CARDS: IdentityCard[] = [
  {
    title: 'The Strategist',
    label: 'Digital Transformation',
    description: 'Designing high-level technology roadmaps that align with humanitarian goals and national policy.',
    icon: 'Target'
  },
  {
    title: 'The Implementer',
    label: 'Infrastructure & AI',
    description: 'Deploying last-mile connectivity and ML-powered systems to solve real-world operational bottlenecks.',
    icon: 'Cpu'
  },
  {
    title: 'The Connector',
    label: 'Strategic Partnerships',
    description: 'Bridging the gap between government, NGOs, and the private sector to build sustainable tech ecosystems.',
    icon: 'Users'
  },
  {
    title: 'The Educator',
    label: 'AI Literacy',
    description: 'Empowering thousands with digital skills and AI productivity tools to unlock new economic opportunities.',
    icon: 'GraduationCap'
  }
];

export const EXPERTISE: Expertise[] = [
  {
    title: 'AI for Education',
    description: 'Designing and scaling AI literacy and digital skills programs for marginalized communities — from Ajira Digital cohorts to refugee camps in Dadaab.',
    tags: ['AI Literacy', 'Curriculum Design', 'EdTech Deployment']
  },
  {
    title: 'Digital Inclusion & Data',
    description: 'Making the digital divide visible with evidence — building live data tools, mapping connectivity gaps, and translating data into decisions for NGOs and government.',
    tags: ['Data Visualisation', 'Connectivity Mapping', 'Digital Policy']
  },
  {
    title: 'Product Building',
    description: 'Shipping live platforms that connect digital skills to economic outcomes — from AI-powered job matching to interactive infrastructure maps.',
    tags: ['Web Development', 'Firebase', 'Vercel', 'Leaflet.js']
  }
];

export const METRICS: Metric[] = [
  { value: '6,000+', label: 'Learners Trained', context: 'Digital literacy & AI skills across Kenya' },
  { value: '700+', label: 'Refugees Trained', context: 'DRC Dadaab — 60% job placement within 3 months' },
  { value: '60%', label: 'Employment Rate', context: 'Post-training placement, DRC Dadaab pilot' },
  { value: '250+', label: 'Monthly Hub Users', context: 'Community tech hub serving local ecosystem' },
  { value: '15+', label: 'Institutions Connected', context: 'National fiber infrastructure, Kajiado County' },
  { value: '40%', label: 'Manual Input Reduction', context: 'ML automation at Kenya Revenue Authority' }
];

export const PARTNERSHIPS: Partnership[] = [
  { organization: 'Danish Refugee Council', role: 'Digital Curriculum Partner', impact: '700+ refugees trained, 60% placement' },
  { organization: 'LEO Project', role: 'Co-Creator', impact: 'Community hub serving 250 users/month' },
  { organization: 'ICT Authority/KRA', role: 'Management Trainee', impact: 'National ID systems & ML tax optimization' },
  { organization: 'NOFBI/Kajiado', role: 'Technical Lead', impact: '15+ institutions, 2,000+ students connected' }
];

export const TRAINING: TrainingSession[] = [
  { date: '2020–Present', program: 'Ajira Digital Lead Trainer', audience: '6,000+ learners', outcome: 'Digital skills, income generation & remote work' },
  { date: '2023–2024', program: 'DRC Dadaab Digital Livelihoods Pilot', audience: '700+ refugees', outcome: 'Design & translation skills — 60% employed within 3 months' },
  { date: '2024–Present', program: 'AI Literacy & Productivity Programs', audience: 'Community cohorts & organisations', outcome: 'ChatGPT, Copilot, Claude & prompt engineering for work' },
  { date: '2024–Present', program: 'AI for Education Workshops', audience: 'Youth & educators', outcome: 'AI tools applied to learning, research & job readiness' },
  { date: '2018–2019', program: 'PDTP / KRA National Systems', audience: 'Government agencies', outcome: 'NIIMS identity systems & ML-powered tax optimisation rollout' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'dadaab-digital-skills',
    title: 'Digital Skills Pilot in Dadaab Refugee Camps',
    organization: 'Danish Refugee Council (DRC)',
    role: 'Lead Digital Curriculum Trainer',
    duration: '2023-2024',
    location: 'Dadaab, Kenya',
    featured: true,
    metrics: [
      { value: '700+', label: 'Refugees Trained' },
      { value: '60%', label: 'Job Placement' }
    ],
    challenge: {
      problem: 'Limited infrastructure and digital literacy gaps in isolated humanitarian settings.',
      constraints: ['Diverse linguistic backgrounds', 'Poor connectivity', 'Isolated location']
    },
    approach: {
      strategy: 'Hybrid Learning Model using offline-first content and portable Wi-Fi hotspots.',
      tools: ['Google Classroom', 'Amazon MTurk', 'Custom LMS'],
      stakeholders: ['UNHCR', 'Local Community Leaders', 'DRC Staff']
    },
    outcome: {
      results: 'Graduates earned an average of $150/month. Pilot scaled to Kakuma.',
      sustainability: 'Peer-led mentorship groups.',
      scalability: 'Model now being replicated in other East African camps.'
    },
    tags: ['Refugee Empowerment', 'Digital Literacy', 'Remote Work'],
    content: 'Operating in Dadaab presented unique barriers: limited internet infrastructure, diverse linguistic backgrounds (Somali, Swahili, English), and varying levels of digital literacy. The pilot proved that digital livelihoods are viable in humanitarian contexts.'
  },
  {
    slug: 'nofbi-infrastructure',
    title: 'National Optical Fibre Backbone Integration',
    organization: 'ICT Authority Kenya / Ajira Digital',
    role: 'Technical Lead & Project Coordinator',
    duration: '2021-2022',
    location: 'Kajiado County, Kenya',
    featured: true,
    metrics: [
      { value: '15+', label: 'Institutions Connected' },
      { value: '2,000+', label: 'Students Impacted' }
    ],
    challenge: {
      problem: 'Rural schools lacked high-speed connectivity, hindering digital education.',
      constraints: ['High satellite costs', 'Topographical barriers', 'Power instability']
    },
    approach: {
      strategy: 'Mapping network topology and deploying managed fiber infrastructure.',
      tools: ['Cisco Catalyst 2960', 'Fiber converters', 'APC UPS'],
      stakeholders: ['ICT Authority', 'Local Schools', 'County Government']
    },
    outcome: {
      results: 'Latency reduced from 400ms to 15ms. Connectivity costs cut by 60%.',
      sustainability: 'Community-funded utility fees.',
      scalability: 'Template for national rural connectivity rollouts.'
    },
    tags: ['Last-Mile', 'Government', 'Systems Integration'],
    content: 'Kajiado County faced a stark digital divide. Schools relied on expensive 4G or VSAT. Our implementation created permanent public infrastructure with sustainable costs.'
  },
  {
    slug: 'kra-ml-automation',
    title: 'ML-Powered Tax Optimization',
    organization: 'Kenya Revenue Authority (KRA)',
    role: 'Systems Analyst / Management Trainee',
    duration: '2019-2020',
    location: 'Nairobi, Kenya',
    featured: true,
    metrics: [
      { value: '40%', label: 'Efficiency Gain' },
      { value: 'KES 450M', label: 'Revenue Protected' }
    ],
    challenge: {
      problem: 'Manual tax return processing causing 14-day delays and human error.',
      constraints: ['Legacy databases', 'High transaction volume', 'Compliance risks']
    },
    approach: {
      strategy: 'Hybrid rule-based + ML validation using human-in-the-loop design.',
      tools: ['Python', 'scikit-learn', 'PostgreSQL', 'SHAP'],
      stakeholders: ['KRA ICT Department', 'Compliance Teams']
    },
    outcome: {
      results: '40% manual input reduction and 25% accuracy improvement.',
      sustainability: 'Automated feedback loops for continuous learning.',
      scalability: 'Applicable to other government revenue collection systems.'
    },
    tags: ['AI/ML', 'Government Tech', 'Data Automation'],
    content: 'By implementing Random Forest models for anomaly detection, we identified high-risk filings automatically, allowing auditors to focus on verified discrepancies.'
  },
  {
    slug: 'kenya-connectivity-map',
    title: 'Kenya Connectivity Map',
    organization: 'Independent Project',
    role: 'Solo Builder & Data Analyst',
    duration: 'March 2026–Present',
    location: 'Kenya — All 47 Counties',
    liveUrl: 'https://kenya-connectivity-map.vercel.app',
    featured: true,
    metrics: [
      { value: '47', label: 'Counties Mapped' },
      { value: '5', label: 'Interactive Data Layers' }
    ],
    challenge: {
      problem: 'Decisions about digital inclusion in Kenya were being made without accessible, visual data on where connectivity actually exists — and where it does not.',
      constraints: ['Fragmented public data sources', 'No single unified visualisation tool', 'Data must be usable by non-technical stakeholders']
    },
    approach: {
      strategy: 'Built a single-file interactive web map using Leaflet.js, aggregating internet coverage, electricity distribution, mini-grid inventory, and KOSAP pipeline data across all 47 counties.',
      tools: ['Leaflet.js', 'HTML / CSS / JavaScript', 'Vercel', 'GitHub'],
      stakeholders: ['NGOs', 'County Governments', 'Telcos', 'EdTech Organisations']
    },
    outcome: {
      results: 'Live interactive map at kenya-connectivity-map.vercel.app — used as a thought leadership and stakeholder engagement tool on LinkedIn. Electricity overlays, mobile optimisation, voltage sub-filters, and mini-grid inventory all live.',
      sustainability: 'Auto-deployed via GitHub → Vercel. Data updated as new government reports release.',
      scalability: 'Designed as a paid data resource for organisations needing county-level connectivity analysis.'
    },
    tags: ['Data Visualisation', 'Digital Inclusion', 'Web Development'],
    content: 'An interactive map showing internet connectivity and electricity coverage across every county in Kenya. Built to make the digital divide visible with data — directly relevant to NGOs, telcos, county governments, and EdTech platforms targeting underserved regions. Live at kenya-connectivity-map.vercel.app.'
  },
  {
    slug: 'kazi-pap',
    title: 'Kazi Pap — AI Job Matching Platform',
    organization: 'Independent Product',
    role: 'Founder & Developer',
    duration: 'March 2026–Present',
    location: 'Kenya',
    liveUrl: 'https://kazipap.co.ke',
    featured: true,
    metrics: [
      { value: '10+', label: 'Beta Users — Stage 2 Complete' },
      { value: '31', label: 'Curated Jobs Delivered Per Week' }
    ],
    challenge: {
      problem: '80% of Kenyan youth who complete digital skills training still cannot find work within 6 months. The gap is not in skills — it is in matching trained youth to real opportunities.',
      constraints: ['Youth distrust of job platforms', 'Informal gig market poorly indexed', 'Need for mobile-first, low-data experience']
    },
    approach: {
      strategy: 'Built an AI-powered job matching platform using Google AI Studio and Firebase, connecting Kenyan youth aged 18–30 to gig and formal employment based on their skills profile. A Vercel Cron pipeline delivers 31 curated remote-friendly jobs per week. Professional email infrastructure (admin@kazipap.co.ke) and a feedback notification system are live.',
      tools: ['Google AI Studio', 'Firebase', 'Vercel', 'Resend', 'ImprovMX', 'Africa\'s Talking (SMS — planned)'],
      stakeholders: ['Kenyan youth job-seekers', 'Ajira Digital graduates', 'Small and medium employers', 'Remote Jobs and You newsletter (partnership in progress)']
    },
    outcome: {
      results: 'Platform live at kazipap.co.ke. Stage 2 complete — 10+ real users with feedback collected. Professional email infrastructure live. Cron pipeline delivering 31 curated jobs per week. Partnership conversation open with Remote Jobs and You newsletter. Now in Stage 3: fixing top user-reported issues and building SMS job alerts via Africa\'s Talking.',
      sustainability: 'Roadmap includes employer-side listings, premium user tier, and institutional partnerships with Ajira Digital and university career offices.',
      scalability: 'Grant funding targets include GSMA Connected Women Fund and Kenya ICT Authority Innovation Fund.'
    },
    tags: ['AI/ML', 'Youth Employment', 'Entrepreneurship'],
    content: 'An AI-powered job matching platform connecting Kenyan youth to gig and formal employment — built from scratch in March 2026. Stage 2 complete with 10+ real beta users and structured feedback collected. Features a Vercel Cron pipeline delivering 31 curated jobs per week, professional email infrastructure, and a real-time feedback notification system. Partnership conversations underway with Remote Jobs and You newsletter. Live at kazipap.co.ke.'
  },
  {
    slug: 'ai-governance-africa',
    title: 'AI Governance Africa — Independent Research',
    organization: 'Independent Research',
    role: 'Researcher & Policy Advocate',
    duration: 'March 2026–Present',
    location: 'Kenya / East Africa',
    featured: true,
    metrics: [
      { value: '17M', label: 'Kenyan Workers Analysed (ILO Data)' },
      { value: '86%', label: 'Informal Workforce — the Governance Gap' }
    ],
    challenge: {
      problem: 'AI automation is displacing workers in BPO, data services, and routine formal employment faster than existing governance structures can absorb — especially in Kenya where 86% of the workforce is informal and invisible to current protections.',
      constraints: ['Fragmented public labour data', 'Governance frameworks designed for formal employment only', 'Speed of AI displacement outpacing policy development']
    },
    approach: {
      strategy: 'Original independent research combining ILO and World Bank labour data, automation vulnerability modelling by occupation and education level, and AI bias analysis across gender and age lines in Kenya. Findings translated into a policy submission to Parliament and a public essay.',
      tools: ['Python', 'Jupyter Notebooks', 'ILO Kenya Employment Data 2022', 'World Bank datasets', 'SHAP / scikit-learn'],
      stakeholders: ['Parliament of Kenya (AI Bill 2026)', 'EdTech East Africa coalition', 'AU Digital Commission (future target)']
    },
    outcome: {
      results: 'Submitted individual petition to Parliament of Kenya on AI Bill 2026, Section 33 (Workforce Impact) — arguing that informal workers are invisible to the clause as written and proposing three concrete amendments. Co-contributed to EdTech East Africa joint stakeholder memorandum. Full research essay (~1,650 words) complete. LinkedIn thought leadership post scheduled May 2026.',
      sustainability: 'Research continues as a standing project — feeding into fellowship applications (GovAI, AISF), policy briefs targeting Kenya ICT Authority, and public writing to build governance credibility.',
      scalability: 'Pathway: policy brief → AU Digital Commission → advisory committee access. Designed to position Paul as a credible AI governance voice grounded in practitioner-level implementation data.'
    },
    tags: ['AI Governance', 'Policy Research', 'Digital Inclusion'],
    content: 'Original research on AI-driven job displacement as a systemic risk in African economies, with Kenya as primary case study. Central finding: 86% informality means Kenya\'s AI governance frameworks cannot reach the 7.5 million intermediate-band workers most exposed to automation. Includes three analytical sub-projects (automation vulnerability analysis, AI bias in education, AI bias in Kenyan names) and a completed policy submission to the Parliament of Kenya on the AI Bill 2026.'
  }
];
