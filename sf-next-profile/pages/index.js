import UserAvatart from '../component/avatar'
import Navigation from '../component/navigation'
import UserInfo from '../component/userInfo'
import Coment from '../component/coment'


export default function UserProfile() {
  return (
    <>
    <Navigation>  
      <UserAvatart/>
      <UserInfo/>
      <Coment/>
    </Navigation>
    </>    
  )
}
