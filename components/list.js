import React, { useEffect, useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import Paging from '../utils/Paging';
import { useRouter } from 'next/router'
import Router from "next/router";

function List() {

    const [data, setData] = useState([]);
    const router = useRouter();
    const [page, setPage] = useState(1);

    
    useEffect(() => {
        if(!router.isReady) return;
     }, [router.isReady])

     useEffect(() => {
        if(!page) return;
        setPage(page);
        setData(require('../json/page-' + page + '.json')); 
        
     }, [page])


     const handlePageChange = (page) => {
        setPage(page);
        Router.push("/list?page=" + page);
      };
    
      


    return (
        <React.Fragment>
            {
                data ? data.map((item, idx) => (
                <div className="col-md-4" key={idx}>
                    <div className="card mb-4 box-shadow">
                    <Image className="card-img-top" alt="Thumbnil"  width="100%" height="220px" src={item.snapshot} />
                    <div className="card-body">
                    <p className="card-text"><Link href={{pathname:"list/[id]", query:{id: idx}}}>{item.title}</Link></p>
                        <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{(item.time)}</small>
                        </div>
                    </div>
                    </div>
                </div>

                )) : ""
            }
                 <Paging handlePageChange={handlePageChange} page={page} /> 

        </React.Fragment>
    )
}

export default List

