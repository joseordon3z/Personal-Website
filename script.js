import { setupHome } from "./features/home.js";
import { setupReferences } from "./features/references.js";

document.addEventListener("DOMContentLoaded", () => {
    setupHome();
    setupReferences();
});
