export interface Command {
   description: string;
   output: string;
}




export const commands: Record<string, Command> = {
   help: {
      description: 'Show available commands',
      output: `Available commands:
about       - Learn about me
projects    - View my projects
skills      - See my technical skills
experience  - My work experience
contact     - How to reach me
education   - My educational background
certifications - View my certifications
music       - My music career
sudo        - Try to get root access
clear       - Clear the terminal

Type any command to continue...`
   },
   about: {
      description: 'Learn about me',
      output: `About Azizkhon
════════════════════════════

I'm a highly versatile full-stack developer and AI engineer with expertise in:
• Machine Learning & AI/ML Engineering
• Full-stack web development
• Cybersecurity
• Telegram bot development
• Payment system integration
• DevOps practices
• 3D web development
• UI/UX design
• Data science and analysis
• Audio engineering and music production
• Music production and audio engineering

🎯 Core Competencies:
• Machine Learning: regression, classification, NLP, deep learning
• Full-stack Development: Node.js, Next.js, React, MongoDB, PostgreSQL
• Cybersecurity: ethical hacking, vulnerability testing, secure coding
• Bot Development: advanced Telegram bots with payment systems
• Web Development: Node.js, Next.js, React, MongoDB, PostgreSQL
• Bot Automation: Advanced Telegram bots with payment systems
• Payment Integration: ClickUZ, Uzcard, HUMO, cryptocurrency
• Cybersecurity: OSINT, vulnerability testing, secure coding
• DevOps: CI/CD, Docker, Kubernetes, cloud platforms (AWS, Azure, GCP)
• 3D Development: Three.js, React Three Fiber, WebGL
• UI/UX Design: Figma, Adobe XD, responsive design
• Data Science: EDA, data visualization, statistical analysis
• Audio Engineering: Live performance, sound system operation, mixing
• Physics Simulations: Realistic physics in web applications
• Music: Live performance, audio engineering, composition
• Languages: English, Russian, Uzbek

 

📍 Location: Samarkand, Uzbekistan
💼 Current Focus: AI/ML Engineering & Full-stack Development
🎓 Background: Information Technology + Music`
   },
   projects: {
      description: 'View my projects',
      output: `Recent Projects
══════════════════════════

🤖 Telegram Payment Platform
   • Full Telegram-based platform with local payment integration
   • Technologies: Telegram Bot API, ClickUZ, Node.js
   • Features: Real-time balance, rewards system, games

🏠 Housing Price Prediction
   • ML model for Tashkent real estate market
   • Technologies: Python, scikit-learn, Pandas
   • Features: EDA, regression modeling, evaluation

🩺 Medical Diagnostic Tools
   • ML models for diabetes diagnostics
   • Technologies: TensorFlow, PyTorch
   • Features: Classification algorithms, data visualization

🔒 Cybersecurity Solutions
   • Enterprise-grade security implementations
   • Technologies: Firewalls, IDS, endpoint protection
   • Features: Vulnerability testing, secure coding

🎵 Music Production
   • Original compositions and live performances
   • Technologies: DAWs, mixing consoles, effects processors
   • Features: Live instrumentation with DJ sets`
   },
   skills: {
      description: 'See my technical skills',
      output: `Technical Skills
══════════════════════════

🤖 AI/ML Development:
   Machine Learning       ████████████ 95%
   Python (ML Stack)      ████████████ 95%
   TensorFlow/PyTorch     ███████████  90%
   Deep Learning          ███████████  90%
   Data Science Workflow  ██████████   85%

🌐 Web Development:
   Full-stack Development ████████████ 95%
   Node.js/Next.js        ████████████ 95%
   React                  ███████████  90%
   RESTful APIs           ██████████   85%
   MongoDB/PostgreSQL     ██████████   85%
   web security           █████████   80%
   Payment Integration    ██████████   85%


💻 Software Development:
    JavaScript/TypeScript  ████████████ 95%
    Git/GitHub             ███████████  90%
    Agile/Scrum            ██████████   85%
    DevOps                 ██████████   85%
    Docker/Kubernetes      █████████    80%

💻 3d Development:
    Three.js               ███████████  90%
    React Three Fiber      ███████████  90%
    WebGL                  ██████████   85%
    Physics Simulations    ██████████   85%    


🔧 DevOps & Cloud:    
    CI/CD Pipelines       ███████████  90%  
    AWS/Azure/GCP         ██████████   85%
    Infrastructure as Code ██████████   85%
    Monitoring/Logging    █████████    80%

🎨 UI/UX Design:
   Responsive Design      ███████████  90%
   Figma/Adobe XD         ██████████   85%
   User-Centered Design   █████████    80%

🔐 Cybersecurity:
   Ethical Hacking        ███████████  90%
   Network Security       ███████████  90%
   Vulnerability Testing  █████████    85%
   Secure Coding          █████████    85%
   OSINT                  ████████     80%
   Incident Response      ████████     80%

🤖 Bot Development:
   Telegram Bot Dev/ment  ███████████  90%
   Telegram Bot API       ███████████  90%
   Payment Integration    █████████    85%
   Bot Automation         █████████    85%

🎵 Music & Audio:
   Live Performance       ███████████  90%
   Audio Engineering      █████████    85%
   Music Production       ████████     80%`
   },
   experience: {
      description: 'My work experience',
      output: `Work Experience
══════════════════════════

🏫 ZARMED University
   📅 Sep 2024 - May 2025
   • Network Administrator & Cybersecurity Specialist
   • Maintained 99.9% network uptime
   • Conducted security audits and implemented policies
   • Provided cybersecurity training
   • HR Managnement Helper

✈️ HUMO Air
   📅 Apr 2022 - Dec 2023
   • IT Support & Cybersecurity Specialist
   • Optimized IT infrastructure
   • Reduced security incidents significantly
   • Led cybersecurity awareness programs

🏫 Buyuk Avlod Academy
   📅 Dec 2025 – Present | Samarkand, Uzbekistan
      • Head of Engineering & Technical Programs  
         –leading IT & technical education 
   📅(Jun 2025 – Dec 2025) 
      • Full-Stack Programming & AI Instructor
         – delivered hands-on training in Web Dev, AI, ML,
           DevOps, and Cybersecurity for 40+ students
      • Skills: Full-Stack Development, React, AI, ML, Docker, Git, Leadership, Mentorship


💻 Freelance Developer
   📅 2023 - Present
   • Full-stack web applications
   • Custom Telegram bots with payments
   • Machine learning models
   • Cybersecurity consulting
   

🍽️ Oq Amur Restaurant
   📅 Mar 2021 - Feb 2023
   • Audio Engineer & Guitarist
   • Delivered high-quality live performances
   • Managed sound systems and equipment
   • Composed original music


   
content Management:
  instagram: @alazizxan.exe
  github: https://github.com/Alazizxan
  https://www.linkedin.com/in/alazizkhon/`
   },
   contact: {
      description: 'How to reach me',
      output: `Contact Information
══════════════════════════

🌐 https://www.linkedin.com/in/alazizkhon/
📧 Email: pulatovazizxan@gmail.com
📱 Instagram: @alazizxan.exe
 •  GitHub: github.com/Alazizxan
 

📍 Location: Samarkand, Uzbekistan
🕐 Timezone: UZT (UTC+5)

Open To:
• Remote AI/ML engineering roles
• Full-stack development projects
• Cybersecurity consulting
• Music production collaborations
• Technical mentorship opportunities`
   },
   education: {
      description: 'My educational background',
      output: `Education
══════════════════════════

🎓 Information Technology
   Tashkent University of Information Technologies
   • Specialized in Computer Systems and Networks
   • Graduated with honors

🎵 Music Education
   • Self-taught musician and audio engineer
   • Years of practical performance experience

📚 Continuous Learning:
   • Regular participation in tech bootcamps
   • Ongoing cybersecurity research
   • ML/AI course completion`
   },
   certifications: {
      description: 'View my certifications',
      output: `Certifications
══════════════════════════

🤖 AI/ML:
   • Data Science and ML (Basic to Advanced)
   • TensorFlow Developer Certificate
   https://www.udemy.com/certificate/UC-cdea1c71-e0e6-42bb-85bf-73025127f422/



🔐 Cybersecurity:
   • Ethical Hacking: Weaponization
   • Security+ 
   https://www.udemy.com/certificate/UC-4888008d-37f9-4563-8d5e-ea1815af307d/




💻 Getting Started with Threat Intelligence and Hunting
   • Issued by IBM SkillsBuild
   • Badge ID: c6e9fbae-b7de-4813-914e-063ededaf984
   https://www.credly.com/badges/c6e9fbae-b7de-4813-914e-063ededaf984/


🔐 Getting Started with Cybersecurity
   • Issued by IBM SkillsBuild
   • Badge ID: e24859a9-06a4-4be2-8ffc-db1d80f42e15
   https://www.credly.com/badges/e24859a9-06a4-4be2-8ffc-db1d80f42e15


🤖 Создание агента ИИ с помощью Microsoft Foundry
   Концепции искусственного интеллекта для разработчиков и специалистов по технологиям
   • Issued by Microsoft
   https://learn.microsoft.com/api/achievements/share/ru-ru/PulatovAZIZKHON-0977/HZQSAYC8?sharingId=F168C9FAFE11F9BE
   https://learn.microsoft.com/api/achievements/share/ru-ru/PulatovAZIZKHON-0977/AKT3Q4K7?sharingId=F168C9FAFE11F9BE


🤖 AI/ML:
   • Full-Stack AI Engineer 2026: ML, Deep Learning, GenerativeAI
   • Instructor: School of AI
   • 33.5 total hours — 125 lectures
   https://www.udemy.com/certificate/UC-f255bfda-c2f2-42d2-8a23-30ba789903c1/


🤖 Data Science:
   • Data Science: R Programming Complete Diploma
   https://www.udemy.com/certificate/UC-744585de-bdec-41b5-ae35-ca80a7662265/


🤖 AI/ML:
   • Data Science and Machine Learning (Basic to Advanced)
   https://www.udemy.com/certificate/UC-cdea1c71-e0e6-42bb-85bf-73025127f422/



💻 Development:
   • Node.js Certified Developer
   • MongoDB University Courses

🎵 Audio:
   • Audio Engineering Workshops
   • Music Production Certifications`
   },
   music: {
      description: 'My music career',
      output: `Music Background
══════════════════════════

🎸 Performance:
   • Professional guitarist and DJ
   • 2+ years at Oq Amur Restaurant
   • Blend of live instrumentation and DJ sets

🎛️ Audio Engineering:
   • Sound system operation and maintenance
   • Mixing consoles and effects processors
   • Live audio troubleshooting

🎶 Composition:
   • Original music production
   • Tailored compositions for venues
   • Versatile across multiple genres

🏆 Recognition:
   • Consistently positive audience feedback
   • Technical excellence in sound quality
   • Ability to enhance venue ambiance`
   },
   sudo: {
      description: 'Try to get root access',
      output: `sudo: access denied

Nice try! 😄 But this is just a portfolio website.
You don't need root access to explore my background.

Try using other commands like:
• help - See all available commands
• music - Learn about my audio career
• projects - Check my technical work
• contact - Get in touch

Remember: With great power comes great responsibility! 🎸`
   },
   clear: {
      description: 'Clear the terminal',
      output: 'clear'
   }
};
