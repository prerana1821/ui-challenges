import MyList from ".";

describe("<MyList />", () => {
  it("renders without crashing with non-empty list", () => {
    const list = ["Item 1", "Item 2", "Item 3"];
    const handleDelete = cy.stub().as("handleDelete");

    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

    cy.get(".list-items").should("have.length", list.length);
  });

  it("renders without crashing with empty list", () => {
    const list: string[] = [];
    const handleDelete = cy.stub().as("handleDelete");

    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

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

    cy.mount(<MyList list={list} handleDelete={handleDelete} />);

    cy.get(".list-items").should("have.length", 1);
    cy.contains(".list-items", "Single Item").should("exist");
  });
});
