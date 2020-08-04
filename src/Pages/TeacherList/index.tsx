import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem' 
import './styles.css'
export default function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem name="João Pedro" company="Programação" description="Programador web junior" price="20,00"/>
            </main>
        </div>
    )
}