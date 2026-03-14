describe("Portfolio", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })

  it("site açılır", () => {
    cy.contains("Atilla Bilgi").should("be.visible")
  })

  it("skills görünür", () => {
    cy.contains("Skills").should("be.visible")
  })

})