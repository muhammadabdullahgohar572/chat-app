import { ChatForms } from "@/components/ChatForms"
import { currentUser } from '@clerk/nextjs/server'




const slugg=async({params})=>{
    const user=await currentUser()
    const slug=(await params).slug
    return <ChatForms slug={slug}  clerkUser={{id:user.id,name:user.firstName,token:user.publicMetadata.token}}/>
}

export default slugg