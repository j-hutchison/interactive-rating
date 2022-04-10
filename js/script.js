const inputForm = document.querySelector(".section-feedback");
const thankYouForm = document.querySelector(".section-thankyou");

const feedbackItems = document.querySelectorAll(".feedback-input");
const feedbackList = document.querySelector(".feedback-list");
const submitBtn = document.querySelector(".btn-submit");

const userSelectionOutput = document.querySelector(".output");

// add listener to parent list (bubbling events)
feedbackList.addEventListener("click", function (e) {
	// remove the active class from all list elements
	feedbackItems.forEach((el) => el.classList.remove("active-selection"));

	// add the active class to the users selected element
	if (e.target.classList.contains("feedback-input")) {
		e.target.classList.add("active-selection");
	}
});

submitBtn.addEventListener("click", function (e) {
	e.preventDefault();
	const feedbackSelection = document.querySelector(".active-selection");

	// hide input form
	inputForm.classList.add("hidden");

	// overwrite the span with the users selection
	userSelectionOutput.innerHTML = `You selected ${feedbackSelection.value} out of 5`;

	// show thank you form
	thankYouForm.classList.remove("hidden");
});
