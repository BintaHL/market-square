import axios from "axios"




export default async function ProfilePage() {
    const res = await axios.get('https://freebie-subpanel-pointer.ngrok-free.dev/users/me')
    const data = res.data.me
    
    console.log(data)
    

  return (
    <main className="flex min-h-screen items-start justify-end p-10">
        
        <div className="">
            
        </div>
    </main>
  )
}

