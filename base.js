const rl = require("readline-sync");
const fs = require("node:fs");

if (!fs.readdirSync(__dirname).includes("_Ref")) {
  fs.mkdirSync("_Ref/");
}

function _Ref(folder, document, name, quantity) {
  if (!fs.readdirSync(__dirname).includes(folder)) {
    return "404 folder does not exist";
  } else if (!fs.readdirSync("./_Ref").includes(folder)) {
    fs.mkdirSync("./_Ref/" + folder);
  }

  let refname = fs.readdirSync("./_Ref/" + folder).length;

  if (!fs.readdirSync(folder).includes(document + ".js")) {
    return "404 file does not exist";
  } else {
    doc = require(`./${folder}/${document}.js`);

    if (typeof name == "string") {
      doc.name = name;
    }

    for (let i = 1; i <= quantity || i == 1; i++) {
      let filename = (
        "000000" + fs.readdirSync("./_Ref/" + folder).length.toString(16)
      ).slice(-6);

      fs.writeFileSync(
        "./_Ref/" + folder + "/" + filename + ".json",
        JSON.stringify(doc, null, "    ")
      );
    }
    if (quantity > 1) {
      return `references successfully created as ${(
        "000000" + refname.toString(16)
      ).slice(-6)} to ${("000000" + (refname + quantity).toString(16)).slice(
        -6
      )}`;
    } else {
      return `reference successfully created as ${refname.toString(16)}`;
    }
  }
}

function impRef(folder, file) {
  if (fs.readdirSync(`./_Ref`).includes(`${folder}`)) {
    if (fs.readdirSync(`./_Ref/${folder}`).includes(`${file}.json`)) {
      return require(`./_Ref/${folder}/${file}.json`);
    } else {
      return `${file}.json does not exist`;
    }
  } else {
    return `${folder} does not exist`;
  }
}

function impBase(folder, file) {
  if (fs.readdirSync(__dirname).includes(`${folder}`)) {
    if (fs.readdirSync(`./${folder}`).includes(`${file}.js`)) {
      return require(`./${folder}/${file}.js`);
    } else {
      return `${file}.js does not exists`;
    }
  } else {
    return `${folder} does not exist`;
  }
}

function showSlots(caster) {
  let foo = [];
  for (let slot in caster.spells) {
    if (caster.spells[slot].length > 0) {
      foo.push(slot);
    }
  }
  return foo;
}

function pickSlot(character) {
  let cha = impRef("characters", character);
  if (typeof cha == "object") {
    let slot = showSlots(cha);

    let pick = slot[rl.keyInSelect(slot, "Wich slot would you like to use?")];

    return cha.spells[pick].map(sN);
  } else {
    return cha;
  }
}

function d(num) {
  return Math.floor(Math.random() * num) + 1;
}

function sN(hex) {
  return impRef("spells", hex).name;
}

function castList(caster) {
  let castSpell = pickSlot(caster);
  let spellName =
    castSpell[rl.keyInSelect(castSpell, "Wich spell would you like to cast?")];
  console.log(impRef("characters", caster).name + " casts " + spellName + "!");
}
// rewrite return to ( x(y) type damage)
function damage(weapon) {
  let ref = impRef("items", weapon);
  if (typeof ref == "string") {
    return ref;
  } else {
    let v = 1;
    if (ref.tags.includes("versatile")) {
      v = 2;
    }

    let x = 0;

    for (let i = 0; i < ref.damage[0][0]; i++) {
      x += d(ref.damage[0][v]);
    }

    final = `${x} ${ref.damage[0].at(-1)} damage`;

    x = 0;

    if (ref.damage.length > 1) {
      for (let i = 1, y = 1; y < ref.damage.length; ) {
        x += d(ref.damage[y][1]);
        if (ref.damage[y][0] > i) {
          i++;
        } else {
          final += `, ${x} ${ref.damage[y].at(-1)} damage`;

          y++, (i = 1), (x = 0);
        }
      }
    }
    return final;
  }
}

castList("000000");
