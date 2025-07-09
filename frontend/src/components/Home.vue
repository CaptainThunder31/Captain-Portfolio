<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title slide-up">
              Hello, I'm <span class="text-gradient">{{ personalInfo.name }}</span>
            </h1>
            <p class="hero-subtitle slide-up">{{ personalInfo.title }}</p>
            <p class="hero-description slide-up">{{ personalInfo.description }}</p>
            <div class="hero-buttons slide-up">
              <router-link to="/projects" class="btn">View My Work</router-link>
              <router-link to="/contact" class="btn btn-outline">Get In Touch</router-link>
            </div>
          </div>
          <div class="hero-image slide-up">
            <div class="image-container">
              <img :src="personalInfo.profileImage" :alt="personalInfo.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-projects section">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="grid grid-3">
          <div class="card project-card" v-for="project in featuredProjects" :key="project.id">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/projects" class="btn">View All Projects</router-link>
        </div>
      </div>
    </section>

    <section class="skills-preview section">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <h3>{{ category.name }}</h3>
            <div class="skill-items">
              <span class="skill-item" v-for="skill in category.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      personalInfo: {
        name: 'John Doe',
        title: 'Full Stack Developer',
        description: 'I create beautiful, responsive web applications with modern technologies. Passionate about clean code and user experience.',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
      },
      featuredProjects: [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce solution with React and Node.js',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
          tags: ['React', 'Node.js', 'MongoDB']
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A collaborative project management tool with real-time updates',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
          tags: ['Vue.js', 'Firebase', 'Tailwind']
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          description: 'A responsive weather application with beautiful UI',
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
          tags: ['JavaScript', 'API', 'CSS3']
        }
      ],
      skillCategories: [
        {
          name: 'Frontend',
          skills: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']
        },
        {
          name: 'Backend',
          skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL']
        },
        {
          name: 'Tools',
          skills: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Vite']
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 80px;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-outline {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background: white;
  color: var(--primary-color);
}

.hero-image {
  display: flex;
  justify-content: center;
}

.image-container {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-projects {
  background: var(--bg-light);
}

.project-card {
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.project-content p {
  color: var(--text-light);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.skills-preview {
  background: white;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  text-align: center;
  padding: 2rem;
  border-radius: var(--border-radius);
  background: var(--bg-light);
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-item {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
}

.text-center {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
}
</style>