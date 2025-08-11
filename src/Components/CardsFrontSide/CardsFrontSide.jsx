import dollSvg from "../../assets/doll.svg";

function CardsFrontSide() {

   const styleDouble = " w-[113px] h-[113px] relative bg-gradient-to-b from-white/10 to-white/5 rounded-xl shadow-[0px_4px_8px_0px_rgba(24,26,32,0.30)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.20)] backdrop-blur-blur flex justify-center items-center"
  return (

      <ul className="mx-auto flex flex-wrap justify-center items-center gap-[8px] pl-0 w-[356px]">
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
        <li className={styleDouble}>
          <img src={dollSvg} alt="Dollar" />
        </li>
      </ul>

  );
}

export default CardsFrontSide;
