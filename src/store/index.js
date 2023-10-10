import { proxy } from "valtio";

import hondaLogo from "../assets/honda.png";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: hondaLogo,
  fullDecal: hondaLogo,
});

export default state;
