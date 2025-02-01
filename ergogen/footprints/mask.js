module.exports = {
  params: {
    designator: 'MCU',
    reverse: false,
    width: 0,
    height: 0,
    net: {type: 'net', value: null}
  },
  body: p => {
    let side = p.reverse ? 'B' : 'F'
    return `
      (module MASK (layer ${side}.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}
      (pad "" smd rect (at 0 0 0) (size ${p.width} ${p.height}) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") ${p.net})
      )`;
  }
}

