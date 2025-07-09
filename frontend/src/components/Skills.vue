<template>
  <div class="skills">
    <section class="skills-hero section">
      <div class="container">
        <h1 class="section-title">Skills & Technologies</h1>
        <p class="skills-subtitle">Here are the technologies I work with to bring ideas to life</p>
      </div>
    </section>

    <section class="technical-skills section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category" v-for="category in technicalSkills" :key="category.name">
            <div class="category-header">
              <div class="category-icon">
                <component :is="category.icon" />
              </div>
              <h3>{{ category.name }}</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="soft-skills section">
      <div class="container">
        <h2 class="section-title">Soft Skills</h2>
        <div class="grid grid-3">
          <div class="card soft-skill-card" v-for="skill in softSkills" :key="skill.name">
            <div class="soft-skill-icon">
              <component :is="skill.icon" />
            </div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="tools section">
      <div class="container">
        <h2 class="section-title">Tools & Platforms</h2>
        <div class="tools-grid">
          <div class="tool-item" v-for="tool in tools" :key="tool.name">
            <div class="tool-icon">
              <component :is="tool.icon" />
            </div>
            <span class="tool-name">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="certifications section">
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="grid grid-2">
          <div class="card certification-card" v-for="cert in certifications" :key="cert.id">
            <div class="cert-header">
              <div class="cert-logo">
                <component :is="cert.logo" />
              </div>
              <div class="cert-info">
                <h3>{{ cert.name }}</h3>
                <p class="cert-issuer">{{ cert.issuer }}</p>
                <p class="cert-date">{{ cert.date }}</p>
              </div>
            </div>
            <p class="cert-description">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Mock icons as simple divs since we don't have icon library
const CodeIcon = { template: '<div class="mock-icon">💻</div>' }
const DatabaseIcon = { template: '<div class="mock-icon">🗄️</div>' }
const CloudIcon = { template: '<div class="mock-icon">☁️</div>' }
const MobileIcon = { template: '<div class="mock-icon">📱</div>' }
const TeamIcon = { template: '<div class="mock-icon">👥</div>' }
const BrainIcon = { template: '<div class="mock-icon">🧠</div>' }
const MessageIcon = { template: '<div class="mock-icon">💬</div>' }
const LeaderIcon = { template: '<div class="mock-icon">👔</div>' }
const GitIcon = { template: '<div class="mock-icon">🔧</div>' }
const DesignIcon = { template: '<div class="mock-icon">🎨</div>' }
const DockerIcon = { template: '<div class="mock-icon">🐳</div>' }
const AWSIcon = { template: '<div class="mock-icon">🌐</div>' }
const CertIcon = { template: '<div class="mock-icon">🏆</div>' }

