import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'



interface TeacherItemProps {
    img?:string;
  name: string;
  company: string;
  description: string;
  price: string;
}
const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/58999202?s=460&u=450f987552a42e720e85d49e9226122f824cf1bb&v=4"
          alt="jpbrab0"
        />
        <div>
          <strong>{props.name}</strong>
          <span>{props.company}</span>
        </div>
      </header>
        <p>{props.description}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {props.price}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};
export default TeacherItem