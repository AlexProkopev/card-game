import useModal from "../../hooks/useModal";
import logoPath from "../../assets/white-green-logo.svg";
import { useEffect } from "react";

function UniversalModal({ children, backGround }) {
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(()=>{
      openModal();
  },[openModal])



  return (
    <div
      className={` w-full h-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex items-center justify-center bg-black bg-opacity-80  backdrop-blur-[10px]  backdrop-brightness-125  rounded-4xl`}
    >
      <img
        src={logoPath}
        alt="Logo"
        className="absolute top-5 left-[50%] translate-x-[-50%]"
      />
      ;
      <div
        className={` w-full h-full flex items-center justify-center rounded-4xl`}
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
        }}
      >
   
        <div className="flex justify-center items-center flex-col gap-4">
          {children}
         
        </div>
      </div>
    </div>
  );
}

export default UniversalModal;
