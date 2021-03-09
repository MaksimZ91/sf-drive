import  React from "react";

function About (){
  return (
  <section className="about">
   
                <img className="about__img" src="../src/img/team.svg" alt="image team"></img>
                <img className="about__img-mobile" src="../src/img/team_mobile.svg" alt="image team_mobile"></img>
                <h1>О нас</h1>
                <p className="about_txt">Это учебный проект, созданный с целью получения боевого опыта в разработке<br></br>
                                    настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга,<br></br>
                                    в котором можно не только арендовать автомобили, но и сдавать их в аренду.
                </p>
  </section>
  )
}

export default About