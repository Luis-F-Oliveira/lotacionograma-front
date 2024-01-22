import { MenuProvider } from '@context'
import Settingbutton from "./settingbutton"
import Timer from "./timer"
import ButtonTheme from "./theme"
import Setting from "./setting"
import Perfil from "./perfil"
import Sac from "./sac"
import Register from "./register"

const Menu = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 3600)

  return (
    <MenuProvider>
      <div className="fixed top-1 right-1 z-10">
        <div className='flex items-center justify-end'>
          <ButtonTheme />
          <Timer expiryTimestamp={time} />
          <Settingbutton />
        </div>
        <div className="flex">
          <Perfil />
          <Sac />
          <Register />
          <Setting /> 
        </div>
      </div>
    </MenuProvider>
  )
}

export default Menu