const GAMBI = ((document) => {
  
  let $ = document.querySelector.bind(document);
  const container = $(".app");
  const controler = $(".controler");
  const before    = $(".before");

  const view = () => {  
    container.addEventListener("mousedown", startMove);
    container.addEventListener("mouseup",  endMove);
  };
  
  const startMove = () => container.addEventListener("mousemove",fill);  
  const endMove   = () => container.removeEventListener("mousemove",fill);
  
  // Direção Elemento
  const fill = (e) => {
    if(e.target.nodeName !== "SPAN"){
      const offsetLeft = container.offsetLeft; 
      const diff = (e.clientX - offsetLeft - 6) - (e.target.clientWidth/2);
      const val = (diff * -1) + (e.target.clientWidth/2);
      controler.style.transform = 'translateX('+diff+'px)'
      before.style.clipPath = 'inset(0px '+val+'px 0px 0px)';
    };
  };

  
  const render = () => {
    view();
  };
  
  return {
    iniciar : render
  };

})(document);

GAMBI.iniciar();
