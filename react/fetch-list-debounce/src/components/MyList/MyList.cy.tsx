import MyList from ".";

describe("<MyList />", () => {
  it("renders without crashing with non-empty list", () => {
    const list = ["Item 1", "Item 2", "Item 3"];
    const handleDelete = cy.stub().as("handleDelete"); // Create a stub function for handleDelete

    // Mount the component with the provided list and handleDelete function
    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

    // Assert that the component renders without crashing
    cy.get(".list-items").should("have.length", list.length); // Ensure the correct number of list items are rendered
  });

  it("renders without crashing with empty list", () => {
    const list: string[] = [];
    const handleDelete = cy.stub().as("handleDelete"); // Create a stub function for handleDelete

    // Mount the component with an empty list and handleDelete function
    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

    // Assert that no list items are rendered
    cy.get(".list-items").should("not.exist");
  });

  it("calls handleDelete when delete button is clicked", () => {
    const list = ["Item 1", "Item 2", "Item 3"];
    const handleDelete = cy.stub().as("handleDelete");

    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

    cy.get(".list-items").eq(1).find("span").click();

    cy.get("@handleDelete").should("have.been.calledWith", 1);
  });

  it("renders single item correctly", () => {
    const list = ["Single Item"];
    const handleDelete = cy.stub().as("handleDelete");

    // Mount the component with a single item in the list and handleDelete function
    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

    // Assert that the single list item is rendered
    cy.get(".list-items").should("have.length", 1);
    cy.contains(".list-items", "Single Item").should("exist");
  });
});
