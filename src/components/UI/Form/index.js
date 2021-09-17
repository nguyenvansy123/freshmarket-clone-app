import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import "./style.css"
/**
* @author
* @function Form
**/

const Form = (props) => {

    return (

        // <div className={props.show ? "box" : "box hiden"}>
        <div className="grid">
            <div className="row">
                <div className="col l-12 m-12 c-12">
                    <div className="modal">
                        <h2>{props.title && props.title}</h2>
                        {
                            props.input && props.input.map((value, key) => {
                                return <input
                                    type={value.type}
                                    placeholder={value.placeholder}
                                    key={key}
                                    onChange={value.onChange}
                                    value={value.value}
                                />
                            })
                        }
                        <div style={{ width: "200px", display: "flex", margin: "0 auto" }}>
                            {
                                props.link && props.link.map((value, key) => (
                                    <span
                                        key={key}
                                        className="link-form"
                                        onClick={value.onClick}
                                    >{value.title}</span>
                                ))
                            }

                        </div>

                        {
                            props.btn && props.btn.map((value, key) => {
                                return <button
                                    key={key}
                                    style={{ backgroundColor: `${value.color}` }}
                                    onClick={() => {

                                        if (value.onClick) {
                                            value.onClick && value.onClick();
                                        }
                                    }}
                                >
                                    {value.title}
                                </button>
                            })
                        }

                        <AiOutlineClose className="btn-close" onClick={props.close} />
                       
                    </div>
                </div>
            </div>
        </div>

        // </div >

    )

}

export default Form