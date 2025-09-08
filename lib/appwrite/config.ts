export const apprwriteConfig = {
    endpointUrl : process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT! ,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASES!,
    userrTableId: process.env.NEXT_PUBLIC_APPWRITE_USERS_TABLE!,
    filescollectionId:process.env.NEXT_PUBLIC_APPWRITE_USERS_TABLE!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
    secretKey: process.env.NEXT_APPRWRITE_KEY!

}