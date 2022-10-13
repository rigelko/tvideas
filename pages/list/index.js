import React from 'react'
import List from "../../components/list"
import Image from "next/image";

export default function ListPage() {
  return (
    <div>
        <main role="main">

            <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Trading Ideas</h1>
            </div>
            </section>

            <div className="album py-5 bg-light">
            <div className="container">

                <div className="row">
                    <List />
                </div>
            </div>
            </div>

        </main>

    </div>
  )
}
