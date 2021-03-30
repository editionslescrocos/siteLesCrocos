export default async () => {
  const { $content } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["path"]).fetch();

  
  const paths =  files.map((file) => (file.path === "/index" ? "/" : file.path));
  
  const forbidenWords=["team","slider","press","general"]
  const isWordPresent=function(path){
    let isWordPresent=false
    forbidenWords.forEach(
      word=>{
        if(path.includes(word))isWordPresent=true
      }
    )

    return isWordPresent
  }

  return paths.filter(path=>!isWordPresent(path))

};