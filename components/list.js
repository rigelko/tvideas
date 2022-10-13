import React, { useEffect, useState } from 'react';
import Image from "next/image"
import data from '../data/sample.json';
import Link from "next/link"
import { useRouter } from 'next/router'

function range(size, start) {
    return Array(size).fill(start).map((x, y) => x + y)
  }  

function List() {
    const router = useRouter();
    const page = router.query.page;
    useEffect(() => {
        if(!router.isReady) return;
    }, [router.isReady])


    return (
        <React.Fragment>
            {
                data.map((item, idx) => (
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

                ))
            }

                <div>
                    <nav>
                        <ul className="pagination pagination-lg">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1">1</a>
                            </li>
                        </ul>
                    </nav>
                </div>

        </React.Fragment>
    )
}

export default List

