
import {
    ChartBarIcon,
    ChatIcon,
    DOtsHorizontalIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    TrashIcon
}from "@heroicons/react/outline"

import {HeartIcon as HearticonFilled} from "@heroicons/react/solid"
import Moment from "react-moment";
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    setDoc,
} from "firebase/firestore"

import {db, storage} from "../firebase";
import {signIn, useSession} from "next-auth/react";
import {useState, useEffect} from "react";
import {deleteObject, ref} from "firebase/storage";
import {useRecoilState} from "recoil";
import {modalState, postIdState} from "../atom/modalAtom";
import {useRouter} from "next/router" 

export default function Comment({comment,commentId, originalPostId}){
    const {data: session} = useSession();
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const [open, setOpen] = useRecoilState(modalState);
    const [postId, setPostId] = useRecoilState(postIdState);
    const router = useRouter();

    useEffect(() =>{
       const unsubscribe = onSnapshot(
        collection(db,"posts", originalPostId, "comments", commentId, "likes"),
        (snapshot) => setLikes(snapshot.docs)
       ); 
    },[db,originalPostId,commentId]);

    useEffect(() => {
        setHasLiked(
          likes.findIndex((like) => like.id === session?.user.uid) !== -1
        );
      }, [likes]);

    async function likeComment(){
        if(session){
            if(hasLiked){
                await deleteDoc(
                    doc(db,"posts",originalPostId,"comments",commentId,"likes",session?.user.uid)
                )
            }else{
                await setDoc(db,"posts",orignalPostId,"comment",commentId,"likes",session?.user.uid),
                {
                    username: session.user.username,
                }
            }
        }else{
            signIn();
        }
    }

    async function deleteComment(){
        if(window.confirm("Are you sure you want to delete this comment?")){
            deleteDoc(doc(db,"posts", originalPostId,"comments", commentId));
        }
    }
    return (
    <div>
         {/* user image */}
         <img />
          {/* right side */}
         <div>
              {/* Header */}
              <div>
                    {/* post user info */}
                    <div>
                        <h4>
                            {comment?.name}
                        </h4>
                        <span>
                            @{comment?.username} -{""}
                        </span>
                        <span>
                            <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
                        </span>
                    </div>
                    {/* dot icon */}
                    <DotsHorizontalIcon className="h-10" />
              </div>
              {/* post text */}
              <p>
                {comment?.comment}
              </p>
              {/* icons */}
              <div>
                <div>
                    <ChatIcon className="h-9 w-9"/>
                </div>

                {session?.user.uid === comment?.userId &&(
                    <TrashIcon className="h-9 w-9" />
                )}

                <div>
                    {hasLiked ?(
                        <HeartIconFiled className="h-9 w-9" />
                    ):(
                        <HeartIcon className="h-9 w-9" />
                    )}

                    {likes.length > 0 &&(
                        <span>
                            {" "}
                            {likes.length}
                        </span>
                    )}
                </div>
                <ShareIcon className="h-9 w-9" />
                <ChartBarIcon className="h-9 w-9"/>
              </div>
         </div>
    </div>);
}