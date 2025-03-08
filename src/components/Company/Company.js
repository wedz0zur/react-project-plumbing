import React from "react";
import './Company.css'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Company = ()=>{
    return(
        <section className="section3">
            <div className="company_img"></div>
            <div className="company_info">
                <p className="company_info_p1">О компании</p>
                <p className="company_info_p2">Компания DEMM, созданная в Марментино, провинция Брешиа, работает в сфере производства кранов и ванных комнат в течение последних 50 лет. Компания DEMM постоянно инвестирует в исследования и разработку новых продуктов с целью обеспечения максимальной эффективности при одновременном обеспечении качества и дизайна.</p>
                <p className="company_info_p3">«Гарантируем высочайшую безопасность и надёжность в соответствии с международными стандартами качества»</p>
                <p className="company_info_p4">Мы производим обширную коллекцию изысканных и современных смесителей и душевых кабин. Изготавливаем продукцию в очень короткие сроки. Мы динамичны, дружелюбны и всегда рады сотрудничеству!</p>
                <button className="company_btn">Подробнее <KeyboardArrowRightIcon/></button>
            </div>
        </section>
    )
}