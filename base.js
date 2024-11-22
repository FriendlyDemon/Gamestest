const rl = require("readline-sync");
const fs = require("node:fs");

function _Ref(pasta, arquivo, quantidade) {
  if (!fs.readdirSync(__dirname).includes(pasta)) {
    return "404 folder does not exist";
  } else if (!fs.readdirSync("./_Ref").includes(pasta)) {
    fs.mkdir("./_Ref/" + pasta);
  }
  if (fs.readdirSync("./_Ref/" + pasta).includes(arquivo + "1.json")) {
    return "500 reference already exists";
  } else if (!fs.readdirSync(pasta).includes(arquivo + ".json")) {
    return "404 file does not exist";
  } else {
    doc = require(`./${pasta}/${arquivo}.json`);
    for (i = 1; i <= quantidade; i++) {
      fs.writeFileSync(
        "./_Ref/" + pasta + "/" + arquivo + i + ".json",
        JSON.stringify(doc, null, "    ")
      );
    }
    return "reference(s) successfully created ";
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

function imp(folder, file) {
  if (fs.readdirSync(__dirname).includes(`${folder}`)) {
    if (fs.readdirSync(`./${folder}`).includes(`${file}.js`)) {
      return require(`./${folder}/${file}.js`).body;
    } else {
      return `${file}.json already exists`;
    }
  } else {
    return `${folder} does not exist`;
  }
}

function pickSlot(type, character) {
  if (
    ["equipment", "invetory", "spells"].includes(type) &&
    fs.readdirSync("./characters").includes(`${file}.js`)
  ) {
    let slot = imp("characters", character)[type][
      Object.keys(imp("characters", character)[type])[
        rl.keyInSelect(
          Object.keys(imp("characters", character)[type]),
          "Wich slot would you like to use?"
        )
      ]
    ];
    return slot;
  } else if (["equipment", "invetory", "spells"].includes(type)) {
    return `404 type ${type} does not exist`;
  } else if (fs.readdirSync("./characters").includes(`${file}.js`)) {
    return `404 character ${character} does not exist`;
  }
}

function d(num) {
  return Math.floor(Math.random() * num) + 1;
}
function sN(sName) {
  return imp("spells", sName).name;
}

function castList(caster) {
  let castSpell = pickSlot(spells, caster)[
    rl.keyInSelect(slot.map(sN), "Wich spell would you like to cast?")
  ];
  console.log("I cast " + imp("spells", castSpell).name + "!");
}

castList("player");
