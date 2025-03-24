<div align="center">

# `hummingbird`

**A 30-key ergonomic keyboard.**

![Top view](images/top.png)

</div>

## Assembly

### Components

- [3.7V 300mAh 401030 Lithium Polymer Li-Po Rechargeable Battery](https://www.aliexpress.com/item/1005007586854504.html)
- [TENSTAR 2pcs NRF52840 Development Board](https://www.aliexpress.com/item/1005007738886550.html)
- [5PCS 1x40P 2.54mm Round Hole Female Header](https://www.aliexpress.com/item/10000000838267.html)
- [Kailh Hot Swap Socket for 1350 Chocolate Switches Low Profile](https://www.aliexpress.com/item/1005005449803412.html)
- [50PCS Mini 7-Pin On/Off 1P2T SPDT MSK-12C02 SMD Toggle Slide Switch](https://www.aliexpress.com/item/4000685483225.html)
- 5 x [6PCS Low Profile Keycaps For 1350 Chocolate Switch](https://www.aliexpress.com/item/1005005902080016.html)
- [30PCS Kailh Choc Low Profile Switch 1350 Chocolate Keyboard](https://www.aliexpress.com/item/1005005066585322.html)

**Optional**

- [1.5mm, M1.4 (OD2.3mm) Brass Insert](https://www.aliexpress.com/item/1005005776999972.html)
- [4mm M1.4 Black Stainless Steel Countersunk Head Screw](https://www.aliexpress.com/item/1005003116991205.html)
- [PORON Supper Soft Cotton Filling Mechanical Keyboard Bottom](https://www.aliexpress.com/item/1005004684031433.html)
- [100 Pcs/sheet Self Adhesive Buffer Bumper](https://www.aliexpress.com/item/1005003989623791.html)

### Equipment

- Soldering Iron
- Solder Wire
- Solder Flux Paste

**Optional**

- Craft Knife and Mat

### Processing

- PCB
  - Build keyboard: `cd ergogen && ergogen .` 
  - Add tracks: `sed -i ':a; $!{N; ba}; s/\(.*\))/\1'"$(sed -e ':a; N; $!ba; s/\n/\\n/g' -e 's/\&/\\&/g' tracks.scm)"\)'/' output/pcbs/hummingbird.kicad_pcb`
  - Build the tracks and zones:
    - Open `output/pcbs/hummingbird.kicad_pcb` in KiCad
    - Get the round-tracks plugin and round the tracks
    - Fill the ground zone with `B`
  - Plot `.gerber` files and drill files to `../gerber`
  - Zip: `zip hummingbird.zip output/gerber/hummingbird-*.{gbr,drl}`

- Case
  - Open `freecad/*.FCStd` in FreeCAD
  - Export each top-level mesh to STEP

### Manufacturing

- PCB - JLCPCB
  - Base Material: FR-4
  - Product Type: Industrial/Consumer electronics
  - Mark on PCB: Remove Mark
  - Layers: 2
  - PCB Qty: 5
  - PCB Thickness: 1.6mm

- Case - JLC3DP
  - 3D Technology: SLS(Nylon)
  - Material: 1172Pro Nylon
  - Colors: White

### Building

- Download [latest firmware](https://github.com/rowanclarke/kbd/actions/workflows/build.yml)
- Ground RST on the microcontroller twice within half a second to enter bootloader
- Mount microcontroller and copy the firmware to the device
- Reboot device and test
- Solder all components on the PCB
- Heat-set threaded inserts on cover plates
- Assemble
- Tape and cut out the PORON foam on the base plates
