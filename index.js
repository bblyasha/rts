window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('.main, .about-section, .skills-section, .works, .reviews');
    let navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(function(section) {
        let heading = section.querySelector('h2');
        let id = section.id;


        // Проверяем, если верхняя граница заголовка h2 секции видна на экране
        if (heading.getBoundingClientRect().top <= window.innerHeight * 0.5 && heading.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
            // Добавляем активный класс к соответствующей ссылке в навигационном меню
            navLinks.forEach(function(link) {
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});


function isElementInViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}