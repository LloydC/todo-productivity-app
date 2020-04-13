export default function generateDate(){
    const today = new Date();
    const month = today.getUTCMonth() + 1; //months from 1-12
    const today2 = today.getUTCDate();
    const year = today.getUTCFullYear();
    const currentDay = `${today2}/${month <10 ? "0"+ month : month}/${year}`
    return currentDay;
}