import reactLogo from '../assets/react.svg'

export default function Navbar(){
    return(
    <nav className='bg-slate-800 flex justify-between p-5 items-center'>
        <div className='flex items-center space-x-2'>
            <img src={reactLogo} alt="react logo" />
            <h3 className='text-cyan-400 font-bold text-xl'>ReactFacts</h3>
        </div>
        <h4 className='text-gray-300 font-semibold'>React Course - Project 1</h4>
    </nav>
    )
}