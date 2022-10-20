console.clear();

interface employeeCondiciton {isDead:boolean,isSeparated:boolean,isRetired:boolean};
const getPayAmount = ({isDead = false , isSeparated = true , isRetired = false}:employeeCondiciton):number =>
/*
(isDead) ? 1500 :
(isSeparated) ? 2500 :
(isRetired) ? 3000 : 4000
*/
{if(isDead){return 1500};if(isSeparated){return 2500};if(isRetired){return 3000};return 4000}

console.log(getPayAmount({isDead:false,isSeparated:true,isRetired:false}))