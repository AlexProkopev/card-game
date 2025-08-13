import {useSelector } from "react-redux";
import Balance from "../../Components/Balance/Balance";
import BalanceBarCounter from "../../Components/BalanceBarCounter/BalanceBarCounter";
import CardsFrontSide from "../../Components/CardsFrontSide/CardsFrontSide";
import ClaimBtn from "../../Components/ClaimBtn/ClaimBtn";
import Header from "../../Components/Header/Header";
import {
  selectBombIsOpen,
  selectToClaim,
} from "../../redux/exampleReducer/gamesValues.selectors";
import BoomAnimation from "../../Components/BoomAnimation/BoomAnimation";
import CoinLayerAnimation from "../../Components/CoinLayerAnimation/CoinLayerAnimation";
import coinImg from "../../assets/smal-doll.svg";
import UniversalModal from "../../Components/UniversalModal/UniversalModal";
import BoomModal from "../../Components/BoomModal/BoomModal";
import claimModalBg from "../../assets/claim-modal-light.png";
import boomModalBg from "../../assets/bomb-light-modal.png";
import ClaimModal from "../../Components/ClaimModal/ClaimModal";

function Home() {
  const isBombOpen = useSelector(selectBombIsOpen);
  const isClaim = useSelector(selectToClaim);

  return (
    <div className="container mx-auto pl-[10px] pr-[10px]">
      <Header />
      <Balance />
      <CardsFrontSide />
      <BalanceBarCounter />
      <ClaimBtn />
   
      {isBombOpen && (
        <>
          <BoomAnimation />{" "}
          <UniversalModal backGround={boomModalBg}>
            <BoomModal />
          </UniversalModal>
        </>
      )}
      {isClaim && (
       <>
        <CoinLayerAnimation imgSrc={coinImg} count={50} height={500} />
           <UniversalModal backGround={claimModalBg}>
        <ClaimModal />
      </UniversalModal>
      </>

      )}
    </div>
  );
}

export default Home;
