import UserAvatart from '../component/avatar'
import Navigation from '../component/navigation'
import UserInfo from '../component/userInfo'
import Coment from '../component/coment'


export default function UserProfile({user}) {
  return (
    <>
    <Navigation>  
      <UserAvatart user={user}/>
      <UserInfo user={user}/>
      <Coment/>
    </Navigation>
    </>    
  )
}

export async function getStaticProps( context ) {

  const res = await fetch(`http://localhost:5000/user/getuser?id=1`)
  const user = await res.json()


  return {
    props: { user }
  }
}
