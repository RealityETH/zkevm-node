const fs = require('fs');
const fse = require('fs-extra');


const pathToDuplidate = ['./data/zkevm-state-db/',
'./data/zkevm-pool-db/',
'./data/zkevm-event-db/',
'./data/zkevm-mock-l1-networt/',
// './data/zkevm-explorer-l1-db/',
// './data/zkevm-explorer-l2-db/',
// './data/zkevm-permissionless-db/'
]


const fork1Path = 'fork1/'
pathToDuplidate.forEach(path => {
  fs.mkdirSync(path + fork1Path, {recursive: true}, err => {})
  fse.copySync(path + "data/", path + fork1Path + "data/")
}
)

const fork2Path = 'fork2/'
pathToDuplidate.forEach(path => {
  fs.mkdirSync(path + fork2Path,{recursive: true}, err => {})
  fse.copySync(path + "data/", path + fork2Path + "data/")
}
)

