import moongoose from "moongoose";

let isConnected = false;

export const connectToDB = async () =>{
    moongoose.set('strictQuery',true);
}