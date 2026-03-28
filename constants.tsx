
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
    duration: '2025–Present',
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
    duration: '2026–Present',
    location: 'Kenya',
    liveUrl: 'https://kazi-pap.vercel.app',
    featured: true,
    metrics: [
      { value: 'Live', label: 'Deployed on Vercel' },
      { value: '18–30', label: 'Target Age Group (yrs)' }
    ],
    challenge: {
      problem: '80% of Kenyan youth who complete digital skills training still cannot find work within 6 months. The gap is not in skills — it is in matching trained youth to real opportunities.',
      constraints: ['Youth distrust of job platforms', 'Informal gig market poorly indexed', 'Need for mobile-first, low-data experience']
    },
    approach: {
      strategy: 'Built an AI-powered job matching platform using Google AI Studio and Firebase, connecting Kenyan youth aged 18–30 to gig and formal employment based on their skills profile.',
      tools: ['Google AI Studio', 'Firebase', 'Vercel', 'GitHub (wafspaul/kazi-pap)'],
      stakeholders: ['Kenyan youth job-seekers', 'Ajira Digital graduates', 'Small and medium employers']
    },
    outcome: {
      results: 'Platform live at kazi-pap.vercel.app. Currently in early user feedback stage — targeting first 10 real users before feature expansion.',
      sustainability: 'Roadmap includes employer-side listings, premium user tier, and institutional partnerships with Ajira Digital and university career offices.',
      scalability: 'Grant funding targets include GSMA Connected Women Fund and Kenya ICT Authority Innovation Fund.'
    },
    tags: ['AI/ML', 'Youth Employment', 'Entrepreneurship'],
    content: 'A job matching platform connecting Kenyan youth to gig and formal employment through AI-powered matching. Addresses the gap between digital skills training and employment outcomes — the same problem Paul trains people to solve. Live at kazi-pap.vercel.app.'
  }
];
