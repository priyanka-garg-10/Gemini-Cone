import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const handleMenuIcon = (() => {
        setExtended(prev => !prev)
    })
    return (
        <div className=" sidebar min-h-screen flex-col inline-flex justify-between bg-slate-100 px-7 py-7">

            <div className='top'>
                <img className="w-5 block ml-4 cursor-pointer " src={assets.menu_icon} alt="" onClick={handleMenuIcon} />

                <div onClick={() => newChat()} className="mt-12 inline-flex items-center gap-6 p-3 rounded-3xl font-light cursor-pointer bg-slate-200 text-slate-600 ">
                    <img className="w-6" src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {
                    extended ? (
                        <div className="flex-col">
                            <p className="mt-6 mb-5 font-semibold">Recent</p>
                            {previousPrompt.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} className="flex cursor-pointer gap-2 p-2 pr-4 items-start rounded-3xl text-slate-600 hover:bg-slate-300">
                                        <img className="w-7" src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 18)}...</p>
                                    </div>
                                )
                            })}

                        </div>
                    ) :
                        null
                }

            </div>

            <div className="flex-col">
                <div className="flex cursor-pointer gap-2 p-2 pr-4 items-start rounded-3xl text-slate-600 hover:bg-slate-300 ">
                    <img className="w-7" src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="flex cursor-pointer gap-2 p-2 pr-4 items-start rounded-3xl text-slate-600 hover:bg-slate-300">
                    <img className="w-7" src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div >

                <div className="flex cursor-pointer gap-2 p-2 pr-4 items-start rounded-3xl text-slate-600 hover:bg-slate-300">
                    <img className="w-7" src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar