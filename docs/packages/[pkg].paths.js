// export default {
//   paths() {
//     return [{ params: { pkg: "foo" } }, { params: { pkg: "bar" } }];
//   },
// };

import fs from "fs";

export default {
  paths() {
    return fs.readdirSync("docs/packages").map((pkg) => {
      return { params: { pkg } };
    });
  },
};
