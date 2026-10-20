document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.getElementById('typewriterText');
  
  const typewriterLines = [
    "Hi, I am Gaurav Saha",
    "💻 Freelance Full Stack Developer",
    "🤖 Building AI-Powered Websites",
    "⚡ Turning Ideas Into Digital Products",
    "📩 DM for Paid Projects & Collaborations"
  ];

  let currentLineIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeWriterLoop() {
    if (!typewriterElement) return;

    const currentLine = typewriterLines[currentLineIndex];

    if (!isDeleting) {
      typewriterElement.textContent = currentLine.substring(0, currentCharIndex + 1);
      currentCharIndex++;

      if (currentCharIndex === currentLine.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else {
        typingSpeed = 70 + Math.random() * 40;
      }
    } else {
      typewriterElement.textContent = currentLine.substring(0, currentCharIndex - 1);
      currentCharIndex--;

      if (currentCharIndex === 0) {
        isDeleting = false;
        currentLineIndex = (currentLineIndex + 1) % typewriterLines.length;
        typingSpeed = 450; 
      } else {
        typingSpeed = 35; 
      }
    }

    setTimeout(typeWriterLoop, typingSpeed);
  }

  typeWriterLoop();

  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120; 

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  const fallbackImages = document.querySelectorAll('.fallback-image');

  fallbackImages.forEach(img => {
    const src = img.getAttribute('src');

    if (!src || src.trim() === '') {
      img.style.display = 'none';
      return;
    }

    img.addEventListener('load', () => {
      if (img.naturalWidth > 0) {
        img.style.display = 'block';
        const placeholder = img.parentElement.querySelector('.img-fallback-placeholder');
        if (placeholder) {
          placeholder.style.display = 'none';
        }
      }
    });

    img.addEventListener('error', () => {
      img.style.display = 'none';
      img.classList.add('img-error');
    });
  });

  const contactForm = document.getElementById('contactForm');
  const btnSendEmail = document.getElementById('btnSendEmail');
  const btnSendWhatsApp = document.getElementById('btnSendWhatsApp');
  const statusMsg = document.getElementById('formStatusMsg');

  const inputName = document.getElementById('senderName');
  const inputEmail = document.getElementById('senderEmail');
  const selectProjectType = document.getElementById('projectType');
  const inputMessage = document.getElementById('senderMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearValidation() {
    [inputName, inputEmail, inputMessage].forEach(input => {
      input.classList.remove('input-error');
    });
    [nameError, emailError, messageError].forEach(err => {
      err.classList.remove('visible');
    });
    statusMsg.className = 'form-status-msg';
    statusMsg.textContent = '';
  }

  function validateForm() {
    let isValid = true;
    clearValidation();

    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const message = inputMessage.value.trim();

    if (!name) {
      inputName.classList.add('input-error');
      nameError.classList.add('visible');
      isValid = false;
    }

    if (!email || !isValidEmail(email)) {
      inputEmail.classList.add('input-error');
      emailError.classList.add('visible');
      isValid = false;
    }

    if (!message) {
      inputMessage.classList.add('input-error');
      messageError.classList.add('visible');
      isValid = false;
    }

    return isValid;
  }

  if (btnSendEmail) {
    btnSendEmail.addEventListener('click', () => {
      if (!validateForm()) return;

      const name = inputName.value.trim();
      const email = inputEmail.value.trim();
      const projectType = selectProjectType.value;
      const message = inputMessage.value.trim();

      const subject = encodeURIComponent(`[Website Project Inquiry] ${projectType} - from ${name}`);
      const body = encodeURIComponent(
        `Hi Gaurav,\n\nI would like to discuss a project with you.\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Project Type: ${projectType}\n\n` +
        `Message / Requirements:\n${message}\n\n` +
        `Looking forward to hearing from you!`
      );

      window.location.href = `mailto:gauravsaha362@gmail.com?subject=${subject}&body=${body}`;
      statusMsg.className = 'form-status-msg status-success';
      statusMsg.textContent = `✨ Thank you, ${name}! Your email draft has been generated. Looking forward to discussing your project!`;

      contactForm.reset();
    });
  }

  if (btnSendWhatsApp) {
    btnSendWhatsApp.addEventListener('click', () => {
      if (!validateForm()) return;

      const name = inputName.value.trim();
      const email = inputEmail.value.trim();
      const projectType = selectProjectType.value;
      const message = inputMessage.value.trim();

      const text = encodeURIComponent(
        `*Hi Gaurav! New Project Inquiry*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Project Type:* ${projectType}\n\n` +
        `*Message:* ${message}`
      );

      const whatsappUrl = `https://wa.me/918839014534?text=${text}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      statusMsg.className = 'form-status-msg status-success';
      statusMsg.textContent = `💬 Opening WhatsApp for you, ${name}! Chat with me directly to get started right away.`;

      contactForm.reset();
    });
  }

  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
