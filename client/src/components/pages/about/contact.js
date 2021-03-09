import  React from "react";

function Contact (){
  return (
    <section className="contact">
    <h2>Контакты</h2>
    <div className="contact__content">
        <div className="contact_post">
            <p className="contact_titel">Электронная почта</p>
            <p className="contact_info">drive@skillfactory.com</p>
        </div>
        <img className="contact__img" src="../src/img/rectangle.svg" alt="line"></img>
        <div className="contact__phone">
            <p className="contact_titel">Телефон</p>
            <p className="contact_info">+7 912 123-45-67</p>
        </div>
    </div> 
</section>

  )
}

export default Contact