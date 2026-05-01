
const colors20 = {
  orange: "bg-orange-500/20",
  red: "bg-red-500/20",
  green: "bg-green-500/20",
  black: "bg-black/20",
};
const colors = {
  orange: "bg-orange-500/90",
  red: "bg-red-500/90",
  green: "bg-green-500/90",
  black: "bg-black/90",
};

export function FightCard({ fighter1, fighter2, image,colorBg,corTexto }) {
  return (
    <div
      className="group relative mx-auto overflow-hidden rounded-2xl border-2
                 h-[20vw] md:h-[10vw]
                 w-[85vw]
                 hover:h-[93vw]
                 md:mt-6
                mt-2
                 md:w-[40vw]
                 md:hover:h-[50vw]
                 transition-all duration-300
                 border-orange-500 bg-cover bg-center
                flex justify-center items-center bg-[10%_10%]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div  className={`absolute  inset-0 ${colors[colorBg]} md:group-hover:${colors20[colorBg]} group-hover:bg-${colorBg}/20  transition-all duration-300`}></div>

      {/* conteúdo */}
      <div className="relative group-hover:opacity-0 z-10 flex flex-col justify-center h-full text-center text-white">
        <h2 className="text-base sm:text-lg md:text-4xl font-bold px-2 " style={{color:corTexto}}>
          {fighter1} <span className='text-amber-400'>vs</span> {fighter2}
        </h2>
      </div>
    </div>
  );
}
