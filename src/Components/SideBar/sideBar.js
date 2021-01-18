import React from 'react'
import style from './sideBar.module.css'



const SideBar = () => {
    return (
        <div className={style.sidebar} >
            <div className={style.sidebarBlock} >
                <div className={style.blockTitle} >Мои лиги</div>
                <div><hr /></div>
                <div className={style.blockItem} >
                    <div>Англия</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Германия</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Европа</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Испания</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Италия</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>МИР</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Россия</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Украина</div>
                    <span className={style.span}>&#9650;</span>
                </div>
                <div className={style.blockItem} >
                    <div>Франция</div>
                    <span className={style.span}>&#9650;</span>
                </div>
            </div>
            <div className={style.sidebarBlock} >
                <div className={style.blockTitle} >Страны</div>
                <hr />
                <div className={style.blockItem} >
                    <div>Австралия и Океания</div>
                </div>
                <div className={style.blockItem} >
                    <div>Азия</div>
                </div>
                <div className={style.blockItem} >
                    <div>Африка</div>
                </div>
                <div className={style.blockItem} >
                    <div>Европа</div>
                </div>
                <div className={style.blockItem} >
                    <div>Испания</div>
                </div>
                <div className={style.blockItem} >
                    <div>Италия</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar