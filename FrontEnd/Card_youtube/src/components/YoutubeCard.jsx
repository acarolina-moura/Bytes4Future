export function YoutubeCard(atributos) {
  return(
<div>
    <Image url="TagStudio.jpeg"></Image>
</div>
  ); 
}


function Image (props) {
  return <img
  src="TagStudio.jpeg"
  alt="thumbnail"
  class="rounded-2xl w-96"
/>    
}

function YoutubeCard(atributos) {
  if (atributos.isAd === true) {
  return(
<div>
    SOU UM ANUNCIO {3 + 2}
</div>
  ); 
}
}

 
function App() {
    return (
        <div className="App">   
<Saudacao nome="Ana"></Saudacao>
        </div>

    );
}

function Saudacao(){
  return (
    <div className="Ana">
      <p>Olá</p>
    </div>
  );
}


// Apresentação Condicional

// &&  

