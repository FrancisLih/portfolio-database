import React from 'react'
import Works from './Works';
import Certificate from './Certificate';
import Badges from './Badges';

const Showcase = () => {
  const [showTab, setShowTab] = React.useState('certificate')
  const [isModalShow, setModalShow] = React.useState(false);
  const handleChangeTab = (tab) =>{
    setShowTab(tab)
}

  return (
    <>
    <section className="showcase h-auto  pb-10 w-full">
    <div id='portfolio' className='project p-5'>
      <h6 className='text-center font-extrabold text-6xl text-secondary'>PORTFOLIO</h6>
      <ul className='flex gap-10 justify-center font-thin p-5'>
        <li><button className={`font-bold transition-all duration-500${showTab=="works" ? "text-content underline" :"text-stone-600" }`} onClick={() => handleChangeTab("works")}>Projects</button></li>
        <li><button className={`font-bold transition-all duration-500${showTab=="certificate" ? "text-content underline" :"text-stone-600" }`} onClick={() => handleChangeTab("certificate")}>Certificates</button> </li>
        <li><button className={`font-bold transition-all duration-500${showTab=="badge" ? "text-content underline" :"text-stone-600" }`} onClick={() => handleChangeTab("badge")}>Badge</button> </li>
      </ul>

    </div>

    <div className='tabs transition-all duration-500'>
      {showTab === "works" && (<><Works setModalShow ={setModalShow}/></>)}
      {showTab === "certificate" &&(<><Certificate setModalShow ={setModalShow}/></>)}
      {showTab === "badge" &&(<><Badges setModalShow ={setModalShow}/></>)}
    </div>

    {isModalShow &&  <ModalViewItem setModalShow={setModalShow}/>}
    </section>
    

    </>
  )
}

export default Showcase