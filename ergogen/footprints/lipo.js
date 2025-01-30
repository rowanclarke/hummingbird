module.exports = {
  params: {
    designator: 'LIPO',
    LIVE: {type: 'net', value: 'LIVE'},
    GND: {type: 'net', value: 'GND'},
    terminal: {type: 'anchor', value: 'battery_terminal'}
  },
  body: p => {
    let side = "F";
    return `
      (module lipo (layer ${side}.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer ${side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer ${side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      )
      (module terminal (layer ${side}.Cu) (tedit 5B307E4C)
      ${'' /* throughholes */}
      (at ${p.terminal.x} ${p.terminal.y} 0)
      (pad "" thru_hole circle (at 0 0 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.LIVE})
      (pad "" thru_hole circle (at -2.54 0 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
      )
      `
  }
}
