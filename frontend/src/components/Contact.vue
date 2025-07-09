<template>
  <div class="contact">
    <section class="contact-hero section">
      <div class="container">
        <h1 class="section-title">Get In Touch</h1>
        <p class="contact-subtitle">Let's discuss your next project or collaboration opportunity</p>
      </div>
    </section>

    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p class="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a project in mind or just want to chat about technology, 
              feel free to reach out!
            </p>
            
            <div class="contact-methods">
              <div class="contact-method" v-for="method in contactMethods" :key="method.label">
                <div class="method-icon">
                  <component :is="method.icon" />
                </div>
                <div class="method-info">
                  <h3>{{ method.label }}</h3>
                  <p>{{ method.value }}</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Follow Me</h3>
              <div class="social-grid">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url" 
                  target="_blank"
                  class="social-link"
                >
                  <component :is="social.icon" />
                  <span>{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-container">
            <form @submit.prevent="submitForm" class="contact-form">
              <h2>Send a Message</h2>
              
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  :class="{ error: errors.name }"
                >
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  :class="{ error: errors.email }"
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  :class="{ error: errors.subject }"
                >
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="6" 
                  required
                  :class="{ error: errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <button type="submit" class="btn submit-btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>

              <div v-if="submitMessage" class="submit-message" :class="submitStatus">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="location section">
      <div class="container">
        <h2 class="section-title">Location</h2>
        <div class="location-content">
          <div class="location-info">
            <h3>Based in San Francisco</h3>
            <p>
              I'm currently located in San Francisco, California, but I work with clients 
              and teams from all around the world. I'm open to both remote work and 
              in-person collaboration opportunities.
            </p>
            <div class="location-details">
              <div class="location-item">
                <strong>Local Time:</strong> {{ currentTime }}
              </div>
              <div class="location-item">
                <strong>Availability:</strong> Monday - Friday, 9 AM - 6 PM PST
              </div>
            </div>
          </div>
          <div class="location-map">
            <div class="map-placeholder">
              <div class="map-icon">🗺️</div>
              <p>Interactive Map</p>
              <small>San Francisco, CA</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Mock icons
const EmailIcon = { template: '<div class="mock-icon">📧</div>' }
const PhoneIcon = { template: '<div class="mock-icon">📞</div>' }
const LocationIcon = { template: '<div class="mock-icon">📍</div>' }
const LinkedInIcon = { template: '<div class="mock-icon">💼</div>' }
const GitHubIcon = { template: '<div class="mock-icon">🐙</div>' }
const TwitterIcon = { template: '<div class="mock-icon">🐦</div>' }
const InstagramIcon = { template: '<div class="mock-icon">📸</div>' }

export default {
  name: 'Contact',
  components: {
    EmailIcon,
    PhoneIcon,
    LocationIcon,
    LinkedInIcon,
    GitHubIcon,
    TwitterIcon,
    InstagramIcon
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      submitMessage: '',
      submitStatus: '',
      currentTime: '',
      contactMethods: [
        {
          label: 'Email',
          value: 'john.doe@example.com',
          icon: 'EmailIcon'
        },
        {
          label: 'Phone',
          value: '+1 (555) 123-4567',
          icon: 'PhoneIcon'
        },
        {
          label: 'Location',
          value: 'San Francisco, CA',
          icon: 'LocationIcon'
        }
      ],
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
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 60000) // Update every minute
  },
  methods: {
    updateTime() {
      const now = new Date()
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
      this.currentTime = now.toLocaleTimeString('en-US', options)
    },
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email'
      }
      
      if (!this.form.subject.trim()) {
        this.errors.subject = 'Subject is required'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters'
      }
      
      return Object.keys(this.errors).length === 0
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    async submitForm() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      this.submitMessage = ''
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Mock successful submission
        this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.'
        this.submitStatus = 'success'
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = ''
        }, 5000)
        
      } catch (error) {
        this.submitMessage = 'Failed to send message. Please try again.'
        this.submitStatus = 'error'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding-top: 80px;
  background: var(--bg-light);
}

.contact-hero {
  background: white;
  text-align: center;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.contact-content {
  background: var(--bg-light);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.contact-description {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.method-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.method-info h3 {
  color: var(--text-dark);
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.method-info p {
  color: var(--text-light);
  margin: 0;
}

.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: white;
  border-radius: var(--border-radius);
  text-decoration: none;
  color: var(--text-dark);
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.contact-form-container {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.contact-form h2 {
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #e53e3e;
}

.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: #c6f6d5;
  color: #22543d;
  border: 1px solid #9ae6b4;
}

.submit-message.error {
  background: #fed7d7;
  color: #742a2a;
  border: 1px solid #feb2b2;
}

.location {
  background: white;
}

.location-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.location-info h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.location-info p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.location-item {
  color: var(--text-light);
}

.location-item strong {
  color: var(--text-dark);
}

.location-map {
  display: flex;
  justify-content: center;
}

.map-placeholder {
  width: 100%;
  height: 300px;
  background: var(--bg-light);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--primary-color);
}

.map-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.map-placeholder p {
  color: var(--text-dark);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.map-placeholder small {
  color: var(--text-light);
}

.mock-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .contact-grid,
  .location-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form-container {
    padding: 1.5rem;
  }
}
</style>