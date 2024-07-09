const btnSkill = document.querySelector("#btn-skills");
const btnInfo = document.querySelector("#btn-info-sobre-mi");
let itemSkills = document.querySelectorAll('.relleno');

// Agregar evento de clic al botón de habilidades
btnSkill.addEventListener('click', function() {
    document.querySelector('#info-sobre-mi').style.display = 'none';
    document.querySelector('#info-skills').style.display = 'block';

    btnInfo.classList.remove('selected');
    btnSkill.classList.add("selected");

    // Animaciones para cada habilidad
    itemSkills[0].style.animation = 'animHtmlycss 2s forwards';
    itemSkills[1].style.animation = 'animKotlin 2s forwards';
    itemSkills[2].style.animation = 'animJava 2s forwards';
    itemSkills[3].style.animation = 'animPython 2s forwards';
    itemSkills[4].style.animation = 'animMySQL 2s forwards';
    itemSkills[5].style.animation = 'animCsynet 2s forwards';
});

// Agregar evento de clic al botón de información sobre mí
btnInfo.addEventListener('click', function() {
    document.querySelector('#info-sobre-mi').style.display = 'block';
    document.querySelector('#info-skills').style.display = 'none';

    btnInfo.classList.add('selected');
    btnSkill.classList.remove("selected");
});

