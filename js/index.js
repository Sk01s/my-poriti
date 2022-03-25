const progerssSkills = document.querySelectorAll("[data-state]");
const aboutSecetion = document.querySelector("#About");
let aboutObsSection = new IntersectionObserver((el) => {
	if (el[0].isIntersecting) {
		progerssSkills.forEach((el) => {
			let prog = 0;
			const skillProg = setInterval(() => {
				el.style.width = `${prog++}%`;
				if (`${prog}%` == el.dataset.state) {
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
	console.log(status);

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
