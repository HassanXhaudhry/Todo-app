import Chance from "chance";

const chance = Chance();

export const fakeApiData = () =>{
    return (
        chance.email({middle:true})
        )
    
}