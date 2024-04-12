import OptionsList from ".";

describe("<OptionsList />", () => {
  it("renders without crashing with non-empty options list", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const addToList = cy.stub().as("addToList");

    cy.mount(<OptionsList options={options} addToList={addToList} />);

    cy.get(".option-item").should("have.length", options.length);
  });

  it("renders without crashing with empty options list", () => {
    const options: string[] = [];
    const addToList = cy.stub().as("addToList");

    cy.mount(<OptionsList options={options} addToList={addToList} />);

    cy.get(".option-item").should("not.exist");
  });

  it("calls addToList when option is clicked", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const addToList = cy.stub().as("addToList");

    cy.mount(<OptionsList options={options} addToList={addToList} />);

    cy.get(".option-item").eq(1).click();

    cy.get("@addToList").should("have.been.calledWith", options[1]);
  });
});
