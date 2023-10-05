const accordions = document.querySelectorAll(".accordion");
accordions?.forEach((item) =>
  item.addEventListener("click", handleActiveAccordion)
);
function handleActiveAccordion() {
  this.classList.toggle("is-active");
  const isActive = this.classList.contains("is-active");
  const innerContent = this.querySelector(".accordion-inner");
  this.querySelector(".accordion-content")?.setAttribute(
    "style",
    `height: ${isActive ? innerContent.clientHeight : 0}px;`
  );
}
