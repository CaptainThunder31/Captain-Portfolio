<template>
  <div class="about">
    <section class="about-hero section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h1 class="section-title">About Me</h1>
            <p class="about-description">{{ aboutInfo.description }}</p>
            <div class="about-details">
              <div class="detail-item">
                <h3>Experience</h3>
                <p>{{ aboutInfo.experience }}</p>
              </div>
              <div class="detail-item">
                <h3>Location</h3>
                <p>{{ aboutInfo.location }}</p>
              </div>
              <div class="detail-item">
                <h3>Email</h3>
                <p>{{ aboutInfo.email }}</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img :src="aboutInfo.image" :alt="aboutInfo.name" />
          </div>
        </div>
      </div>
    </section>

    <section class="experience section">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="job in experience" :key="job.id">
            <div class="timeline-content">
              <h3>{{ job.title }}</h3>
              <h4>{{ job.company }}</h4>
              <p class="timeline-date">{{ job.period }}</p>
              <p class="timeline-description">{{ job.description }}</p>
              <div class="timeline-skills">
                <span class="skill-tag" v-for="skill in job.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="grid grid-2">
          <div class="card education-card" v-for="edu in education" :key="edu.id">
            <h3>{{ edu.degree }}</h3>
            <h4>{{ edu.school }}</h4>
            <p class="education-year">{{ edu.year }}</p>
            <p>{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      aboutInfo: {
        name: 'John Doe',
        description: 'I am a passionate full-stack developer with over 5 years of experience creating digital solutions. I love turning complex problems into simple, beautiful designs. When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good book.',
        experience: '5+ Years',
        location: 'San Francisco, CA',
        email: 'john.doe@example.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face'
      },
      experience: [
        {
          id: 1,
          title: 'Senior Full Stack Developer',
          company: 'Tech Solutions Inc.',
          period: '2022 - Present',
          description: 'Leading development of enterprise web applications using modern JavaScript frameworks. Mentoring junior developers and architecting scalable solutions.',
          skills: ['Vue.js', 'React', 'Node.js', 'AWS', 'MongoDB']
        },
        {
          id: 2,
          title: 'Full Stack Developer',
          company: 'Digital Agency Co.',
          period: '2020 - 2022',
          description: 'Developed responsive web applications for various clients. Collaborated with designers and product managers to deliver high-quality solutions.',
          skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker', 'Git']
        },
        {
          id: 3,
          title: 'Frontend Developer',
          company: 'StartUp Ventures',
          period: '2019 - 2020',
          description: 'Created user interfaces for web applications using modern frontend frameworks. Focused on performance optimization and user experience.',
          skills: ['React', 'TypeScript', 'Sass', 'Webpack', 'Jest']
        }
      ],
      education: [
        {
          id: 1,
          degree: 'Bachelor of Science in Computer Science',
          school: 'University of California, Berkeley',
          year: '2015 - 2019',
          description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.'
        },
        {
          id: 2,
          degree: 'Full Stack Web Development Bootcamp',
          school: 'Code Academy',
          year: '2019',
          description: 'Intensive program covering modern web development technologies and best practices.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  padding-top: 80px;
  background: var(--bg-light);
}

.about-hero {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.about-details {
  display: grid;
  gap: 1.5rem;
}

.detail-item h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.detail-item p {
  color: var(--text-light);
}

.about-image {
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.experience {
  background: var(--bg-light);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 60%;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 60%;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 2rem;
  width: 0;
  height: 0;
  border: 15px solid transparent;
}

.timeline-item:nth-child(odd) .timeline-content::before {
  right: -30px;
  border-left-color: white;
}

.timeline-item:nth-child(even) .timeline-content::before {
  left: -30px;
  border-right-color: white;
}

.timeline-content h3 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.timeline-content h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.timeline-date {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.education {
  background: white;
}

.education-card h3 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.education-card h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.education-year {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.education-card p:last-child {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .about-image img {
    width: 300px;
    height: 400px;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 80px;
    margin-right: 0;
  }
  
  .timeline-content::before {
    left: -30px !important;
    right: auto !important;
    border-right-color: white !important;
    border-left-color: transparent !important;
  }
}
</style>