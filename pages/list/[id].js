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
        console.log(item);
    }, [router.isReady])
  

  return (
    <div>
        <main role="main" className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
        <img className="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48" />
        <div className="lh-100">
          <h6 className="mb-0 text-white lh-100">Trading Ideas</h6>
        </div>
      </div>

      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">{item.title}</h6>
        <div className="media text-muted pt-3" >
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" >
            <strong className="d-block text-gray-dark">{item.name}</strong>
            <Image width="1440px" height="800px" src={item.snapshot} />
            { item.contents ? <div dangerouslySetInnerHTML={{__html: item.contents}}></div> : "" }
          </p>
        </div>
      </div>

      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>

          
            {comments.length ? comments.map((comment) => {
                return (
        <div className="media text-muted pt-3">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
            <Image width="20%" height="20%" src={comment.user.avatars.small} />{comment.user.username}
            </div>
            <span className="d-block">{comment.comment}</span>
          </div>
        </div>
                )
            }) : "" }
        
      </div>
    </main>
    </div>
  )
}
