describe("Let's run this bad boy", () => {
  it("runs HA HA HA", () => {
    cy.visit("https://luto-piano.web.app");
    cy.wait(1000);

    cy.readFile("input.json").then((keyPressData) => {
      for (const key of keyPressData) {
        cy.get("button")
          .contains(new RegExp("^" + key.key + "$"))
          .trigger("mousedown")
          .wait(key.sleep_time)
          .trigger("mouseup");
      }
    });
  });
});
