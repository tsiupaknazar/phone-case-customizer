import { proxy } from "valtio";

import samsungLogo from "../assets/samsung.png"

const state = proxy({
    color: "#ffa500",
    isLogoTexture: true,
    logoDecal: samsungLogo,
});

export default state;