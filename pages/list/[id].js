import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import data from '../../data/sample.json';
import Image from 'next/image';

export default function Id() {
    const [item, setItem] = useState([]);
    const [comments, setComments] = useState([]);

    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        if(!router.isReady) return;
        setItem(data[id]);    
        setComments(JSON.parse(data[id].comments))
    }, [router.isReady])
  

  return (
    <div>
        <div>{item.title}</div>
        <Image width="500px" height="300px" src={item.snapshot} />
        <div dangerouslySetInnerHTML={{__html: item.contents}}></div>
        <hr />
        <div>comment!</div>
        <hr />
        <div>
            {comments.length ? comments.map((comment) => {
                return (
                <p>{comment.user.username}::<Image width="20%" height="20%" src={comment.user.avatars.small} />{comment.comment}</p>
                )
            }) : "" }
        </div>
    </div>
  )
}
