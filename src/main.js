import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    name: "Eleni",
    // Associations with the term 'CI/CD'
    associations: ["Integration", "Deployment", "Automation"],
    // CI/CD tools in the client project
    tools: "Jenkins",
    // Workshop expectations
    expectations: ["overview of Github Actions", "better understanding of Jenkins"],
  },
});

