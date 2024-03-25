import HeaderCenter from "./HeaderCenter"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const Header = () => {
  return (
    <div className=" flex flex-row justify-evenly bg-black">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
   
    </div>
  )
}

export default Header

