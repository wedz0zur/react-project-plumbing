import React from "react";
import './Main.css'
import {Slide} from '../slider/Slider'
import { Choice } from "../choice/Choice";
import { Stocks } from "../stocks/Stocks";
import { Company } from "../Company/Company";
import { Questions } from "../questions/Questions";




export const Main = () =>{
    return(
        <main>
            <Slide/>
            <Choice/>
            <Stocks/>
            <Company/>
            <Questions/>
        </main>
    )
}