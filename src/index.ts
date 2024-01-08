import type {IFatherlib} from "./types";
import addLib from "./fatherlib/add";

const fatherlib = {
  Add: addLib
};

if (typeof window !== "undefined") {
  (window as any).fatherlib = fatherlib;
}

export {
  addLib,

  IFatherlib
};

export default fatherlib;
