export const transformData = (data: string) => {
    if(data){
        const words = data.split(/(.*\S)/).filter(w => w !== "\n" && w !== "");
        if(words.length >=3){
            let name = words[0]
            let address1 = words[1].split(",")[0]
            let address2 = words[1].split(",")[1] || ""
            let city = words[2].split(",")[0]
            let state = words[2].split(",")[1].split(" ")[1]
            let zip = words[2].split(",")[1].split(" ")[2]
            return {name,address1,address2, city,state, zip}
        }
        return false
     
    }
}