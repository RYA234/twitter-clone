
import Image from "next/image";
import{HomeIcon} from "@heroicons/react/solid";
import{BellIcon,ClipboardIcon,DotsCircleHorizontalIcon,DotsHorizontalIcon,HashtagIcon,InboxIcon,UserIcon,BookmarkIcon} from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";
import {useSession, signIn, signOut} from "next-auth/react";


export default function Sidebar(){
    const {data:session} = useSession();
    return(
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/* ツイッター　ロゴ */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image
                    width="50"
                    height="50"
                    src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                ></Image>
            </div>
            {/* メニュー */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                {session && (
                    <>
                        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                        <SidebarMenuItem text="Profile" Icon={UserIcon} />
                        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
                    </>
                )}
                </div>
            {/* ボタン */}
            {session ? (
                <>
                <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover::brightness-95 text-lg hidden xl:inline">Tweet</button>

                {/* ミニプロファイル */}
                <div>
                    <img
                        src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2710623/profile-images/1655538932"
                        alt="user-img"
                        className="h-10 w-10 rounded-full xl:mr-2"
                    />
                    <div className="loading-5 hidden xl:inline">
                        <h4 className="font-bold">RYA234</h4>
                        <p className="text-gray-500">@RYA234</p>
                    </div>
                    <DotsHorizontalIcon  className="h-5 xl:ml-8 hidden xl:inline"/>
                </div>
                </>
                ):(
                    <button
                        onClick={signIn}
                        className="bg-blue-400 text-white rounded-white rounded-full w-36">
                        Sign in
                    </button>
                )}
        </div>
    )
}