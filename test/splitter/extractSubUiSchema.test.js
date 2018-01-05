import extractSubUiSchema from "../../src/splitter/extractSubUiSchema";

test("extract default uiSchema", () => {
  let origUiSchema = {
    firstName: {},
    lastName: {},
    navConf: {
      aliases: {},
    },
  };
  expect(
    extractSubUiSchema(["firstName", "lastName"], {}, origUiSchema)
  ).toEqual({
    firstName: {},
    lastName: {},
  });
});

test("extract with aliases", () => {
  let uiSchema = {
    firstName: {
      classNames: "col-md-5",
    },
    firstNameAlias: {
      classNames: "col-md-10",
    },
  };
  expect(extractSubUiSchema(["firstName"], {}, uiSchema)).toEqual({
    firstName: { classNames: "col-md-5" },
  });

  expect(
    extractSubUiSchema(["firstName"], { firstName: "firstNameAlias" }, uiSchema)
  ).toEqual({ firstName: { classNames: "col-md-10" } });
});
