import { useState, useEffect,useRef } from 'react';


import { useInView } from "react-intersection-observer"
const Tusucisla = ({ text, maxx }) => {
  const [cislo, setCislo] = useState(0);
  const referencia = useRef(false)
  const { ref, entry } = useInView({ threshold: [0, 0.6],triggerOnce: true  })

  useEffect(() => {

    if (referencia.current === false) {
        referencia.current = true
        return
    }

    let start = 0;
    const end = maxx;
    const duration = 3000; // celkový čas animácie v ms
    const stepTime = 20; // interval aktualizácie
    const increment = Math.ceil(end / (duration / stepTime));

    const interval = setInterval(() => {
      start += increment;

      const nova = start + increment
      if (nova >= end) {
        start = end;
        clearInterval(interval); // zastaví animáciu
      }
      setCislo(start);
    }, stepTime);

    return () => clearInterval(interval); // cleanup
  }, [maxx,entry]);

  return (
    <div 
    ref = {ref}
    className="w-full h-fit flex flex-col gap-2 leading-none items-start pb-5">
      <span className="text-[40px] md:text-[50px] lg:text-[70px] font-semibold">{cislo}</span>
      <span className="text-[13px] md:text-[16px] text-sivaTmava">{text}</span>
    </div>
  );
};

export default Tusucisla;