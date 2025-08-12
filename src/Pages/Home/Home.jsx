
import { useSelector } from "react-redux"
import Balance from "../../Components/Balance/Balance"
import BalanceBarCounter from "../../Components/BalanceBarCounter/BalanceBarCounter"
import CardsFrontSide from "../../Components/CardsFrontSide/CardsFrontSide"
import ClaimBtn from "../../Components/ClaimBtn/ClaimBtn"
import Header from "../../Components/Header/Header"
import { selectBombIsOpen } from "../../redux/exampleReducer/gamesValues.selectors"
import BoomAnimation from "../../Components/BoomAnimation/BoomAnimation"


function Home() {

  const isBombOpen = useSelector(selectBombIsOpen);

  return (



<div className="container mx-auto pl-[10px] pr-[10px]">
<Header/>
<Balance/>
<CardsFrontSide />
<BalanceBarCounter/>
<ClaimBtn />

{isBombOpen && <BoomAnimation />}
</div>
  )
}

export default Home