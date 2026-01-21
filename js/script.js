        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const megaMenu = document.getElementById('megaMenu');
        const serviceBtn = document.getElementById('serviceBtn');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Mega Menu Toggle
        let megaMenuTimeout;
        
        serviceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearTimeout(megaMenuTimeout);
            megaMenu.classList.toggle('show');
        });

        serviceBtn.addEventListener('mouseenter', () => {
            clearTimeout(megaMenuTimeout);
            megaMenu.classList.add('show');
        });

        serviceBtn.parentElement.addEventListener('mouseleave', () => {
            megaMenuTimeout = setTimeout(() => {
                megaMenu.classList.remove('show');
            }, 300);
        });

        megaMenu.addEventListener('mouseenter', () => {
            clearTimeout(megaMenuTimeout);
        });

        megaMenu.addEventListener('mouseleave', () => {
            megaMenuTimeout = setTimeout(() => {
                megaMenu.classList.remove('show');
            }, 300);
        });

        // Close mega menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!serviceBtn.contains(e.target) && !megaMenu.contains(e.target)) {
                megaMenu.classList.remove('show');
            }
        });

        // Category Services Data
        const categoryServices = {
            app: {
                title: 'App Development Services',
                services: [
                    { icon: 'fab fa-android', class: 'android', name: 'Android Development' },
                    { icon: 'fab fa-android', class: 'android', name: 'Android Development' },
                    { icon: 'fab fa-android', class: 'android', name: 'Android Development' },
                    { icon: 'fab fa-apple', class: 'ios', name: 'IOS Development' },
                    { icon: 'fab fa-apple', class: 'ios', name: 'IOS Development' },
                    { icon: 'fab fa-apple', class: 'ios', name: 'IOS Development' },
                    { icon: 'fas fa-bolt', class: 'ionic', name: 'Ionic Development' },
                    { icon: 'fas fa-bolt', class: 'ionic', name: 'Ionic Development' },
                    { icon: 'fas fa-bolt', class: 'ionic', name: 'Ionic Development' },
                    { icon: 'fab fa-php', class: 'php', name: 'PHP Development' },
                    { icon: 'fab fa-php', class: 'php', name: 'PHP Development' },
                    { icon: 'fab fa-php', class: 'php', name: 'PHP Development' },
                    { icon: 'fas fa-palette', class: 'uiux', name: 'UI/UX Design' },
                    { icon: 'fas fa-palette', class: 'uiux', name: 'UI/UX Design' },
                    { icon: 'fas fa-code', class: 'kotlin', name: 'Kotlin App' },
                    { icon: 'fas fa-code', class: 'kotlin', name: 'Kotlin App' }
                ]
            },
            web: {
                title: 'Web Development Services',
                services: [
                    { icon: 'fab fa-react', class: 'android', name: 'React Development' },
                    { icon: 'fab fa-angular', class: 'ios', name: 'Angular Development' },
                    { icon: 'fab fa-vuejs', class: 'ionic', name: 'Vue.js Development' },
                    { icon: 'fab fa-node-js', class: 'php', name: 'Node.js Development' },
                    { icon: 'fab fa-wordpress', class: 'uiux', name: 'WordPress Development' },
                    { icon: 'fas fa-shopping-cart', class: 'kotlin', name: 'E-commerce Solutions' }
                ]
            },
            marketing: {
                title: 'Digital Marketing Services',
                services: [
                    { icon: 'fas fa-search', class: 'android', name: 'SEO Services' },
                    { icon: 'fas fa-bullhorn', class: 'ios', name: 'Social Media Marketing' },
                    { icon: 'fas fa-envelope', class: 'ionic', name: 'Email Marketing' },
                    { icon: 'fas fa-ad', class: 'php', name: 'PPC Advertising' },
                    { icon: 'fas fa-chart-line', class: 'uiux', name: 'Analytics & Reporting' },
                    { icon: 'fas fa-pen', class: 'kotlin', name: 'Content Marketing' }
                ]
            },
            software: {
                title: 'Software Development Services',
                services: [
                    { icon: 'fab fa-python', class: 'android', name: 'Python Development' },
                    { icon: 'fab fa-java', class: 'ios', name: 'Java Development' },
                    { icon: 'fas fa-database', class: 'ionic', name: 'Database Solutions' },
                    { icon: 'fas fa-cloud', class: 'php', name: 'Cloud Solutions' },
                    { icon: 'fas fa-cogs', class: 'uiux', name: 'API Development' },
                    { icon: 'fas fa-lock', class: 'kotlin', name: 'Security Solutions' }
                ]
            }
        };

        // Sidebar Category Switch
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const categoryTitle = document.getElementById('categoryTitle');
        const servicesGrid = document.getElementById('servicesGrid');

        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const category = item.getAttribute('data-category');
                const data = categoryServices[category];

                // Fade out
                servicesGrid.style.opacity = '0';
                servicesGrid.style.transform = 'translateY(10px)';

                setTimeout(() => {
                    categoryTitle.textContent = data.title;
                    
                    servicesGrid.innerHTML = data.services.map(service => `
                        <div class="service-card">
                            <div class="service-icon ${service.class}">
                                <i class="${service.icon}"></i>
                            </div>
                            <div class="service-info">
                                <h4>${service.name}</h4>
                            </div>
                        </div>
                    `).join('');

                    // Fade in
                    setTimeout(() => {
                        servicesGrid.style.opacity = '1';
                        servicesGrid.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);
            });
        });

        // Add transition styles to services grid
        servicesGrid.style.transition = 'all 0.3s ease';

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    navLinks.classList.remove('active');
                    megaMenu.classList.remove('show');
                }
            });
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        const observerOptions = {
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + '+';
                        }
                    };

                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => counterObserver.observe(counter));

        // Industry Selection
        const industryItems = document.querySelectorAll('.industry-item');
        const industryTitle = document.getElementById('industryTitle');
        const industryDesc = document.getElementById('industryDesc');
        const industryImg = document.getElementById('industryImg');

        const industryData = {
            social: {
                title: 'Social Media & Entertainment',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias cumque et quos iste corporis, atque fugit maxime, corrupti eos iure illum, tempora tempore voluptatum ipsam asperiores fugiat unde. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis tenetur consectetur voluptatibus illo incidunt repellendus minima, aspernatur, cumque in delectus praesentium! Perspiciatis aliquam et fugiat repellat numquam fuga animi!',
                img: '/images/mockup1.jpg'
            },
            food: {
                title: 'Food & Restaurant',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias cumque et quos iste corporis, atque fugit maxime, corrupti eos iure illum, tempora tempore voluptatum ipsam asperiores fugiat unde. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis tenetur consectetur voluptatibus illo incidunt repellendus minima, aspernatur, cumque in delectus praesentium! Perspiciatis aliquam et fugiat repellat numquam fuga animi!',
                img: '/images/mockup2.avif'
            },
            ecommerce: {
                title: 'Ecommerce',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias cumque et quos iste corporis, atque fugit maxime, corrupti eos iure illum, tempora tempore voluptatum ipsam asperiores fugiat unde. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis tenetur consectetur voluptatibus illo incidunt repellendus minima, aspernatur, cumque in delectus praesentium! Perspiciatis aliquam et fugiat repellat numquam fuga animi!',
                img: '/images/mockup1.jpg'
            },
            healthcare: {
                title: 'Healthcare',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias cumque et quos iste corporis, atque fugit maxime, corrupti eos iure illum, tempora tempore voluptatum ipsam asperiores fugiat unde. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis tenetur consectetur voluptatibus illo incidunt repellendus minima, aspernatur, cumque in delectus praesentium! Perspiciatis aliquam et fugiat repellat numquam fuga animi!',
                img: '/images/mockup2.avif'
            },
            education: {
                title: 'Education',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias cumque et quos iste corporis, atque fugit maxime, corrupti eos iure illum, tempora tempore voluptatum ipsam asperiores fugiat unde. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis tenetur consectetur voluptatibus illo incidunt repellendus minima, aspernatur, cumque in delectus praesentium! Perspiciatis aliquam et fugiat repellat numquam fuga animi!',
                img: '/images/mockup1.jpg'
            },
            retail: {
                title: 'Retail',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias cumque et quos iste corporis, atque fugit maxime, corrupti eos iure illum, tempora tempore voluptatum ipsam asperiores fugiat unde. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis tenetur consectetur voluptatibus illo incidunt repellendus minima, aspernatur, cumque in delectus praesentium! Perspiciatis aliquam et fugiat repellat numquam fuga animi!',
                img: '/images/mockup2.avif'
            }
        };

        industryItems.forEach(item => {
            item.addEventListener('click', () => {
                industryItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                const industry = item.getAttribute('data-industry');
                const data = industryData[industry];
                
                industryTitle.style.opacity = '0';
                industryDesc.style.opacity = '0';
                industryImg.style.opacity = '0';
                
                setTimeout(() => {
                    industryTitle.textContent = data.title;
                    industryDesc.textContent = data.desc;
                    industryImg.src = data.img;
                    
                    industryTitle.style.opacity = '1';
                    industryDesc.style.opacity = '1';
                    industryImg.style.opacity = '1';
                }, 300);
            });
        });

        // Hexagon Service Selection
        const hexagons = document.querySelectorAll('.hexagon');
        const serviceDetails = document.getElementById('serviceDetails');

        const serviceData = {
            development: {
                title: 'Development Services',
                desc: 'Full-stack development services using cutting-edge technologies. We build scalable, secure, and high-performance applications tailored to your business needs. From web to mobile, our expert developers deliver excellence.'
            },
            design: {
                title: 'UI/UX Design',
                desc: 'Creating intuitive and engaging user experiences through thoughtful design. Our designers craft beautiful interfaces that not only look great but also provide seamless user journeys and drive conversions.'
            },
            consulting: {
                title: 'IT Consulting',
                desc: 'Strategic technology consulting to help you make informed decisions. We analyze your business needs, recommend optimal solutions, and guide your digital transformation journey.'
            },
            cloud: {
                title: 'Cloud Services',
                desc: 'Comprehensive cloud solutions including migration, deployment, and management. We leverage AWS, Azure, and Google Cloud to build scalable and cost-effective infrastructure for your applications.'
            },
            testing: {
                title: 'QA & Testing',
                desc: 'Rigorous quality assurance and testing services to ensure your applications are bug-free and perform optimally. We use automated and manual testing to deliver reliable software.'
            },
            support: {
                title: 'Support & Maintenance',
                desc: '24/7 support and maintenance services to keep your applications running smoothly. We provide regular updates, security patches, and technical support to ensure optimal performance.'
            }
        };

        hexagons.forEach(hex => {
            hex.addEventListener('click', () => {
                hexagons.forEach(h => h.classList.remove('active'));
                hex.classList.add('active');
                
                const service = hex.getAttribute('data-service');
                const data = serviceData[service];
                
                serviceDetails.classList.remove('show');
                
                setTimeout(() => {
                    serviceDetails.innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.desc}</p>
                    `;
                    serviceDetails.classList.add('show');
                }, 300);
            });
        });

        // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const isActive = question.classList.contains('active');
                
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('show');
                });
                
                if (!isActive) {
                    question.classList.add('active');
                    question.nextElementSibling.classList.add('show');
                }
            });
        });

        // Contact Form
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });

        // Scroll Animation for Elements
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.about-image, .about-content, .portfolio-item, .testimonial-card');
            
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100;
                
                if (isVisible) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();

        // Navbar Background on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(20, 20, 40, 1)';
            } else {
                nav.style.background = 'rgba(20, 20, 40, 0.95)';
            }
        });