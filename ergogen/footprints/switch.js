
module.exports = {
  params: {
    designator: 'H',
    reverse: false,
    GND: { type: 'net', value: 'GND' },
    common: undefined,
    left: undefined,
    right: undefined
  },
  body: p => {
    let side = p.reverse ? 'B' : 'F'
    let def_pos = p.reverse ? '-' : ''
    let def_neg = p.reverse ? '' : '-'
    
    return `
      (module SPDTMSK (layer ${side}.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer ${side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer ${side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${'' /* stabilizers */}
      (pad "" np_thru_hole circle (at -1.5 0) (size 0.8 0.8) (drill 0.8) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 1.5 0) (size 0.8 0.8) (drill 0.8) (layers *.Cu *.Mask))
      
      ${'' /* pads */}
      (pad "" smd rect (at ${def_neg}3.65 1.1) (size 1 0.8) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
      (pad "" smd rect (at ${def_neg}3.65 -0.85) (size 1 0.8) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
      (pad "" smd rect (at ${def_pos}3.65 -0.85) (size 1 0.8) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
      (pad "" smd rect (at ${def_pos}3.65 1.1) (size 1 0.8) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
      (pad 1 smd rect (at ${def_neg}2.25 1.8) (size 0.8 1.6) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.left})
      (pad 2 smd rect (at ${def_neg}0.75 1.8) (size 0.8 1.6) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.common})
      (pad 3 smd rect (at ${def_pos}2.25 1.8) (size 0.8 1.6) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.right}))
    `
  }
}
