

import {useRecoilState} from "recoil"
import {modalState, postIdState} from "../atom/modalAtom"
import Modal from "react-modal";
import {EmojiHappyIcon,PhotographIcon, XIcon} from "@heroicons/react/outline"
import {useEffect,useState} from "react";
import {db} from "../firebase";
import {doc, onSnapshot} from "firebase/firestore"
import Moment from "react-moment"
import {useSession} from "next-auth/react";

export default function CommentModal(){
    const [open,setOpen] = useRecoilState(modalState);
    const [postId] = useRecoilState(postIdState);
    const [post, setPost] = useState({});
    const [input, setInput] = useState("");
    const {data: session} = useSession();

    useEffect(() =>{
        onSnapshot(doc(db,"posts",postId), (snapshot) =>{
            setPost(snapshot);
        });
    },[postId, db]);

    function sendComment(){}
    return(
        <div>
            {open && (
                <Modal
                    isOpen={open}
                    onRequestClose = {() => setOpen(false)}
                    className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md"
                >
                    <div className="">
                        {/* 第一 */}
                        <div className="">
                            <div
                                onClick
                                className=""
                            >
                                <XIcon className="h-[23px] text-gray-700 p-0"/>
                            </div>
                        </div>

                        {/* 第ニ  */}
                        <div className="">
                            <span className="" />
                            <img />
                            <h4 className="">
                                {post?.data()?.name}
                            </h4>
                            <span className="">
                                @{post?.data()?.username} - {" "}
                            </span>

                            <span className="">
                                <Moment fromNow>{post?.data()?.timesamp?.toDate()}</Moment>
                            </span>
                        </div>
                        <p className="">
                            {post?.data()?.text}
                        </p>

                       
                        <div className="">

                            <div className="">
                                <img />
                                <div>
                                    <div>
                                        <textarea>

                                        </textarea>
                                    </div>
                                </div>
                        
                            </div>

                            <div className="flex items-center justify-between pt-2.5"> 
                                <div className="flex">
                                    <div className="">
                                        <PhotographIcon className="h-10 w-10"/>  
                                    </div>
                                    <EmojiHappyIcon className="h-10 w-10"/>
                                </div>

                                <button
                                    onClick={sendComment}
                                    disabled={!input.trim()}
                                    className=""
                                >
                                    Reply
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </Modal>
            )}
        </div>
    )
}