export default {
  name: 'Skills',
  components: {
    CodeIcon,
    DatabaseIcon,
    CloudIcon,
    MobileIcon,
    TeamIcon,
    BrainIcon,
    MessageIcon,
    LeaderIcon,
    GitIcon,
    DesignIcon,
    DockerIcon,
    AWSIcon,
    CertIcon
  },
  data() {
    return {
      technicalSkills: [
        {
          name: 'Frontend Development',
          icon: 'CodeIcon',
          skills: [
            { name: 'JavaScript', level: 95 },
            { name: 'Vue.js', level: 90 },
            { name: 'React', level: 85 },
            { name: 'TypeScript', level: 80 },
            { name: 'HTML5/CSS3', level: 95 },
            { name: 'Sass/SCSS', level: 85 }
          ]
        },
        {
          name: 'Backend Development',
          icon: 'DatabaseIcon',
          skills: [
            { name: 'Node.js', level: 88 },
            { name: 'Python', level: 85 },
            { name: 'Express.js', level: 90 },
            { name: 'FastAPI', level: 82 },
            { name: 'MongoDB', level: 80 },
            { name: 'PostgreSQL', level: 78 }
          ]
        },
        {
          name: 'Cloud & DevOps',
          icon: 'CloudIcon',
          skills: [
            { name: 'AWS', level: 75 },
            { name: 'Docker', level: 80 },
            { name: 'CI/CD', level: 70 },
            { name: 'Kubernetes', level: 65 },
            { name: 'Linux', level: 85 },
            { name: 'Git', level: 95 }
          ]
        },
        {
          name: 'Mobile Development',
          icon: 'MobileIcon',
          skills: [
            { name: 'React Native', level: 75 },
            { name: 'Flutter', level: 60 },
            { name: 'iOS Development', level: 55 },
            { name: 'Android Development', level: 50 }
          ]
        }
      ],
      softSkills: [
        {
          name: 'Team Leadership',
          icon: 'TeamIcon',
          description: 'Experienced in leading development teams and mentoring junior developers'
        },
        {
          name: 'Problem Solving',
          icon: 'BrainIcon',
          description: 'Strong analytical skills and ability to solve complex technical challenges'
        },
        {
          name: 'Communication',
          icon: 'MessageIcon',
          description: 'Excellent verbal and written communication skills with stakeholders'
        },
        {
          name: 'Project Management',
          icon: 'LeaderIcon',
          description: 'Skilled in Agile methodologies and project planning'
        }
      ],
      tools: [
        { name: 'VS Code', icon: 'CodeIcon' },
        { name: 'Git', icon: 'GitIcon' },
        { name: 'Figma', icon: 'DesignIcon' },
        { name: 'Docker', icon: 'DockerIcon' },
        { name: 'AWS', icon: 'AWSIcon' },
        { name: 'Postman', icon: 'CodeIcon' },
        { name: 'Webpack', icon: 'CodeIcon' },
        { name: 'Vite', icon: 'CodeIcon' },
        { name: 'Jest', icon: 'CodeIcon' },
        { name: 'Cypress', icon: 'CodeIcon' },
        { name: 'Slack', icon: 'MessageIcon' },
        { name: 'Jira', icon: 'LeaderIcon' }
      ],
      certifications: [
        {
          id: 1,
          name: 'AWS Certified Developer',
          issuer: 'Amazon Web Services',
          date: '2023',
          logo: 'AWSIcon',
          description: 'Certified in developing and maintaining applications on AWS platform'
        },
        {
          id: 2,
          name: 'Google Cloud Professional',
          issuer: 'Google Cloud',
          date: '2022',
          logo: 'CloudIcon',
          description: 'Professional certification in Google Cloud Platform services'
        },
        {
          id: 3,
          name: 'Certified Kubernetes Administrator',
          issuer: 'Cloud Native Computing Foundation',
          date: '2023',
          logo: 'CertIcon',
          description: 'Certified in Kubernetes cluster administration and management'
        },
        {
          id: 4,
          name: 'MongoDB Certified Developer',
          issuer: 'MongoDB University',
          date: '2022',
          logo: 'DatabaseIcon',
          description: 'Certified in MongoDB database development and optimization'
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  padding-top: 80px;
  background: var(--bg-light);
}

.skills-hero {
  background: white;
  text-align: center;
}

.skills-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.technical-skills {
  background: var(--bg-light);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.mock-icon {
  font-size: 1.5rem;
}

.category-header h3 {
  color: var(--text-dark);
  margin: 0;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 500;
  color: var(--text-dark);
}

.skill-level {
  font-size: 0.9rem;
  color: var(--text-light);
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 4px;
  transition: width 0.8s ease;
}

.soft-skills {
  background: white;
}

.soft-skill-card {
  text-align: center;
  padding: 2rem;
}

.soft-skill-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 2rem;
}

.soft-skill-card h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.soft-skill-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.tools {
  background: var(--bg-light);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.tool-item {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.tool-item:hover {
  transform: translateY(-5px);
}

.tool-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
}

.tool-name {
  font-weight: 500;
  color: var(--text-dark);
}

.certifications {
  background: white;
}

.certification-card {
  padding: 2rem;
}

.cert-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cert-logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.cert-info h3 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.cert-issuer {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.cert-date {
  color: var(--text-light);
  font-size: 0.9rem;
}

.cert-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  
  .cert-header {
    flex-direction: column;
    text-align: center;
  }
  
  .cert-logo {
    align-self: center;
  }
}
</style>