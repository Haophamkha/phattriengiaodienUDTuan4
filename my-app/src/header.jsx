import React, { useState } from "react";

export default function Header({labels}) {
   
    return (
        <>
                <div>
                    <div>
                        <img src="" alt=""/>
                        <h1 className="tenNhan">Chefity</h1>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <input type="text" />

                    </div>
                    <div>
                        <ul>
                            {
                                labels.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <button>
                        Your Recipe Box
                    </button>
                    <img src="" alt="" />
                </div>
        </>
    );
}