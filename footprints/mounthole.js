
module.exports = {
  params: {
    designator: 'countersunk',
    thread: 0,
    head: 0
  },
  body: p => {
    let clearance = (p.head - p.thread) / 2 + 0.25
    return `
      (module CS (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* illustration of the countersunk */}
      (fp_circle (center 0 0) (end 0 ${p.head / 2}) (layer Dwgs.User) (width 0.15))
      
      ${'' /* stabilizers */}
      (pad "" np_thru_hole circle (at 0 0) (size ${p.thread} ${p.thread}) (drill ${p.thread}) (layers *.Cu *.Mask) (clearance ${clearance})))
      `
  }
} 
