import oliver from '../imagesPatrocinadores/oliver.jpeg';

export function OliverSecao(){
    const redirectZap = () => {
        window.open("https://wa.link/hkmc5i","_blank");
    }
    return(
        <>
            <div className='mt-20 relative justify-center border-2 ml-[5vw] w-[90vw] md:w-[35vw] p-3 h-[37vw] md:h-[10vw] border-orange-500'>
                <div>
                    <div className='absolute md:top-[0.8vw] md:left-[23.3vw] top-[4.5vw] left-[66.3vw] w-6 h-6 border-t-2 border-l-2 border-amber-500/40 group-hover:border-amber-500/60 transition-colors'></div>
                    <div className='absolute top-[27.5vw] left-[81vw] md:top-[8.2vw] md:left-[28vw] w-6 h-6 border-b-2 border-r-2 border-amber-500/40 group-hover:border-amber-500/60 transition-colors'></div>
                    <img className="relative left-[65vw]  top-[3vw] h-[26vw] md:h-[8vw]" src={oliver}/>

                </div>
                <div className='mt-[-24vw] md:mt-[-7.5vw]'>
                <h1 className='text-[4.8vw] md:text-4xl w-40vw md:w-[21vw] font-bold '>Fotos Oficiais do Evento</h1>
                <p className='mt-0 md:mt-1 w-[45vw] md:w-[19vw] text-[2vw] md:text-lx leading-tight'>Os registros da Copa Karkará já estão disponíveis com o fotógrafo oficial do evento!!</p>
                <button onClick={redirectZap} className='mt-2 md:mt-[1vw] text-black font-medium bg-orange-500  w-[40vw] rounded-md p-[3vw] text-[4vw]'>ACESSAR FOTOS</button>
                </div>
            </div>
        </>
    )
}