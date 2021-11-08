// FORMSPREE DEFAULT CODE TO SUBMIT FORM THROUGH THEIR SERVER

let form = document.getElementById("form-collector");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thank you for reaching out. Your request was sent successfully.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form."
  });
}
form.addEventListener("submit", handleSubmit)


// SCROLL BUTTON LOGIC

const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', (e) => {
	const y = 0;
	window.scrollTo({ top: y, behavior: 'smooth' });
});

const scrollBtnHide = document.getElementById('scrollBtnHide');
const scrollBtnShow = document.getElementById('scrollBtnShow');

const returnCallback = (elem, methodType, classAsString) => {
	return function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (methodType === 'add') {
					elem.classList.add(classAsString);
				} else {
					elem.classList.remove(classAsString);
				}
			}
		});
	};
};

const createObserverFunction = (elem, callback, options) => {
	let observer = new IntersectionObserver(callback, options);
	observer.observe(elem);
	return observer;
};
createObserverFunction(
	scrollBtnShow,
	returnCallback(scrollBtn, 'add', 'showBtn')
);
createObserverFunction(
	scrollBtnHide,
	returnCallback(scrollBtn, 'remove', 'showBtn')
);


// SMOOTH SCROLL NAVIGATION

const navAboutBtn = document.getElementById('nav-about-me');
const navWorkBtn = document.getElementById('nav-work');
const navContactBtn = document.getElementById('nav-contact');

const scrollToElementById = (e) => {
	const id = e.target.id.substring(4);
	const target = document.getElementById(id);
	const y = target.getBoundingClientRect().top;
	window.scrollTo({ top: y, behavior: 'smooth' });
};

navAboutBtn.addEventListener('click', (e) => scrollToElementById(e));
navWorkBtn.addEventListener('click', (e) => scrollToElementById(e));
navContactBtn.addEventListener('click', (e) => scrollToElementById(e));