const progerssSkills = document.querySelectorAll("[data-state]");

const aboutSecetion = document.querySelector("#About");

let aboutObsSection = new IntersectionObserver((el) => {
  if (el[0].isIntersecting) {
    progerssSkills.forEach((el) => {
      let progress = 0;

      const skillProg = setInterval(() => {
        //Every .2 seconds is going to add one perscent to the width of skill bar
        el.style.width = `${progress++}%`;
        //if the  number is equal to the number that in element (atterbute)
        if (`${progress}%` == el.dataset.state) {
          // stop the timer fomr contineu
          clearInterval(skillProg);
        }
      }, 200 / el.dataset.state);
    }, {});
  }
});

aboutObsSection.observe(aboutSecetion);

// onScrool animation
const animationParentElem = document.querySelector("[data-onscroll-par]");
const animationElem = document.querySelectorAll("[data-onscroll]");
const onscrollAnimationObs = new IntersectionObserver(
  (e) => {
    [...e[0].target.children[1].children].forEach((el) => {
      // when the parent element is not visible is going to  add the class
      if (!e[0].isIntersecting) {
        el.classList.add(el.dataset.onscroll);
      }
      if (e[0].isIntersecting) {
        el.classList.remove(el.dataset.onscroll);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
onscrollAnimationObs.observe(animationParentElem);
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.querySelector("[data-form]");
  var status = document.querySelector("[data-messege-form]");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
//  fuction to correct the #hash in the link when wright in input
function removeHash() {
  location.hash = "#Hire-me";
}
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focusin", removeHash);
});

//fetch me projects

const projectsContainer = document.querySelector(".Projects section");

async function fetchingProject() {
  const response = await fetch("https://api.github.com/users/Sk01s/repos");
  const responseText = await response.json();
  [...responseText].map((project) => {
    if (project.id === 472051825) return;
    createCardProject(project);
  });
}
function createCardProject({ name, description, html_url: repoLink }) {
  const viewUrl = `https://sk01s.github.io/${name}`;
  name = name.replace("-", " ");
  projectsContainer.innerHTML += `<div
      data-name="FrontEnd"
      data-onscroll="left-onscorll-off-ani"
      class="card"
    >
      <div>
        <h2 class="flex ju-ce al-ce">${name}</h2>
        <p class="flex ju-ce al-ce">
         ${description}
        </p>
        <div class="flex">
          <a
          href=${repoLink}
          target="_blank"
          class="cl-black hover-button"
          >
          Read code
          </a>
          <a
          href=${viewUrl}
          target="_blank"
          class="cl-black hover-button"
          >
          Visit
          </a>
        </div>
      </div>
    </div>`;
}
fetchingProject();
