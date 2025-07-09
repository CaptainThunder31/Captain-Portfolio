<template>
  <div class="projects">
    <section class="projects-hero section">
      <div class="container">
        <h1 class="section-title">My Projects</h1>
        <p class="projects-subtitle">Here are some of my recent work that I'm proud of</p>
        
        <div class="filter-buttons">
          <button 
            :class="['filter-btn', { active: activeFilter === 'all' }]"
            @click="setFilter('all')"
          >
            All
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['filter-btn', { active: activeFilter === category }]"
            @click="setFilter(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <section class="projects-grid section">
      <div class="container">
        <div class="grid grid-3">
          <div 
            class="card project-card" 
            v-for="project in filteredProjects" 
            :key="project.id"
            @click="openModal(project)"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a :href="project.demoUrl" target="_blank" class="project-link" @click.stop>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m-4 7l7-7M13 3h8v8"/>
                    </svg>
                  </a>
                  <a :href="project.githubUrl" target="_blank" class="project-link" @click.stop>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <div class="project-category">{{ project.category }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <div class="modal-header">
          <h2>{{ selectedProject.title }}</h2>
          <div class="modal-links">
            <a :href="selectedProject.demoUrl" target="_blank" class="btn">Live Demo</a>
            <a :href="selectedProject.githubUrl" target="_blank" class="btn btn-outline">GitHub</a>
          </div>
        </div>
        <div class="modal-body">
          <img :src="selectedProject.image" :alt="selectedProject.title" />
          <div class="modal-details">
            <p class="modal-description">{{ selectedProject.fullDescription }}</p>
            <div class="modal-tech">
              <h4>Technologies Used:</h4>
              <div class="tech-tags">
                <span class="tech-tag" v-for="tech in selectedProject.technologies" :key="tech">{{ tech }}</span>
              </div>
            </div>
            <div class="modal-features">
              <h4>Key Features:</h4>
              <ul>
                <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      activeFilter: 'all',
      selectedProject: null,
      projects: [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce solution with React and Node.js',
          fullDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The application is fully responsive and optimized for performance.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
          category: 'Web App',
          tags: ['React', 'Node.js', 'MongoDB'],
          technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
          features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard', 'Responsive Design'],
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/johndoe/ecommerce'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A collaborative project management tool with real-time updates',
          fullDescription: 'A collaborative task management application that helps teams organize their work efficiently. Built with Vue.js and Firebase, it features real-time updates, drag-and-drop functionality, and team collaboration tools.',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
          category: 'Web App',
          tags: ['Vue.js', 'Firebase', 'Tailwind'],
          technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vue Router', 'Vuex'],
          features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'Task Prioritization', 'Due Date Tracking', 'Progress Visualization'],
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/johndoe/taskmanager'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          description: 'A responsive weather application with beautiful UI',
          fullDescription: 'A beautiful and responsive weather dashboard that provides current weather conditions and forecasts. Built with vanilla JavaScript and integrated with multiple weather APIs for accurate data.',
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
          category: 'Web App',
          tags: ['JavaScript', 'API', 'CSS3'],
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Chart.js'],
          features: ['Current Weather', '5-Day Forecast', 'Location Search', 'Weather Maps', 'Historical Data', 'Mobile Responsive'],
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/johndoe/weather'
        },
        {
          id: 4,
          title: 'Mobile Banking App',
          description: 'A secure mobile banking application with modern UI',
          fullDescription: 'A secure and user-friendly mobile banking application built with React Native. Features include account management, transaction history, money transfers, and biometric authentication.',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
          category: 'Mobile App',
          tags: ['React Native', 'Redux', 'Firebase'],
          technologies: ['React Native', 'Redux', 'Firebase', 'Biometric Auth', 'Encrypted Storage'],
          features: ['Account Management', 'Transaction History', 'Money Transfer', 'Biometric Login', 'Push Notifications', 'Offline Support'],
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/johndoe/banking'
        },
        {
          id: 5,
          title: 'Data Visualization Dashboard',
          description: 'Interactive dashboard for business analytics',
          fullDescription: 'A comprehensive data visualization dashboard built for business analytics. Features interactive charts, real-time data updates, and customizable reports to help businesses make data-driven decisions.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
          category: 'Dashboard',
          tags: ['React', 'D3.js', 'Python'],
          technologies: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL', 'WebSocket'],
          features: ['Interactive Charts', 'Real-time Data', 'Custom Reports', 'Data Export', 'User Management', 'API Integration'],
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/johndoe/dashboard'
        },
        {
          id: 6,
          title: 'AI Chat Application',
          description: 'Intelligent chatbot with natural language processing',
          fullDescription: 'An advanced AI-powered chat application that uses natural language processing to provide intelligent responses. Built with modern web technologies and integrated with machine learning APIs.',
          image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
          category: 'AI/ML',
          tags: ['Python', 'NLP', 'TensorFlow'],
          technologies: ['Python', 'TensorFlow', 'NLP', 'WebSocket', 'Redis', 'Docker'],
          features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Voice Input', 'Sentiment Analysis', 'Learning Capabilities'],
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/johndoe/aichat'
        }
      ]
    }
  },
  computed: {
    categories() {
      return [...new Set(this.projects.map(project => project.category))]
    },
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.activeFilter)
    }
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter
    },
    openModal(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedProject = null
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
.projects {
  padding-top: 80px;
  background: var(--bg-light);
}

.projects-hero {
  background: white;
  text-align: center;
}

.projects-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.filter-btn:hover,
.filter-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.projects-grid {
  background: var(--bg-light);
}

.project-card {
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  background: white;
  color: var(--text-dark);
  padding: 0.75rem;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--primary-color);
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.project-content p {
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-category {
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: var(--border-radius);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--text-light);
  z-index: 10;
}

.modal-header {
  padding: 2rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  color: var(--text-dark);
  margin-bottom: 0;
}

.modal-links {
  display: flex;
  gap: 1rem;
}

.modal-body {
  padding: 2rem;
}

.modal-body img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
}

.modal-description {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.modal-tech,
.modal-features {
  margin-bottom: 2rem;
}

.modal-tech h4,
.modal-features h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--bg-light);
  color: var(--text-dark);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.modal-features ul {
  list-style: none;
  padding: 0;
}

.modal-features li {
  color: var(--text-light);
  padding: 0.5rem 0;
  padding-left: 1rem;
  position: relative;
}

.modal-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .filter-buttons {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .modal-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .modal-links {
    width: 100%;
    justify-content: center;
  }
}
</style>