import CountriesList from ".";

describe("<CountriesList />", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://algochurn-server.onrender.com/practice/countries/*",
      { fixture: "countries.json" }
    ).as("fetchCountries");
  });

  it("renders without crashing", () => {
    cy.mount(<CountriesList />);

    cy.get("input").should("exist");
    cy.contains("My List").should("exist");
  });

  it("fetches options when search input value length is greater than 2", () => {
    cy.mount(<CountriesList />);

    cy.get("input").type("uni");

    cy.wait("@fetchCountries").then((interception) => {
      const { countries } = interception.response?.body;
      cy.get(".option-item").should("have.length", countries.length);
    });
  });

  it("adds item to list when option is clicked", () => {
    cy.mount(<CountriesList />);

    cy.get("input").type("uni");

    cy.wait("@fetchCountries").then((interception) => {
      const { countries } = interception.response?.body;
      cy.get(".option-item").first().click();

      cy.contains(".list-items", countries[0]).should("exist");
    });
  });

  it("deletes item from list when delete button is clicked", () => {
    cy.mount(<CountriesList />);

    cy.get("input").type("uni");

    cy.wait("@fetchCountries").then((interception) => {
      const { countries } = interception.response?.body;
      cy.get(".option-item").first().click();

      cy.get(".list-items").first().find("span").click();

      cy.contains(".list-items", countries[0]).should("not.exist");
    });
  });
});
