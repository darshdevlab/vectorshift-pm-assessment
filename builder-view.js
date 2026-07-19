const builderSections = {
  builder: {
    link: "./builder-flow.html"
  },
  userflow: {
    link: "./user-web-journey.html"
  }
};

function flowFrameMarkup(data, title) {
  return `
    <article class="builder-user-flow-page">
      <iframe
        class="builder-user-flow-frame"
        src="${data.link}"
        title="${title}"
      ></iframe>
    </article>
  `;
}

function renderBuilderSection(key) {
  const data = builderSections[key];
  document.body.classList.add("builder-flow-mode");
  document.querySelector("#builderStage").innerHTML = flowFrameMarkup(
    data,
    key === "userflow" ? "User Web Journey interactive interface" : "Builder View interactive flow"
  );

  document.querySelectorAll(".about-tab[data-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === key);
  });
}

document.querySelectorAll(".about-tab[data-section]").forEach((button) => {
  button.addEventListener("click", () => renderBuilderSection(button.dataset.section));
});

renderBuilderSection("builder");
