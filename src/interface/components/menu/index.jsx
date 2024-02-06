import { MenuProvider } from '@context'
import Settingbutton from "./settingbutton"
import Timer from "./timer"
import ButtonTheme from "./theme"
import Setting from "./setting"
import Perfil from "./perfil"
import Sac from "./sac"

const Menu = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 3600)

  return (
    <MenuProvider>
      <div className="fixed top-1 right-1 z-30">
        <div className='flex items-center justify-end'>
          <ButtonTheme />
          <Timer expiryTimestamp={time} />
          <Settingbutton />
        </div>
        <div className="flex">
          <Perfil />
          <Sac />
          <Setting /> 
        </div>
      </div>
    </MenuProvider>
  )
}

export default Menu