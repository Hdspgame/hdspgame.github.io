function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

// this JS is only used to configure the borders, it is optional
import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.4/dist/tweakpane.min.js";

const card = document.querySelector(".card");

const pane = new Pane({ title: "Demo Parameters", expanded: true });
const PARAMS = { model: "linear", animated: true };

const MODES = {
  linear: `transparent 60%, var(--color-1)`,
  double: `transparent 20%, var(--color-1) 25%, transparent 30%, transparent 70%, var(--color-2) 75%, transparent 80%`,
  gradient: `var(--color-2), var(--color-1), var(--color-3), var(--color-4), var(--color-5), var(--color-6), var(--color-2)`
};

pane
  .addBinding(PARAMS, "model", {
    label: "Model",
    options: {
      Linear: "linear",
      Double: "double",
      Gradient: "gradient"
    }
  })
  .on("change", (e) => {
    card.style.setProperty("--border-colors", MODES[e.value]);
  });

pane.addBinding(PARAMS, "animated", { label: "Animate" }).on("change", (e) => {
  if (e.value) {
    card.classList.add("animated");
  } else {
    card.classList.remove("animated");
  }
});

