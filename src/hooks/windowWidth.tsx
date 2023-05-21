import { useEffect, useState } from "react";

type props={
  width:number,
}

const usewindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<props>({
      width:window.innerWidth
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth({
          width:window.innerWidth
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();

      return ()=>window.removeEventListener("resize",handleResize)
      
    }, []);

    return windowWidth
  
}

export default usewindowWidth