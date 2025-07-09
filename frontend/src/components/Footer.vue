<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <h3 class="logo-text">John Doe</h3>
            <p class="footer-tagline">Full Stack Developer</p>
          </div>
          <p class="footer-description">
            Creating digital experiences that make a difference. 
            Passionate about clean code and innovative solutions.
          </p>
          <div class="footer-social">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank"
              class="social-icon"
              :title="social.name"
            >
              <component :is="social.icon" />
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/skills">Skills</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="#" @click.prevent>Web Development</a></li>
            <li><a href="#" @click.prevent>Mobile Apps</a></li>
            <li><a href="#" @click.prevent>UI/UX Design</a></li>
            <li><a href="#" @click.prevent>Consulting</a></li>
            <li><a href="#" @click.prevent>Code Review</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Get In Touch</h4>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span>john.doe@example.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} John Doe. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#" @click.prevent>Privacy Policy</a>
            <a href="#" @click.prevent>Terms of Service</a>
            <a href="#" @click.prevent>Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// Mock icons
const LinkedInIcon = { template: '<div class="mock-icon">💼</div>' }
const GitHubIcon = { template: '<div class="mock-icon">🐙</div>' }
const TwitterIcon = { template: '<div class="mock-icon">🐦</div>' }
const InstagramIcon = { template: '<div class="mock-icon">📸</div>' }

export default {
  name: 'Footer',
  components: {
    LinkedInIcon,
    GitHubIcon,
    TwitterIcon,
    InstagramIcon
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/johndoe',
          icon: 'LinkedInIcon'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/johndoe',
          icon: 'GitHubIcon'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/johndoe',
          icon: 'TwitterIcon'
        },
        {
          name: 'Instagram',
          url: 'https://instagram.com/johndoe',
          icon: 'InstagramIcon'
        }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--bg-dark);
  color: white;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
}

.footer-section h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-logo {
  margin-bottom: 1rem;
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  color: #a0aec0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.footer-description {
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-icon:hover {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0aec0;
  font-size: 0.9rem;
}

.contact-icon {
  font-size: 1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-content p {
  color: #a0aec0;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--primary-color);
}

.mock-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}
</style>