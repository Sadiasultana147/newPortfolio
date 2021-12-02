import React from 'react';
import './Skills.css'
import AOS from 'aos';

import 'aos/dist/aos.css';

const Skills = () => {
    AOS.init();
    return (
        <div className="overflow-hidden body" data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="1500" style={{ backgroundColor: "purple", opacity: "0.9" }} id="skills" >
            <h2 style={{ color: "white" }} className="pt-5" >MY SKILLS</h2>
            <hr style={{ color: "black" }} />
            <div data-aos="fade-down" data-aos-easing="linear"
                data-aos-duration="1500" class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1 pt-5">
                <div className="col">
                    <img className="w-75 h-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://cdn.dribbble.com/users/66221/screenshots/1655604/media/e4330d62b9e74eaf987923c8f9cbf51d.png?compress=1&resize=400x300" alt="" />
                </div>
                <div class="col">
                    <img className="w-75 h-50" src="https://img.favpng.com/11/5/25/responsive-web-design-web-development-bootstrap-front-and-back-ends-png-favpng-bAuB3Vgmw0icXkiVfsW0K8yFJ.jpg" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="http://innovativeteams.net/wp-content/uploads/2017/01/jsLogo.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://banner2.cleanpng.com/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://namespaceit.com/uploads/post/image/1619239547.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://res.cloudinary.com/practicaldev/image/fetch/s--y3_yPeyX--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/cn3fhksq1pjgqjur70p1.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Fn5V-TjG--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ekjlwtc87ktcrzmahn9j.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://img.favpng.com/12/9/4/mongodb-logo-database-nosql-postgresql-png-favpng-mcEPKatsp6vtFjnFRhApvc5Z5.jpg" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgXjuqG9BKVB_j1e3-nrYR4ZbgUrc3e1MWw&usqp=CAU" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://e7.pngegg.com/pngimages/540/810/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://img1.pnghut.com/12/1/17/6VbrqUa5Q1/programming-language-logo-programmer-magenta-brand.jpg" alt="" />
                </div>
                <div className="col">
                    <img className="w-75 h-50" src="https://w7.pngwing.com/pngs/134/190/png-transparent-sql-logo-microsoft-sql-server-mysql-database-logo-others-blue-text-trademark.png" alt="" />
                </div>
            </div>
            <h5 className="skillbg">FAMILIER</h5>
            <div data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1500" class="ms-4 me-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pt-5">
                <div className="col">
                    <img className="w-100 h-75" src="https://tailwindui.com/img/og-image.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-100 h-75" src="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-100 h-75" src="https://i.pinimg.com/474x/ba/42/f8/ba42f806f0b21ae3c072dbc9e7e68ab0.jpg" alt="" />
                </div>
            </div>
            <h5 className="skillbg">TOOLS</h5>
            <div data-aos="fade-down" data-aos-easing="linear"
                data-aos-duration="1500" class="ms-4 me-3 row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 pt-5">
                <div className="col">
                    <img className="w-100 h-75" src="https://www.freecodecamp.org/news/content/images/2021/08/vscode.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-100 h-75" src="https://firebase.google.com/images/social.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-100 h-75" src="https://i2.wp.com/css-tricks.com/wp-content/uploads/2019/05/netlify-logo.png?fit=1200%2C600&ssl=1" alt="" />
                </div>
                <div className="col">
                    <img className="w-100 h-75" src="https://coursework.vschool.io/content/images/2017/12/Image-result-for-heroku-photo-banner.png" alt="" />
                </div>
                <div className="col">
                    <img className="w-100 h-75" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEVqG5r///9XFn9rG5xiAJW9p9BnEpiFTaxeAJP7+P1oFpllDJddAJL59ft/QajApdOqhcSJUq6wjshIEmjHr9jl2u16OKXayuXf0OlnBZni1evq4PGVZbb07vjNuNyier/XxeOdcru6nc9zKqCDR6q1lsuZa7iRX7PRvd92L6Lv5/Swjci+otJxJZ+gdr2ngMKysegoAAAE5UlEQVR4nO2di1biMBRFG8yU0NDBB8pLRRTHgRlm/v/vpjggCE25p7WslebsDxC71zptcnOTRDctIuQmal0QIa1MVkREUBYAZQFQFgBlAVAWAGUBUBYAZQFQFgBlAVAWAGUBUBYAZQFQFgBlAfguKzE6PtuPeS7Lrsb9udbJeX7Nb1n6e6qUmly/GHuOn/NalrlXGwaz0Rni6LMsc6l2pP127XH0V1Zieuozk9dFvXH0Vlain9Qxg5mtMY6+yrLJbY6rdRwfr2qLo6ey9N1Dvqs1y3Uc6/Dlpyx91XG7WjOcxubr4+ilLDMtVrWJ45e/7H2UZZ5Pu1rzrL/4h/2TlZhHmSv1LXhZ8WgsdEVZ9mUpdRW8LD0/8RmkrA/MD7mq0GV1rxFXQctKTB9yFbKsRA8wVwHLshcT0FW4sv4XkClLgnmDVQUry/wt4SpQWd3fZVwFKSvRP0u5ClFWPHIUkCnrCLsoKCBT1idOFpAp6wMzK63KO1lxxUWp7msFV37JsqbdsxVWDeQFZN9lJVpPs8/YQ9uU/QuxHlZy5Y0saxa9zWTuulsuinYlLyD7LMua+71yymBUJoplZs4+yrKzz0OjtEQUd61XDZelvx3+23AUu5d5Tx+GLDSK3cPWq6BkqfRKHsX81quAZCn1Ko2ijeECcuNkqWEsimJh61UwsmRRFBeQT49YvZaVRdGciqKk9eqd2V3TZalhUhxFaevVeGXajZel0reCKCZGWED+ZZI4AFlKPTujKG29mnzPLIQhSw0v8h9C2nrVe+90D0SW6uRGUbdFBeSHzSc1FFm5URS2Xv3czpvCkZV9zQ4exIharzqzj2lAQLIOoihsvRpEu8dvpqyO47X9exdFYevV5X54mykrNY4BwUcU7Uoyc769+/TszZTV6boy1rl/j6KsgPx8sBenobKMe8LXy4IlKiAvjyrTjZUV6bmj7HL7Iiog9/XRlLK5siKbOF5cqeAzmN7nDGIbLCtnR7OYp9zpUZNlZcPOP+Vc/c2feDdbVvbVK1EvHi8cT9xwWZG1cPOCu7TadFnwi2s5d1cKGy8LbE7rFx3REIAs4MVVWIAOQ1ZkR7Ll5scTC/6ByJJt7qIsxvCIohc8MjIN+wXPocMxzkFpLD6SYUuwg1JnnaaIQKc74paPAwKcSMNb53cEV6KxFyz+5ZNTVm471iRYVj5esHBtceaCBZfCEA4WWTUXWQvg8j0AG0MA2HIEwGY2gJJtkrIT6gJrk2QD7j5s7QbgpgEAbkcB4EYnAG6hA+DmTABu+wXghnIAHlUAwEMwAHi8CgIP7oHgkVAQPGwMg8fYQfCAxHMS0tGb1eGhrgg8LhiBB1Ej8IhzCB6ej8BrGRB44QcCr5JB4CVFCLz+CoEXq0Hwyj4EXgaJwGtGEXiBLQKvRkbgpdsQvM4dQdLElT5eVVgrycdLWaeLzcNpbAp2o5fET1nFTVzL14Wx1ZaV8vFUVmQTR7E5i5+uuADnxFdZjiauwcwWHQZREW9l5RwSMVnHr86f9FdW9lHcb+JK++3a4rfFZ1l7TVyD2ajG+G3xWtam2Dy5fqk3flv8lhXZ1bg/N3XHb4vnsrLX/Bnit8V3WWeFsgAoC4CyACgLgLIAKAuAsgAoC4CyACgLgLIAKAuAsgAoC4CyACgL4F0WEdKKblpEyM0/J5pz45X1IjsAAAAASUVORK5CYII=" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;