// Agregar evento de clic a los enlaces del menú de categorías
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Obtener la categoría seleccionada
        const categoria = this.getAttribute('data-categoria');

        // Ocultar todos los proyectos
        document.querySelectorAll('.portfolio-item').forEach(proyecto => {
            proyecto.style.display = 'none';
        });

        // Mostrar proyectos de la categoría seleccionada
        document.querySelectorAll(`.portfolio-item.${categoria}`).forEach(proyecto => {
            proyecto.style.display = 'block';
        });
    });
    /*Hacer dos archivos .json ej: es.json para ue desde el js llame a ambos json, ya ue es una mejor practica en el código
    y lo hace mas limpio, ej: en el codigo de JS se puede hacer ue llame al es.json en donde Español: "es"*/ 


    
});document.addEventListener("DOMContentLoaded", function() {
    const langSwitch = document.querySelectorAll(".lang-switch img");
    const textsToTranslate = {
        "en": {
            "Inicio": "Home",
            "Sobre Mí": "About Me",
            "Trabajos": "Work",
            "Curriculum": "Resume",
            "Contacto": "Contact",
            "Hola, soy Brian":"Hi, I'm Brian",
            "Hola a todos! Soy":"Hi everyone! I'm",
            "Hola a todos! Soy Brian":"Hi everyone! I'm Brian",
            "Desarrollador de aplicaciones multiplataformas.":"Cross-platform application developer.",
            "Desarrollador de aplicaciones multiplataforma.":"Cross-platform application developer.",
            "Sistema Gestion Inventario":"Inventory Management System",
            "Visitar Proyecto":"See Project",
            "Hola, soy Brian Desarrollador de aplicaciones multiplataformas." : "Hi, I'm Brian Cross-platform application developer.",
            "Desarrollador de aplicaciones multiplataformas.": "Multiplatform applications developer.",
            "MIS TRABAJOS": "MY WORK",
            "¿QUIERES VER MI CURRICULUM?": "WANT TO SEE MY RESUME?",
            "Descarga mi curriculum dandole al botón!": "Download my resume by clicking the button!",
            "CONTACTAME AHORA": "CONTACT ME NOW",
            "Mi Ubicación": "My Location",
            "Número Teléfono": "Phone Number",
            "Dirección Email": "Email Address",
            "Nombre*": "Name*",
            "Correo*": "Email*",
            "Mensaje": "Message",
            "Enviar Mensaje": "Send Message",
            "Hola a todos! Soy": "Hi everyone! I'm",
            "Me considero una persona altamente flexible y altamente adaptable, capaz de desenvolverse con agilidad y eficacia en una amplia variedad de entornos y desafíos laborales. Mi innata sociabilidad y mis sólidas habilidades de comunicación no solo refuerzan esta capacidad de adaptación, sino que también me permiten sobresalir en dinámicos entornos de trabajo colaborativo.": "I consider myself a highly flexible and highly adaptable person, capable of functioning with agility and effectiveness in a wide variety of work environments and challenges. My innate sociability and strong communication skills not only reinforce this ability to adapt, but also allow me to excel in dynamic collaborative work environments.",
            "Estas cualidades me facultaron para establecer relaciones sólidas, fomentando una efectiva colaboración con compañeros de diversas procedencias y personalidades. De este modo, contribuyo de manera significativa al éxito del equipo y promuevo un ambiente de trabajo armonioso en busca de conseguir los objetivos de la empresa.": "These qualities enabled me to establish strong relationships, fostering effective collaboration with colleagues from diverse backgrounds and personalities. In this way, I contribute significantly to team success and promote a harmonious working environment aimed at achieving company goals.",
            "Resumen de mis Skills": "Summary of my Skills"
        },
        "es": {
            "Home": "Inicio",
            "About Me": "Sobre Mí",
            "Work": "Trabajos",
            "Resume": "Curriculum",
            "Contact": "Contacto",
            "Hi, I'm Brian":"Hola, soy Brian",
            "Hi everyone! I'm":"Hola a todos! Soy",
            "Hi everyone! I'm Brian":"Hola a todos! Soy Brian",
            "Cross-platform application developer.":"Desarrollador de aplicaciones multiplataformas.",
            "Cross-platform application developer.":"Desarrollador de aplicaciones multiplataforma.",
            "Inventory Management System":"Sistema Gestion Inventario",
            "See Project":"Visitar Projecto",
            "Hi, I'm Brian Cross-platform application developer.": "Hola, soy Brian Desarrollador de aplicaciones multiplataformas.",
            "Multiplatform applications developer.": "Desarrollador de aplicaciones multiplataformas.",
            "MY WORK": "MIS TRABAJOS",
            "WANT TO SEE MY RESUME?": "¿QUIERES VER MI CURRICULUM?",
            "Download my resume by clicking the button!": "Descarga mi curriculum dandole al botón!",
            "CONTACT ME NOW": "CONTACTAME AHORA",
            "My Location": "Mi Ubicación",
            "Phone Number": "Número Teléfono",
            "Email Address": "Dirección Email",
            "Name*": "Nombre*",
            "Email*": "Correo*",
            "Message": "Mensaje",
            "Send Message": "Enviar Mensaje",
            "Brian Pestano": "Brian Pestano",
            "Hi everyone! I'm": "Hola a todos! Soy",
            "I consider myself a highly flexible and highly adaptable person, capable of functioning with agility and effectiveness in a wide variety of work environments and challenges. My innate sociability and strong communication skills not only reinforce this ability to adapt, but also allow me to excel in dynamic collaborative work environments.": "Me considero una persona altamente flexible y altamente adaptable, capaz de desenvolverse con agilidad y eficacia en una amplia variedad de entornos y desafíos laborales. Mi innata sociabilidad y mis sólidas habilidades de comunicación no solo refuerzan esta capacidad de adaptación, sino que también me permiten sobresalir en dinámicos entornos de trabajo colaborativo.",
            "These qualities enabled me to establish strong relationships, fostering effective collaboration with colleagues from diverse backgrounds and personalities. In this way, I contribute significantly to team success and promote a harmonious working environment aimed at achieving company goals.": "Estas cualidades me facultaron para establecer relaciones sólidas, fomentando una efectiva colaboración con compañeros de diversas procedencias y personalidades. De este modo, contribuyo de manera significativa al éxito del equipo y promuevo un ambiente de trabajo armonioso en busca de conseguir los objetivos de la empresa.",
            "Summary of my Skills": "Resumen de mis Skills"
        }
    };

    langSwitch.forEach(flag => {
        flag.addEventListener("click", function() {
            const lang = this.id;
            document.documentElement.lang = lang;
            translateTexts(lang);
        });
    });

    function translateTexts(lang) {
        // Traducir textos de los enlaces de navegación
        document.querySelectorAll("nav ul li a").forEach(el => {
            el.textContent = textsToTranslate[lang][el.textContent.trim()] || el.textContent;
        });

        // Traducir frases específicas
        const fraseElement = document.querySelector(".frase");
        fraseElement.innerHTML = translateInnerHTML(fraseElement.innerHTML, lang);

        // Traducir opciones de información
        document.querySelectorAll(".info-opcion h2, .info-opcion p").forEach(el => {
            el.textContent = textsToTranslate[lang][el.textContent.trim()] || el.textContent;
        });

        // Traducir títulos de secciones
        document.querySelectorAll(".titulo-seccion").forEach(el => {
            el.textContent = textsToTranslate[lang][el.textContent.trim()] || el.textContent;
        });

        // Traducir textos de la sección "curriculum"
        document.querySelectorAll(".col h3, .col p").forEach(el => {
            el.textContent = textsToTranslate[lang][el.textContent.trim()] || el.textContent;
        });

        // Traducir placeholders del formulario
        document.querySelectorAll(".formulario input").forEach(el => {
            el.setAttribute("placeholder", textsToTranslate[lang][el.getAttribute("placeholder").trim()] || el.getAttribute("placeholder"));
        });
        document.querySelector(".formulario textarea").setAttribute("placeholder", textsToTranslate[lang][document.querySelector(".formulario textarea").getAttribute("placeholder").trim()] || document.querySelector(".formulario textarea").getAttribute("placeholder"));

        // Traducir botón de envío del formulario
        document.querySelector(".formulario button").textContent = textsToTranslate[lang][document.querySelector(".formulario button").textContent.trim()] || document.querySelector(".formulario button").textContent;

        // Traducir el nombre en el pie de página
        document.querySelector("footer h2").textContent = textsToTranslate[lang][document.querySelector("footer h2").textContent.trim()] || document.querySelector("footer h2").textContent;
    }

    function translateInnerHTML(htmlContent, lang) {
        return Object.keys(textsToTranslate[lang]).reduce((translatedHtml, key) => {
            const regex = new RegExp(key, 'g');
            return translatedHtml.replace(regex, textsToTranslate[lang][key]);
        }, htmlContent);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const langSwitch = document.querySelectorAll('.lang-switch img');

    langSwitch.forEach(img => {
        img.addEventListener('click', () => {
            const lang = img.id;
            loadTranslations(lang);
        });
    });

    function loadTranslations(lang) {
        fetch(`${lang}.json`)
            .then(response => response.json())
            .then(translations => {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (translations[key]) {
                        element.textContent = translations[key];
                    }
                });
            })
            .catch(error => console.error('Error loading translations:', error));
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const btnSkill = document.querySelector("#btn-skills");
    const btnInfo = document.querySelector("#btn-info-sobre-mi");
    const itemSkills = document.querySelectorAll('.relleno');
    const langSwitch = document.querySelectorAll('.lang-switch img');

    // Event listeners
    btnSkill.addEventListener('click', showSkills);
    btnInfo.addEventListener('click', showInfo);
    langSwitch.forEach(img => img.addEventListener('click', () => loadTranslations(img.id)));

    // EmailJS initialization
    emailjs.init("ryb433R7XDZfK1U8e");

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        sendEmail(this);
    });

    // Function to show skills section
    function showSkills() {
        document.querySelector('#info-sobre-mi').style.display = 'none';
        document.querySelector('#info-skills').style.display = 'block';
        btnInfo.classList.remove('selected');
        btnSkill.classList.add("selected");
        setSkillAnimations();
    }

    // Function to show info section
    function showInfo() {
        document.querySelector('#info-sobre-mi').style.display = 'block';
        document.querySelector('#info-skills').style.display = 'none';
        btnInfo.classList.add('selected');
        btnSkill.classList.remove("selected");
    }

    // Function to set animations for skill items
    function setSkillAnimations() {
        const animations = ['animHtmlycss', 'animKotlin', 'animJava', 'animPython', 'animMySQL', 'animCsynet'];
        itemSkills.forEach((item, index) => {
            item.style.animation = `${animations[index]} 2s forwards`;
        });
    }

    // Function to load translations from JSON files
    function loadTranslations(lang) {
        fetch(`${lang}.json`)
            .then(response => response.json())
            .then(translations => {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (translations[key]) {
                        element.textContent = translations[key];
                    }
                });
            })
            .catch(error => console.error('Error loading translations:', error));
    }

    // Function to send email using EmailJS
    function sendEmail(form) {
        const from_name = form.from_name.value.trim();
        const from_email = form.from_email.value.trim();
        const message = form.message.value.trim();

        if (from_name === "" || from_email === "" || message === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        emailjs.sendForm('service_wnc05sm', 'template_87ft4ny', form)
            .then(response => {
                alert('Mensaje enviado con éxito!', response.status, response.text);
            })
            .catch(error => {
                alert('Error al enviar el mensaje.', error);
            });

        form.reset();
    }

    // Event listeners for portfolio items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function () {
            const categoria = this.getAttribute('data-categoria');
            document.querySelectorAll('.portfolio-item').forEach(proyecto => {
                proyecto.style.display = 'none';
            });
            document.querySelectorAll(`.portfolio-item.${categoria}`).forEach(proyecto => {
                proyecto.style.display = 'block';
            });
        });
    });
});
