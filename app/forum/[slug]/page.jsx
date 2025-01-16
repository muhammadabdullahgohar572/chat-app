import ChatForms from "@/components/chatForum"


const slugg=async({params})=>{
    const slug=(await params).slug
    return <ChatForms/>
}

export default slugg