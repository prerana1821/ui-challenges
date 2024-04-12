import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);

    cy.get(".container").should("exist");

    cy.contains("Countries List with Debounce").should("exist");
  });
});
