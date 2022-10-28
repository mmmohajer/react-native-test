import {
  borderRadiusInSize,
  borderRadiusInPercentage,
  colors,
  borderWidth,
} from "../base/vars";

// -----------------------------------------------------------

let brRadiusInSize = {};

borderRadiusInSize.forEach((br) => {
  brRadiusInSize[`br${br}`] = { borderRadius: br };
  brRadiusInSize[`brTL${br}`] = { borderTopLeftRadius: br };
  brRadiusInSize[`brTR${br}`] = { borderTopRightRadius: br };
  brRadiusInSize[`brBL${br}`] = { borderBottomLeftRadius: br };
  brRadiusInSize[`brBR${br}`] = { borderBottomRightRadius: br };
});

export { brRadiusInSize };

// -----------------------------------------------------------

let brRadiusInPer = {};

borderRadiusInPercentage.forEach((br) => {
  brRadiusInPer[`brPer${br}`] = { borderRadius: `${br}%` };
  brRadiusInPer[`brTLPer${br}`] = { borderTopLeftRadius: `${br}%` };
  brRadiusInPer[`brTRPer${br}`] = { borderTopRightRadius: `${br}%` };
  brRadiusInPer[`brBLPer${br}`] = { borderBottomLeftRadius: `${br}%` };
  brRadiusInPer[`brBRPer${br}`] = { borderBottomRightRadius: `${br}%` };
});

export { brRadiusInPer };

// -----------------------------------------------------------

let brColors = {};

Object.keys(colors).forEach((c) => {
  let className = c.charAt(0).toUpperCase() + c.slice(1);
  brColors[`br${className}`] = { borderColor: colors[c] };
  brColors[`brL${className}`] = { borderLeftColor: colors[c] };
  brColors[`brT${className}`] = { borderTopColor: colors[c] };
  brColors[`brR${className}`] = { borderRightColor: colors[c] };
  brColors[`brB${className}`] = { borderBottomColor: colors[c] };
});

export { brColors };

// -----------------------------------------------------------

let brWidths = {};

borderWidth.forEach((brW) => {
  brWidths[`br${brW}`] = { borderWidth: brW };
  brWidths[`brT${brW}`] = { borderTopWidth: brW };
  brWidths[`brR${brW}`] = { borderRightWidth: brW };
  brWidths[`brB${brW}`] = { borderBottomWidth: brW };
  brWidths[`brL${brW}`] = { borderLeftWidth: brW };
});

export { brWidths };
