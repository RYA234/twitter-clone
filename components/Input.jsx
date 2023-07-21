
import {EmojiHappyIcon, PhotographIcon} from '@heroicons/react/outline';

export default function Input(){
    console.log("fdasa");
    return(
        <div className="flex border-b border-gray-200 p-3 space-x-3">
           
            <img
                src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2710623/profile-images/1655538932"
                alt="user-img"
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
            />
            <div className="w-full dived-y devide-gray-200">
                <div className="">
                    <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700">
                        What`s happening?`
                    </textarea>
                </div>
                <div className="flex" >
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold">Tweet</button>
            </div>
        </div>
    )
}