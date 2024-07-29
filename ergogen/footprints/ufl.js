module.exports = {
  params: {
    designator: 'UFL',
    reverse: false,
    SIG: {type: 'net', value: 'SIG'},
    GND: {type: 'net', value: 'GND'},
  },
  body: p => {
    let side = p.reverse ? "B" : "F"
    return `
      (module ufl (layer ${side}.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer ${side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer ${side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* illustration of the button */}
      (fp_circle (center 0 0) (end 0 0.2) (layer Dwgs.User) (width 0.15))
      (fp_circle (center 0 0) (end 0 0.9) (layer Dwgs.User) (width 0.15))

      ${''/* component outline */}
      (fp_line (start -1.3 -1.3) (end -1.3 1.3) (layer ${side}.SilkS) (width 0.15))
      (fp_line (start -1.3 1.3) (end 1.3 1.3) (layer ${side}.SilkS) (width 0.15))  
      (fp_line (start 1.3 1.3) (end 1.3 -1.3) (layer ${side}.SilkS) (width 0.15))
      (fp_line (start 1.3 -1.3) (end -1.3 -1.3) (layer ${side}.SilkS) (width 0.15))

      ${'' /* pads */}   
      (pad "1" smd rect (at 0 1.5) (size 1 1) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.SIG})
      (pad "2" smd rect (at -1.475 0) (size 1.05 2.2) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.GND})
      (pad "2" smd rect (at 1.475 0) (size 1.05 2.2) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.GND}))
      `   
  }
}
