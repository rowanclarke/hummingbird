
module.exports = {
  params: {
    designator: 'M2',
  },
  body: p => {
    return `
      (module M2CS (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* illustration of the countersunk */}
      (fp_circle (center 0 0) (end 0 1.925) (layer Dwgs.User) (width 0.15))
      
      ${'' /* stabilizers */}
      (pad "" np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers *.Cu *.Mask) (clearance 1.075)))
    `
  }
} 
