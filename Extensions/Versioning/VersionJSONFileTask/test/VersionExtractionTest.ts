import { expect } from "chai";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import "mocha";

import { findFiles,
  ProcessFile,
  getSplitVersionParts
} from "../src/AppyVersionToJSONFileFunctions";

describe ("Version number split tests", () => {

  it ("should be able to get version name with . delimiters", () => {
      var actual = getSplitVersionParts ("\d+.\d+.\d+.\d+", "{1}.{2}.{3}", "7.6.17334.5");
      expect(actual).to.equal("7.6.17334");
  });

  it ("should be able to get version name with complex delimiters", () => {
      var actual = getSplitVersionParts ("\d+.\d+.\d+.\d+_\d+", "{1}-{2}-{3}", "2017.12.5.1_11760");
      expect(actual).to.equal("2017-12-5");
   });

   it ("should be able to get a SEMVER style version", () => {
    var actual = getSplitVersionParts ("\d+.\d+.\d+.\d+", "{1}.{2}.{3}-alfa.{4}", "2017.12.5.1");
    expect(actual).to.equal("2017.12.5-alfa.1");
 });

});
