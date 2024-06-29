import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(Context);

    return (
        <div className='min-h-screen flex-1 pb-4 relative'>
            <div className='flex items-center justify-between text-2xl p-4 text-gray-500'>
                <p>Gemini</p>
                <img className='w-12 rounded-full' src={assets.user_icon} alt="" />
            </div>

            <div className='max-w-4xl m-auto'>

                {!showResult ?
                    <>
                        <div className='m-10 ml-4 text-5xl  text-slate-500 p-10'>
                            <p><span className='bg-gradient-to-r from-sky-500 via-green-500 to-rose-600 ... text-transparent bg-clip-text'>Hello, Priyanka.</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className='cards grid grid-cols-4 gap-4 p-5'>
                            <div className='h-48 p-3.5 bg-slate-100 rounded-xl cursor-pointer relative hover:bg-slate-200'>
                                <p className='text-slate-600'>Suggest some beautiful places in delhi</p>
                                <img className='w-10 mt-20 ml-36 p-1 absolute bg-white rounded-full' src={assets.compass_icon} alt="" />
                            </div>

                            <div className='h-48 p-3.5 bg-slate-100 rounded-xl cursor-pointer relative hover:bg-slate-200'>
                                <p className='text-slate-600'>Suggest some beautiful places in delhi</p>
                                <img className='w-10 mt-20 ml-36 p-1 absolute bg-white rounded-full' src={assets.bulb_icon} alt="" />
                            </div>

                            <div className='h-48 p-3.5 bg-slate-100 rounded-xl cursor-pointer relative hover:bg-slate-200'>
                                <p className='text-slate-600'>Suggest some beautiful places in delhi</p>
                                <img className='w-10 mt-20 ml-36 p-1 absolute bg-white rounded-full' src={assets.message_icon} alt="" />
                            </div>

                            <div className='h-48 p-3.5 bg-slate-100 rounded-xl cursor-pointer relative hover:bg-slate-200'>
                                <p className='text-slate-600'>Suggest some beautiful places in delhi</p>
                                <img className='w-10 mt-20 ml-36 p-1 absolute bg-white rounded-full' src={assets.code_icon} alt="" />
                            </div>
                        </div>

                    </>
                    :
                    <div className='px-0 py-3 max-h-96 overflow-y-scroll no-scrollbar'>
                        <div className='mx-0 my-4 flex items-center gap-6'>
                            <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='flex items-start gap-6'>
                            <img className='w-10 rounded-full' src={assets.gemini_icon} alt="" />
                            {
                                loading ?
                                    <div className='w-full flex flex-col gap-1' >
                                        <hr className='rounded-sm border-none bg-slate-50 bg-gradient-to-r from-sky-200 via-slate-50 to-sky-200 ... bg-[length:800px_50px] h-5 animate-pulse' />
                                        <hr className='rounded-sm border-none bg-slate-50 bg-gradient-to-r from-sky-200 via-slate-50 to-sky-200 ... bg-[length:800px_50px] h-5 animate-pulse' />
                                        <hr className='rounded-sm border-none bg-slate-50 bg-gradient-to-r from-sky-200 via-slate-50 to-sky-200 ... bg-[length:800px_50px] h-5 animate-pulse' />
                                    </div>
                                    :
                                    <p className='text-md  leading-relaxed' dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }


                <div className='bottom absolute bottom-0 w-auto px-0 py-5 m-auto'>
                    <div className='search flex items-center justify-between g-5 bg-slate-100 px-2 py-2 rounded-2xl'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} className='flex-1 bg-transparent border-none outline-none p-2 text-lg' type="text" placeholder='Type here...' />
                        <div className='flex flex-row  items-center gap-4'>
                            <img className='w-6 cursor-pointer' src={assets.gallery_icon} alt='' />
                            <img className='w-6 cursor-pointer' src={assets.mic_icon} alt='' />
                            {input ? <img onClick={() => onSent()} className='w-6 cursor-pointer' src={assets.send_icon} alt='' /> : null}
                        </div>
                    </div>
                    <p className='text-sm mx-8 my-auto text-center  font-light'>
                        Gemini may display inaccurate info,  including about people, so double-check its responses.Your privacy and Gemini Apps
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main;