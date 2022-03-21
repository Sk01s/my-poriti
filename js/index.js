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
const animationParentElem = document.querySelectorAll("[data-onscroll-par]");
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
onscrollAnimationObs.observe(animationParentElem[0]);
onscrollAnimationObs.observe(animationParentElem[1]);
