describe("Lighthouse Gallery", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the default elements on the screen", () => {
    cy.get("[data-testid='cypress-title']")
      .should("exist")
      .should("have.text", "Lightbox Gallery");

    cy.get(".lightbox").should("exist");
    cy.get(".tile").should("exist");
  });

  it("opens modal when clicking on an image in tile view", () => {
    cy.get(".tile .image").first().click();

    cy.get(".full-screen-modal").should("exist");
    cy.get(".modal-container").should("exist");
    cy.get("[data-testid='modal-image']").should("exist");
  });

  it("closes modal when clicking outside the image", () => {
    cy.get(".tile .image").first().click();

    cy.get(".full-screen-modal").should("exist");

    cy.get(".full-screen-modal").click("topLeft");

    cy.get(".full-screen-modal").should("not.exist");
  });

  it("closes modal when clicking on close button", () => {
    cy.get(".tile .image").first().click();

    cy.get(".full-screen-modal").should("exist");

    cy.get("[data-testid='modal-image']").click();

    cy.get(".full-screen-modal").should("not.exist");
  });

  it("navigates between images in modal", () => {
    cy.get(".tile .image").first().click();

    cy.get(".full-screen-modal").should("exist");

    // Assuming there are more than one image
    cy.get(".tile .image").eq(1).click();
    cy.get("[data-testid='modal-image']").should("exist");

    cy.get(".tile .image").eq(0).click();
    cy.get("[data-testid='modal-image']").should("exist");
  });

  it("closes modal when clicking on the background", () => {
    // Clicking on the first image
    cy.get(".tile .image").first().click();

    cy.get(".full-screen-modal").should("exist");

    // Clicking on the background
    cy.get(".full-screen-modal").click("topLeft");

    // Confirm the modal is closed
    cy.get(".full-screen-modal").should("not.exist");
  });
});
