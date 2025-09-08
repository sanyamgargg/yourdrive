// node-appwrite
import { cookies } from "next/headers";
import { apprwriteConfig } from "./config" ;
import { Account, Avatars, Client, Databases, Storage } from "node-appwrite";

export const createSessionClient = async() =>{
    const client = new Client()
    .setEndpoint(apprwriteConfig.endpointUrl)
    .setProject(apprwriteConfig.projectId) 

    const session = (await cookies()).get('appwrite-session') ;

    if(!session || !session.value) throw new Error('No session') ;
    client.setSession(session.value) ;

    return {
        get account(){
            return new Account(client) ;
        },
        get databases(){
            return new Databases(client)
        }
    }
} ;


export const createAdminClient = async() => {
    const client = new Client()
    .setEndpoint(apprwriteConfig.endpointUrl)
    .setProject(apprwriteConfig.projectId) 
    .setKey(apprwriteConfig.secretKey) ;

    return {
        get account(){
            return new Account(client) ;
        },
        get databases(){
            return new Databases(client) ;
        },
        get storage(){
            return new Storage(client) ;
        },
        get avatars(){
            return new Avatars(client) ;
        }
    }
} ;





